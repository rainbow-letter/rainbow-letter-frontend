import React from 'react';

type Props = {
  date: Date;
};
export default function LetterList({ date }: Props) {
  return (
    <section>
      <h3>{date.toLocaleDateString()}</h3>
    </section>
  );
}
