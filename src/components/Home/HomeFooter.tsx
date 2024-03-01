import React from 'react';
import { Link } from 'react-router-dom';

import { FOOTER_MESSAGE } from 'components/Home/constants';
import blog from '../../assets/blog.png';

export default function HomeFooter() {
  return (
    <footer className="flex flex-col items-center pt-5 pb-40 text-caption text-gray-1">
      <Link to={`mailto:${FOOTER_MESSAGE.ADDRESS}`} className="mb-[1.125rem]">
        {FOOTER_MESSAGE.ADDRESS}
      </Link>
      <div className="text-center mb-[1.125rem]">
        <p>{FOOTER_MESSAGE.COPYRIGHT}</p>
        <p>{FOOTER_MESSAGE.COPYRIGHT_2}</p>
      </div>
      <Link to={`${FOOTER_MESSAGE.EMAIL}`} target="_blank">
        <img src={blog} width={46} alt="blog" />
      </Link>
    </footer>
  );
}
