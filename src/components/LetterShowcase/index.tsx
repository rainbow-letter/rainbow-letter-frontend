/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import LetterItem from 'components/LetterShowcase/LetterItem';
import { SAMPLE_LETTERS } from 'components/LetterShowcase/constants';
import Slider from 'react-slick';

function LetterShowcase() {
  const carouselSettings = {
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
  };

  return (
    <section className="pt-8 pl-5">
      <span className="pt-5 pb-8 text-solo-large font-bold">
        무지개에 걸린 편지
      </span>
      <div className="h-6" />
      <Slider {...carouselSettings} className="h-52">
        {SAMPLE_LETTERS.map((letter) => (
          <div className="py-5 w-[138px]">
            <LetterItem key={letter.id} letter={letter} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default LetterShowcase;
