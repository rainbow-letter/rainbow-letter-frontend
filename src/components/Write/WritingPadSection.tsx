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
          className={`${textareaStyle} whitespace-pre-wrap pt-1.5 w-full outline-0 resize-none bg-gradient-to-b from-transparent to-gray-300 from-[97%] to-[3%] bg-[length:1px_2.6rem] leading-[180%] text-clip`}
        />
        <Caption date={date} letter={letter?.content} />
      </section>
    </section>
  );
}
