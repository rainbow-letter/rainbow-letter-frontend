import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'types/store';

type Props = {
  isLocalOpen?: boolean;
  children: ReactNode;
};

export default function ModalSection({ isLocalOpen, children }: Props) {
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
        isOpen || isLocalOpen ? 'block' : 'hidden'
      } fixed inset-y-0 z-50 w-[24.375rem] bg-[#000000]/50 px-6`}
    >
      {children}
    </section>
  );
}
