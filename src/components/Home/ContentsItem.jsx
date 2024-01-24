import React from 'react';
import { Link } from 'react-router-dom';

import { CONTENTS_MESSAGE } from './constants';

import arrowIcon from '../../assets/ion_chevron-back-home.svg';

export default function ContentsItem() {
  return CONTENTS_MESSAGE.map((contents) => (
    <Link to={contents.url} key={contents.id} target="_blank">
      <article className="flex items-center pt-4 pb-[14px] pl-[26px] rounded-[15px] relative text-caption cursor-pointer shadow-default">
        <div className="w-8 h-8 flex justify-center items-center">
          <img src={contents.image} alt="analytics" />
        </div>
        <div className="flex flex-col ml-[14px]">
          <h3 className="text-gray-1 font-bold">{contents.title}</h3>
          <p>{contents.description}</p>
        </div>
        <img src={arrowIcon} alt="arrow" className="absolute right-3" />
      </article>
    </Link>
  ));
}
