import React from 'react';

import { CONTENTS_MESSAGE } from './constants';

import arrowIcon from '../../assets/ion_chevron-back-home.svg';

export default function ContentsItem() {
  return CONTENTS_MESSAGE.map((contents) => (
    <article
      key={contents.id}
      className="border w-[170px] pt-[18px] pl-5 pb-4 rounded-[15px] relative text-caption cursor-pointer"
    >
      <img src={arrowIcon} alt="arrow" className="absolute top-5 right-4" />
      <img src={contents.image} alt="analytics" />
      <h3 className="mt-[14px] text-gray-1 font-bold">{contents.title}</h3>
      <p className="mt-[11px]">
        {contents.description_top_row} <br /> {contents.description_bottom_line}
      </p>
    </article>
  ));
}
