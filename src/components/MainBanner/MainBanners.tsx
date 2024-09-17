import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { BANNER_ITEMS } from 'components/MainBanner/constants';
import Carousel from 'components/Carousel';
import Banner from 'components/MainBanner';

const carouselItems = BANNER_ITEMS.map((item) => (
  <Banner key={item.id} link={item.link} image={item.image} />
));

function MainBanners() {
  if (BANNER_ITEMS.length === 1) {
    return (
      <>
        <Link
          to={BANNER_ITEMS[0].link}
          target="_blank"
          className="absolute flex justify-between"
        >
          <div className="flex items-center justify-center">
            <img
              className="object-fill"
              src={BANNER_ITEMS[0].image}
              alt="card"
            />
          </div>
        </Link>
        <div className="h-[40px]" />
      </>
    );
  }
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
