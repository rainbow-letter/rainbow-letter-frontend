import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ModalLayOut({ children }: Props) {
  return (
    <main className="flex size-full min-w-[22.5rem] justify-center bg-white pb-10">
      {children}
    </main>
  );
}
