import React from 'react';
import { useNavigate } from 'react-router-dom';

import card from '../../assets/home_card.png';
import vector from '../../assets/Vector_white.svg';

export default function BackgroundSection() {
  const navigate = useNavigate();
  const onLandingPageButtonClick = () => {
    navigate('/landing');
  };

  return (
    <section className="bg-[#FFF8ED] flex justify-between w-full pl-7 pr-5 py-12 absolute">
      <div className="text-heading-3 pt-[0.625rem]">
        <p className="font-bold">
          무지개 너머 <br /> 답장을 받아보세요
        </p>
        <p>마음껏, 무료로</p>
        <button
          type="button"
          onClick={onLandingPageButtonClick}
          className="flex items-center gap-1.5 bg-orange-400 text-white rounded-full mt-[1.125rem] px-[0.625rem] py-[0.313rem] text-body-small-pc"
        >
          자세히 보기
          <img src={vector} alt="arrow" />
        </button>
      </div>
      <div>
        <img src={card} alt="card" />
      </div>
    </section>
  );
}
