import React from 'react';
import { Link } from 'react-router-dom';

import { CONTENTS_MESSAGE } from './constants';

import arrowIcon from '../../assets/ion_chevron-back-home.svg';

export default function ContentsItem() {
  return CONTENTS_MESSAGE.map((contents) => (
    <Link to={contents.url} key={contents.id} target="_blank">
      <article className="w-[153px] py-4 md:w-[160px] md:py-[19px] pl-5 rounded-[15px] relative text-caption cursor-pointer shadow-default">
        <img src={arrowIcon} alt="arrow" className="absolute top-5 right-4" />
        <img src={contents.image} alt="analytics" />
        <h3 className="mt-[14px] text-gray-1 font-bold">{contents.title}</h3>
        <p className="mt-[11px]">
          {contents.description_top_row} <br />{' '}
          {contents.description_bottom_line}
        </p>
      </article>
    </Link>
  ));
}
