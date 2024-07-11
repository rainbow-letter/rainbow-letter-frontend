import { useNavigate } from 'react-router-dom';

import card from '../../assets/home_card.jpeg';
import vector from '../../assets/Vector_white.svg';

export default function BackgroundSection() {
  const navigate = useNavigate();
  const onLandingPageButtonClick = () => {
    navigate('/landing');
  };

  return (
    <button
      className="absolute flex w-full justify-between bg-orange-50 py-12 pl-7 pr-4"
      onClick={onLandingPageButtonClick}
      type="button"
    >
      <div className="pt-2.5 text-left text-heading-3">
        <p className="font-bold">
          무지개 너머 <br /> 답장을 받아보세요
        </p>
        <p>마음껏, 무료로</p>
        <button
          className="mt-[1.125rem] flex items-center gap-1.5 rounded-full bg-orange-400 px-2.5 py-[0.313rem] text-body-small-pc text-white"
          type="button"
        >
          자세히 보기
          <img alt="arrow" src={vector} />
        </button>
      </div>
      <div className="flex h-[9.688rem] w-[9.875rem] items-center justify-center">
        <img
          alt="card"
          className="size-full rounded-2xl object-cover"
          src={card}
        />
      </div>
    </button>
  );
}
