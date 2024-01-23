import React from 'react';

export default function ModalContainer({ children }) {
  return (
    <article className="bg-white rounded-[15px] relative px-[17px] top-1/3 flex justify-center">
      {children}
    </article>
  );
}
