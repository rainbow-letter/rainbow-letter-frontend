import React from 'react';

import post from 'assets/post.svg';
// eslint-disable-next-line import/extensions
import { SampleLetter } from './index';

type LetterItemProps = {
  letter: SampleLetter;
};

function LetterItem({ letter }: LetterItemProps) {
  const { type, petName, content } = letter;
  const prefix = type === 'letter' ? 'TO' : 'FROM';
  const backgroundColor = type === 'letter' ? 'bg-gray-2' : 'bg-orange-50';

  return (
    <section className="relative flex justify-center">
      <div className="w-2.5 h-5 absolute -top-2.5">
        <img className="" src={post} alt="pin" width="100%" height="100%" />
      </div>
      <section
        className={`h-[10.562rem] w-[8.625rem] p-3.5 pb-5 font-OwnglyphMinhyeChae rounded-2xl ${backgroundColor}`}
      >
        <p className="pb-2 text-center leading-[130%]">{`${prefix}. ${petName}`}</p>
        <div
          className={`w-full h-[77%] text-[1.25rem] leading-[130%] text-center whitespace-pre-wrap ${backgroundColor} bg-[repeating-linear-gradient(to_bottom,transparent_0%,transparent_1.562rem,#BDBDBD_1.562rem,#BDBDBD_1.593rem,transparent_1.593rem,transparent_1.625rem)]`}
        >
          {content}
        </div>
      </section>
    </section>
  );
}

export default LetterItem;
