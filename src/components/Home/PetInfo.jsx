/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { calculateDDay } from '../../utils/date';

import letter from '../../assets/fa-regular_message_color.svg';
import heart from '../../assets/fa-regular_heart_color.svg';
import arrow from '../../assets/ion_chevron-back-home.svg';

export default function PetInfo({ pet, letterCount }) {
  const navigate = useNavigate();
  const deathAnniversaryDDay =
    pet.deathAnniversary && calculateDDay(pet.deathAnniversary);

  const handleScroll = () => {
    navigate('/my-pets', { state: pet.id });
  };

  return (
    <article
      onClick={handleScroll}
      className="rounded-[15px] mt-5 py-[13px] pl-5 flex flex-row items-center relative cursor-pointer shadow-default"
    >
      <img
        src={pet && pet.image.url}
        alt="pet"
        className="h-[88px] w-[88px] rounded-full mr-7"
      />
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <h5 className="text-orange-400 text-solo-large">{pet && pet.name}</h5>
          <span className="text-caption text-gray-2 leading-none ">
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
            <p>보낸 하트 {pet && pet.favoriteCount}회</p>
          </div>
        </div>
        <img
          src={arrow}
          alt="arrow"
          className="absolute right-1 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </article>
  );
}
