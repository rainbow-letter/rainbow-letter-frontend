import { React, useRef } from 'react';

import CoverImage from '../CoverImage';

export default function WritingPadSection({
  petName,
  image,
  onchange,
  letter,
  reply,
  date,
  className,
}) {
  const style = (image && 'pt-[243px]') || '';
  const textareaStyle = className ? 'bg-gray-2' : 'bg-orange-50';
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = `${textarea.current.scrollHeight}px`;
  };

  return (
    <section className={`relative mt-4 ${style}`}>
      <CoverImage image={image} />
      <section
        className={`${textareaStyle} py-8 px-9 rounded-[15px] text-body-letter font-OwnglyphMinhyeChae relative`}
      >
        <h3>{petName}</h3>
        <textarea
          onChange={(e) => {
            handleResizeHeight();
            onchange({
              ...letter,
              content: e.target.value,
              summary: letter.content.slice(0, 20),
            });
          }}
          ref={textarea}
          rows={9}
          defaultValue={reply}
          readOnly={reply}
          className={`${textareaStyle} w-full outline-0 resize-none bg-gradient-to-b from-transparent to-gray-300 from-[97%] to-[3%] bg-[length:32px_32px] leading-8 text-clip`}
        />
        <p className="font-sans text-caption text-gray-1 text-right">{date}</p>
      </section>
    </section>
  );
}
