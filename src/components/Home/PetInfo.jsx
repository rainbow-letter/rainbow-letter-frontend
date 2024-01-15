/* eslint-disable */
import React from 'react';

import { calculateDDay } from '../../utils/date';

import letter from '../../assets/Group 39765.svg';
import heart from '../../assets/fa-regular_heart.svg';
import arrow from '../../assets/ion_chevron-back_home_black.svg';

export default function PetInfo({ pet, letterCount }) {
  const deathAnniversaryDDay =
    pet.deathAnniversary && calculateDDay(pet.deathAnniversary);

  return (
    <article className="border rounded-[15px] mt-5 py-6 pl-6 flex flex-row items-center relative">
      <img
        src={pet && pet.image.url}
        alt="pet"
        className="w-[88px] rounded-full mr-4"
      />
      <div>
        <div className="flex gap-2 mb-[15px]">
          <h5 className="text-orange-400 text-solo-large">{pet && pet.name}</h5>
          <span className="text-caption text-gray-2 leading-none">
            {deathAnniversaryDDay}
          </span>
        </div>
        <div className="text-gray-1">
          <div className="flex gap-2.5">
            <img src={letter} alt="letter" />
            <p>보낸 편지 {letterCount}회</p>
          </div>
          <div className="flex gap-2.5">
            <img src={heart} alt="heart" />
            <p>보낸 하트 {pet && pet.favorite.total}회</p>
          </div>
        </div>
        <img src={arrow} alt="arrow" className="absolute right-4 inset-y-1/2" />
      </div>
    </article>
  );
}
