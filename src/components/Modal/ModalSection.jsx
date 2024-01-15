import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ModalSection({ children }) {
  const { isOpen } = useSelector((state) => state.modal);

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
      } fixed inset-y-0 bg-[#000000]/50 w-[390px] px-6 z-50`}
    >
      {children}
    </section>
  );
}
