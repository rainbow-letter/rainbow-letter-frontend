import React, { useState, useEffect } from 'react';

type Props = {
  letter: string | undefined;
};

export default function LetterLengthCaption({ letter }: Props) {
  const [isExceeded, setIsExceeded] = useState<boolean>(false);

  const isCheckExceeded = () => {
    if (letter && letter.length >= 1000) {
      return setIsExceeded(true);
    }

    return setIsExceeded(false);
  };

  useEffect(() => {
    isCheckExceeded();
  }, [letter]);

  return (
    <article className="text-right text-caption">
      <p
        className={`${isExceeded ? 'text-alarm-red' : 'text-gray-2'} absolute right-6 font-sans`}
      >
        {`${letter?.length} / 1000`}
      </p>
    </article>
  );
}
