import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import LandingItems from '../components/LandingPage/constants';
import Button from '../components/Button';

export default function LandingPage() {
  const landingImageList = useRef();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 390) {
      return setDeviceWidth(window.innerWidth);
    }

    return setDeviceWidth(390);
  }, []);

  useEffect(() => {
    landingImageList.current.style.marginLeft = `${
      -currentSlide * deviceWidth
    }px`;
  }, [currentSlide]);

  const onClickButtonNextButton = (id) => {
    if (id === LandingItems.length - 1) {
      navigate('/');
    }

    return setCurrentSlide((prev) => prev + 1);
  };

  return (
    <main>
      <ul
        ref={landingImageList}
        className="w-[1560px] min-h-screen bg-[#FFFCF7] flex items-center duration-500"
      >
        {LandingItems.map((item) => (
          <li key={item.id} className="w-[100vw]">
            <img src={item.imageSrc} alt="landing" className="object-cover" />
            <div className="relative px-3">
              <Button
                type="button"
                onClick={() => onClickButtonNextButton(item.id)}
                className="w-[353px] absolute inset-x-0 bottom-7 left-1/2 transform -translate-x-1/2"
              >
                {item.id === LandingItems.length - 1
                  ? '편지 쓰러 가기'
                  : '다음'}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
