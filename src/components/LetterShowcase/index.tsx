/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import LetterItem from 'components/LetterShowcase/LetterItem';
import { SHOWCASE_LETTERS } from 'components/LetterShowcase/constants';
import Slider from 'react-slick';

const SHOWCASE_CAROUSEL_OPTIONS = {
  swipeToSlide: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  slidesToShow: 2,
  slidesToScroll: 1,
  className: 'center',
  centerMode: true,
  centerPadding: '30px',
  speed: 500,
} as const;

function LetterShowcase() {
  return (
    <section className="pl-5 pt-8">
      <span className="pb-8 pt-5 text-solo-large font-bold">
        무지개에 걸린 편지
      </span>
      <div className="h-6" />
      <Slider {...SHOWCASE_CAROUSEL_OPTIONS} className="h-52">
        {SHOWCASE_LETTERS.map((letter, i) => (
          <div className="w-[138px] py-5" key={letter.id}>
            <LetterItem letter={letter} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default LetterShowcase;
