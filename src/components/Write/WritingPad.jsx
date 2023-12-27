/* eslint-disable */
import { React, useRef } from 'react';

export default function WritingPad({ IS_REGISTER_PET }) {
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  return (
    <section className="mt-4 bg-orange-50 py-8 px-9 rounded-[15px] text-body-letter font-OwnglyphMinhyeChae">
      <h3>{!IS_REGISTER_PET && '나나에게'}</h3>
      <textarea
        onChange={() => handleResizeHeight()}
        ref={textarea}
        rows={9}
        className="bg-orange-50 w-full outline-0 resize-none bg-gradient-to-b from-transparent to-gray-300 from-[97%] to-[3%] bg-[length:32px_32px] leading-8 text-clip"
      />
    </section>
  );
}
