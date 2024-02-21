import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'types/store';

type Props = {
  children: React.ReactNode;
};

export default function ModalSection({ children }: Props) {
  const { isOpen } = useSelector((state: State) => state.modal);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed inset-y-0 bg-[#000000]/50 w-[24.375rem] px-6 z-50`}
    >
      {children}
    </section>
  );
}
