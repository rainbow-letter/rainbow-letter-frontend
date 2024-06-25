import { ReactNode } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CarouselProps = {
  className?: string;
  settings: Record<string, unknown>;
  items: ReactNode[];
};

function Carousel({ className, settings, items }: CarouselProps) {
  const itemsLength = items.length;
  const style = className || '';

  if (!itemsLength) return null;
  return (
    <Slider {...settings} className={`h-10 ${style}`}>
      {items.map((item) => item)}
    </Slider>
  );
}

export default Carousel;
