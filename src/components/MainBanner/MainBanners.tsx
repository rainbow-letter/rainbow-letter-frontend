/* eslint-disable react/no-unstable-nested-components */
import React, { ReactNode } from 'react';

import { BANNER_ITEMS } from 'components/MainBanner/constants';
import Carousel from 'components/Carousel';
import Banner from 'components/MainBanner';

const carouselItems = BANNER_ITEMS.map((item) => (
  <Banner
    key={item.id}
    title={item.title}
    description={item.description}
    link={item.link}
    image={item.image}
    bgColor={item.bgColor}
    buttonContent={item.buttonContent}
  />
));

function MainBanners() {
  const settings = {
    dots: true,
    swipeToSlide: true,
    Infinity: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
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

  return <Carousel settings={settings} items={carouselItems} />;
}

export default MainBanners;
