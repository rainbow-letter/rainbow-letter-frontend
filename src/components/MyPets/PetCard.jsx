/* eslint-disable import/no-cycle */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { USER_ACTIONS, PREFIX } from './constants';
import { calculateDDay } from '../../utils/dateCalculations';
import pen from '../../assets/pen.svg';
import PetCardImage from './PetCardImage';
import LikeButton from './LikeButton';

function PetCard({ pet }) {
  const navigate = useNavigate();

  const handleEditPet = () => {
    navigate('edit', { state: pet.id });
  };

  const handleWriteLetter = () => {
    navigate('/letter-box', { state: pet.id });
  };

  return (
    <article className="relative">
      <PetCardImage name={pet.name} image={pet.image} />
      <div className="absolute top-60 w-full bg-white p-4 rounded-2xl shadow-default">
        <header className="flex justify-between items-center mb-5 mt-2.5 ml-3">
          <div className="flex items-center grow gap-5">
            <span className="text-heading-2">{pet.name}</span>
            <span className="text-solo-small text-orange-400">
              {calculateDDay(pet.deathAnniversary)}
            </span>
          </div>
          <button className="pr-2" type="button" onClick={handleEditPet}>
            <img src={pen} alt="edit" />
          </button>
        </header>
        <section className="flex flex-col gap-y-3 mb-6 ml-3 text-solo-medium">
          <ul className="flex gap-x-1.5">
            {pet?.personalities.map((personality) => (
              <li
                key={personality}
              >{`${PREFIX.PET_PERSONALITY}${personality}`}</li>
            ))}
          </ul>
          <div>{`${PREFIX.OWNER}${pet.owner}`}</div>
        </section>
        <footer className="h-[62px] flex gap-x-3 text-body-large">
          <button
            className="w-full px-5 py-4 flex-1 text-white bg-orange-400 rounded-2xl"
            type="button"
            onClick={handleWriteLetter}
          >
            {USER_ACTIONS.GO_TO_LETTERS}
          </button>
          <LikeButton favoriteData={pet.favorite} />
        </footer>
      </div>
    </article>
  );
}

export default PetCard;
