import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import landingItems from 'components/LandingPage/constants';
import Button from 'components/Button';
import { getToken } from 'utils/localStorage';

export default function LandingPage() {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, []);

  const onNextPageButtonClick = () => {
    navigate('/home');
  };

  return (
    <main className="min-h-screen bg-[#FFFCF7] ">
      <img src={landingItems.imageSrc} alt="landing" className="object-cover" />
      <div className="relative mx-6">
        <Button
          id="service_start"
          disabled={false}
          onClick={onNextPageButtonClick}
          className="absolute inset-x-0 bottom-16 left-1/2 transform -translate-x-1/2 text-[#000000]"
        >
          편지 쓰러 가기
        </Button>
      </div>
    </main>
  );
}
