/* eslint-disable */
import React, { useRef, useEffect, useCallback } from 'react';

import Caption from 'components/Write/Caption';
import CoverImage from 'components/CoverImage';

type Letter = {
  summary: string;
  content: string;
};

type Props = {
  petName: string | null;
  image: string | null;
  reply?: string;
  date?: string;
  className?: string;
  onchange?: (letter: any) => void;
  letter?: Letter;
  index?: number | undefined;
};

const MAX_LENGTH = 1000;

export default function WritingPadSection({
  petName,
  image,
  onchange,
  letter,
  reply,
  date,
  className,
  index,
}: Props) {
  const style = (image && 'pt-[15.187rem]') || '';
  const textareaStyle = className ? 'bg-gray-2' : 'bg-orange-50';
  const textarea = useRef<HTMLTextAreaElement>(null);

  const onUserGuessInput = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const maxLengthCheck = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length > e.target.maxLength) {
          e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
      };

      return maxLengthCheck(e);
    },
    []
  );

  const handleResizeHeight = useCallback(() => {
    if (textarea.current) {
      textarea.current.style.height = `${textarea.current.scrollHeight}px`;
    }
  }, []);

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleResizeHeight();
    if (onchange) {
      onchange({
        ...letter,
        content: e.target.value,
        summary: letter?.content.slice(0, 20),
      });
    }
  };

  useEffect(() => {
    handleResizeHeight();
  }, [reply]);

  return (
    <section className={`relative mt-4 ${style}`}>
      <CoverImage image={image} />
      <section
        className={`${textareaStyle} text-gray-1 py-8 px-6 rounded-2xl text-body-letter font-Gyobomungo2019 relative`}
      >
        {typeof index === 'number' && (
          <div className="flex flex-col min-w-[30px] bg-white items-center px-2.5 pt-2.5 pb-1 rounded-t-sm rounded-b-lg absolute -top-0.5 right-7 text-orange-400 font-sans">
            <p className="text-solo-large font-[350] leading-normal">
              {typeof index === 'number' && index}
            </p>
          </div>
        )}

        <h3>{petName}</h3>
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            handleTextarea(e);
          }}
          ref={textarea}
          rows={7}
          defaultValue={reply}
          readOnly={!!reply}
          maxLength={MAX_LENGTH}
          onInput={onUserGuessInput}
          spellCheck="false"
          className={`${textareaStyle} whitespace-pre-wrap pt-1.5 w-full outline-0 resize-none leading-[170%] text-clip`}
        />
        <Caption date={date} letter={letter?.content} />
      </section>
    </section>
  );
}
