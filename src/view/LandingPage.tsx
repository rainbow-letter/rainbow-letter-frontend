import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { getToken } from 'utils/localStorage';
import LandingItems from 'components/LandingPage/constants';
import GifImage from 'components/LandingPage/GifImage';
import Button from 'components/Button';

const DEFAULT = 390;

export default function LandingPage() {
  const navigate = useNavigate();
  const landingImageList = useRef<HTMLUListElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [deviceWidth, setDeviceWidth] = useState<number>(0);
  const [buttonId, setButtonId] = useState<string>('');
  const token = getToken();

  useEffect(() => {
    if (token) {
      return navigate('/home');
    }
    if (window.innerWidth < DEFAULT) {
      return setDeviceWidth(window.innerWidth);
    }

    return setDeviceWidth(DEFAULT);
  }, []);

  useEffect(() => {
    if (landingImageList.current) {
      landingImageList.current.style.marginLeft = `${
        -currentSlide * deviceWidth
      }px`;
    }

    if (currentSlide === LandingItems.length - 1) {
      setButtonId('service_start');
    }
  }, [currentSlide]);

  const onClickButtonNextButton = (id: number) => {
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
              {item.gifImageSrc && <GifImage src={item.gifImageSrc} />}
              <Button
                id={buttonId}
                disabled={false}
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
