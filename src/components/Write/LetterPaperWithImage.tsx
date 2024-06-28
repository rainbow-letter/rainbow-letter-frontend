import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function LetterPaperWithImage({ children }: Props) {
  return <section className="relative">{children}</section>;
}
