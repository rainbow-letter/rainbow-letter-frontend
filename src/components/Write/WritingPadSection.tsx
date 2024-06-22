/* eslint-disable */
import React, { useState, useRef, useEffect, useCallback } from 'react';

import { getImage } from 'api/images';
import Caption from 'components/Write/Caption';
import defaultImage from 'assets/Logo_256px.png';
import CoverImage from 'components/CoverImage';
import { PetImage } from 'types/pets';

type Letter = {
  summary: string;
  content: string;
};

type Props = {
  id?: number;
  petName: string | null;
  image: PetImage | null;
  reply?: string;
  date?: string;
  className?: string;
  onchange?: (letter: any) => void;
  letter?: Letter;
  index?: number | undefined;
  saveType?: {
    target: 'letter_down' | 'reply_down';
    unTargetValue: 'letter_value' | 'reply_value';
    date: 'letter_date' | 'reply_date';
  };
};

const MAX_LENGTH = 1000;
function WritingPadSection({
  id,
  petName,
  image,
  onchange,
  letter,
  reply,
  date,
  className,
  index,
  saveType,
}: Props) {
  const style = (image && 'pt-[15.187rem]') || 'mt-4';
  const textareaStyle = className ? 'bg-gray-2' : 'bg-orange-50';
  const textarea = useRef<HTMLTextAreaElement>(null);
  const [petImage, setPetImage] = useState('');

  useEffect(() => {
    const getPetImage = async () => {
      if (image?.objectKey) {
        const data = await getImage(image.objectKey);
        return setPetImage(data);
      }

      return setPetImage(defaultImage);
    };

    getPetImage();
  }, [id]);

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
      <CoverImage image={petImage} />
      <section
        className={`${textareaStyle} ${saveType?.target} relative rounded-2xl px-6 py-8 font-Gyobomungo2019 text-body-letter text-gray-1`}
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
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            handleTextarea(e);
          }}
          ref={textarea}
          rows={7}
          defaultValue={reply ? reply : letter?.content}
          readOnly={!!reply}
          maxLength={MAX_LENGTH}
          onInput={onUserGuessInput}
          spellCheck="false"
          className={`${textareaStyle} ${saveType?.unTargetValue} mt-1 w-full resize-none text-clip whitespace-pre-wrap pt-1.5 leading-[170%] outline-0`}
        />
        <Caption
          date={date}
          letter={letter?.content}
          dateType={saveType?.date}
        />
      </section>
    </section>
  );
}

export default WritingPadSection;
