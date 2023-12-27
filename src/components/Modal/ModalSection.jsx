import React from 'react';
import { useSelector } from 'react-redux';

export default function ModalSection({ children }) {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <section
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed inset-y-0 bg-[#000000]/50 w-[390px] px-6 flex flex-col`}
    >
      {children}
    </section>
  );
}
