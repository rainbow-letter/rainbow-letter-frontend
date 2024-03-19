/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BackgroundSection from 'components/Home/BackgroundSection';

interface CarouselProps {
  items?: ReactNode[];
}

const carouselItems = [
  <BackgroundSection />,
  <BackgroundSection />,
  <BackgroundSection />,
];

function Carousel({ items = carouselItems }: CarouselProps) {
  const itemsLength = items.length;
  const settings = {
    dots: true,
    swipeToSlide: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: ReactNode) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul>{dots}</ul>
      </div>
    ),
  };

  if (!itemsLength) return null;
  return (
    <Slider {...settings} key={itemsLength} className="h-10">
      {/* {items.map((item) => item)} */}
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
}

export default Carousel;
