import React from 'react';

type Props = {
  date: string | undefined;
  dateType: string | undefined;
};

export default function DateCaption({ date, dateType }: Props) {
  return (
    <article className={`date text-right text-caption ${dateType}`}>
      <p className="font-Gyobomungo2019 text-gray-1">{date}</p>
    </article>
  );
}
