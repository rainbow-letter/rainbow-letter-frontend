import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { calculateDDay } from 'utils/date';
import { USER_ACTIONS, PREFIX } from './constants';
import PetCardImage from './PetCardImage';
import LikeButton from './LikeButton';
import pen from '../../assets/pen.svg';

function PetCard({ pet }, ref) {
  const navigate = useNavigate();

  const deathAnniversaryDDay =
    pet.deathAnniversary && calculateDDay(pet.deathAnniversary);

  const handleEditPet = () => {
    navigate('edit', { state: pet.id });
  };

  const handleWriteLetter = () => {
    navigate('/letter-box', { state: pet.id });
  };

  return (
    <li className="relative pt-[243px] mb-4" ref={ref}>
      <PetCardImage name={pet.name} image={pet.image} />
      <article className="relative bg-white p-4 rounded-2xl shadow-default">
        <header className="flex justify-between items-center mb-5 mt-2.5 ml-3">
          <div className="flex items-center grow gap-5">
            <span className="text-heading-2">{pet.name}</span>
            <span className="text-solo-small text-orange-400">
              {deathAnniversaryDDay}
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
      </article>
    </li>
  );
}

export default forwardRef(PetCard);
