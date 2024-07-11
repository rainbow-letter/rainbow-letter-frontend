import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function LetterPaperWithImage({ children }: Props) {
  return <section className="relative">{children}</section>;
}
