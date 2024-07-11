import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="flex size-full min-w-[22.5rem] justify-center">
      {children}
    </main>
  );
}
