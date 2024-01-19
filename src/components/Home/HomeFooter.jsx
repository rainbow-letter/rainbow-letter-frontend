import React from 'react';
import { Link } from 'react-router-dom';

import { FOOTER_MESSAGE } from './constants';
import blog from '../../assets/blog.png';

export default function HomeFooter() {
  return (
    <footer className="flex flex-col items-center pt-8 pb-[75px] text-caption text-gray-1">
      <Link to={`mailto:${FOOTER_MESSAGE.ADDRESS}`} className="mb-[18px]">
        {FOOTER_MESSAGE.ADDRESS}
      </Link>
      <div className="text-center mb-[18px]">
        <p>{FOOTER_MESSAGE.COPYRIGHT}</p>
        <p>{FOOTER_MESSAGE.COPYRIGHT_2}</p>
      </div>
      <Link to="https://blog.naver.com/rainbowletter" target="_blank">
        <img src={blog} width={46} alt="blog" />
      </Link>
    </footer>
  );
}
