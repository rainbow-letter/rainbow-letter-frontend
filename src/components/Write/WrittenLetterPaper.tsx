/* eslint-disable */
import React, { useRef, useEffect, useCallback } from 'react';

import DateCaption from './DateCaption';

type Props = {
  petName: string | null;
  content: string;
  date?: string;
  index?: number | undefined;
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
  index,
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
        {typeof index === 'number' && (
          <div className="not-label absolute -top-0.5 right-7 flex min-w-[30px] flex-col items-center rounded-b-lg rounded-t-sm bg-white px-2.5 pb-1 pt-2.5 font-sans text-orange-400">
            <p className="text-solo-large font-[350] leading-normal">
              {typeof index === 'number' && index}
            </p>
          </div>
        )}
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
