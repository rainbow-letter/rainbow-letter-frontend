/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from 'components/MainBanner';
import { BANNER_ITEMS } from 'components/MainBanner/constants';

interface CarouselProps {
  items?: ReactNode[];
}

const carouselItems = BANNER_ITEMS.map((item) => (
  <Banner
    title={item.title}
    description={item.description}
    link={item.link}
    image={item.image}
    bgColor={item.bgColor}
    buttonContent={item.buttonContent}
  />
));

function Carousel({ items = carouselItems }: CarouselProps) {
  const itemsLength = items.length;
  const settings = {
    dots: true,
    swipeToSlide: true,
    Infinity: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots: ReactNode) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '17px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: 'slick-dots',
  };

  if (!itemsLength) return null;
  return (
    <Slider {...settings} key={itemsLength} className="h-10">
      {items.map((item) => item)}
    </Slider>
  );
}

export default Carousel;
