import { ReactNode } from 'react';

import { BANNER_ITEMS } from 'components/MainBanner/constants';
import Carousel from 'components/Carousel';
import Banner from 'components/MainBanner';

const carouselItems = BANNER_ITEMS.map((item) => (
  <Banner
    key={item.id}
    bgColor={item.bgColor}
    buttonContent={item.buttonContent}
    category={item.category}
    cover={item.cover}
    description={item.description}
    image={item.image}
    link={item.link}
    title={item.title}
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

  return <Carousel items={carouselItems} settings={settings} />;
}

export default MainBanners;
