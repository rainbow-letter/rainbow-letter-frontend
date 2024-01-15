import React from 'react';

import { FOOTER_MESSAGE } from './constants';
import blog from '../../assets/blog.png';

export default function HomeFooter() {
  return (
    <section className="flex flex-col items-center pt-8 pb-[75px] text-caption">
      <p className="mb-[18px]">{FOOTER_MESSAGE.ADDRESS}</p>
      <div className="text-center mb-[18px]">
        <p>{FOOTER_MESSAGE.COPYRIGHT}</p>
        <p>{FOOTER_MESSAGE.COPYRIGHT_2}</p>
      </div>
      <img src={blog} width={46} alt="blog" />
    </section>
  );
}
