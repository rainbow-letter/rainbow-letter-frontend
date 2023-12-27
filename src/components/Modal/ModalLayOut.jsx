import React from 'react';

export default function ModalLayOut({ children }) {
  return (
    <main className="w-full h-full min-w-[360px] pb-10 flex justify-center bg-white">
      {children}
    </main>
  );
}
