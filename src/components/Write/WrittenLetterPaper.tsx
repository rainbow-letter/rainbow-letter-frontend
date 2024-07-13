/* eslint-disable */
import React, { useRef, useEffect, useCallback } from 'react';

import DateCaption from './DateCaption';

type Props = {
  petName: string | null;
  content: string;
  date?: string;
  saveType?: {
    target: 'letter_down' | 'reply_down';
    unTargetValue: 'letter_value' | 'reply_value';
    date: 'letter_date' | 'reply_date';
  };
  className?: string;
  letterPaperColor: string;
};

export default function WrittenLetterPaper({
  petName,
  content,
  date,
  saveType,
  className,
  letterPaperColor,
}: Props) {
  const textarea = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (textarea.current) {
      textarea.current.style.height = `${textarea.current.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    handleResizeHeight();
  }, [content]);

  return (
    <section className={`relative mt-4 ${className}`}>
      <section
        className={`${saveType?.target} ${letterPaperColor} relative rounded-2xl px-6 py-8 font-Gyobomungo2019 text-body-letter text-gray-1`}
      >
        <h3>{petName}</h3>
        <textarea
          ref={textarea}
          rows={7}
          defaultValue={content}
          readOnly
          className={`${saveType?.unTargetValue} ${letterPaperColor} mt-1 w-full resize-none text-clip whitespace-pre-wrap pt-1.5 leading-[170%] outline-0`}
        />
        <DateCaption date={date} dateType={saveType?.date} />
      </section>
    </section>
  );
}
