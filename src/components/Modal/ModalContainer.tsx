import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ModalContainer({ children }: Props) {
  return (
    <article className="bg-white rounded-2xl relative px-[1.063rem] top-[20%] flex justify-center">
      {children}
    </article>
  );
}
