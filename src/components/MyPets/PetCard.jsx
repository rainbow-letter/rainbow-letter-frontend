import React from 'react';

import { calculateDDay } from '../../utils/dateCalculations';
import pen from '../../assets/pen.svg';
import heart from '../../assets/heart.svg';

const dummyPet = {
  id: 1,
  name: '콩이',
  species: '고양이',
  owner: '형님',
  personalities: ['활발한', '잘삐짐'],
  deathAnniversary: '2023-01-01',
  image: {
    id: 1,
    objectKey: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    url: 'http://rainbowletter/image',
  },
  favorite: {
    id: 1,
    total: 9999,
    dayIncreaseCount: 0,
    canIncrease: true,
  },
};

function PetCard() {
  return (
    <article className="mt-1.5 p-4 rounded-2xl shadow-default">
      <header className="flex justify-between items-center mb-5 mt-2.5 ml-3">
        <div className="flex items-center grow gap-5">
          <span className="text-heading-2">{dummyPet.name}</span>
          <span className="text-solo-small text-orange-400">
            {calculateDDay(dummyPet.deathAnniversary)}
          </span>
        </div>
        <button className="pr-2" type="button">
          <img src={pen} alt="pen" />
        </button>
      </header>
      <section className="flex flex-col gap-y-3 mb-6 ml-3 text-solo-medium">
        <ul className="flex gap-x-1.5">
          {dummyPet?.personalities.map((personality) => (
            <li>{`#${personality}`}</li>
          ))}
        </ul>
        <div>{`아이에게 나는 사랑하는 ${dummyPet.owner}`}</div>
      </section>
      <footer className="h-[62px] flex gap-x-3 text-body-large">
        <button
          className="w-full px-5 py-4 text-white bg-orange-400 rounded-2xl"
          type="button"
        >
          편지 쓰러 가기
        </button>
        <button
          className="flex w-full px-5 py-4 items-center justify-between border text-orange-400 border-orange-400 rounded-2xl"
          type="button"
        >
          <span className="grow">{dummyPet.favorite.total}</span>
          <div className="p-1.5 border border-orange-100 rounded-full">
            <img className="" src={heart} alt="heart" />
          </div>
        </button>
      </footer>
    </article>
  );
}

export default PetCard;
