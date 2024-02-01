import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import LandingItems from '../components/LandingPage/constants';
import Button from '../components/Button';

export default function LandingPage() {
  const landingImageList = useRef();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [buttonId, setButtonId] = useState(null);

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

    if (currentSlide === LandingItems.length - 1) {
      setButtonId('service_start');
    }
  }, [currentSlide]);

  const onClickButtonNextButton = (id) => {
    if (id === LandingItems.length - 1) {
      navigate('/home');
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
          <li key={item.id} className="w-[100vw] px-3">
            <img src={item.imageSrc} alt="landing" className="object-cover" />
            <div className="relative">
              <Button
                id={buttonId}
                onClick={() => onClickButtonNextButton(item.id)}
                className="absolute inset-x-0 bottom-7 left-1/2 transform -translate-x-1/2"
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
