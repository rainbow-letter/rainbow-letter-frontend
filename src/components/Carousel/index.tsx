/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CarouselProps = {
  settings: Record<string, unknown>;
  items: ReactNode[];
};

function Carousel({ settings, items }: CarouselProps) {
  const itemsLength = items.length;

  if (!itemsLength) return null;
  return (
    <Slider {...settings} className="h-10">
      {items.map((item) => item)}
    </Slider>
  );
}

export default Carousel;
