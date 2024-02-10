import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ModalLayOut({ children }: Props) {
  return (
    <main className="w-full h-full min-w-[360px] pb-10 flex justify-center bg-white">
      {children}
    </main>
  );
}
