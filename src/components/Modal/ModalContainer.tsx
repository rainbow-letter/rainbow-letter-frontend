import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ModalContainer({ children }: Props) {
  return (
    <article className="bg-white rounded-[15px] relative px-[17px] top-1/3 flex justify-center">
      {children}
    </article>
  );
}
