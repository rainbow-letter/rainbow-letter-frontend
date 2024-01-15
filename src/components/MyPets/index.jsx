/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getPets } from '../../api/pets';
import PetCard from './PetCard';
import NoPets from './NoPets';
import plus from '../../assets/plus.svg';
import PetRegisterButton from './PetRegisterButton';

function MyPets() {
  const location = useLocation();
  const ref = useRef([]);
  const [pets, setPets] = useState([]);
  const existingPets = pets.length > 0;

  const handleGetPets = async () => {
    const response = await getPets();
    setPets(response.pets);
  };

  useEffect(() => {
    handleGetPets();
  }, []);

  useEffect(() => {
    if (location.state) {
      ref.current[location.state]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [pets]);

  if (!existingPets) return <NoPets />;
  return (
    <>
      <ul className="px-2">
        {pets.map((pet) => (
          <li
            className="h-[487px] w-full"
            key={pet.id}
            ref={(el) => {
              ref.current[pet.id] = el;
            }}
          >
            <PetCard pet={pet} />
          </li>
        ))}
      </ul>
      <PetRegisterButton className="flex items-center justify-center gap-x-2 py-5 bg-white border border-dashed border-orange-400 rounded-2xl">
        <img src={plus} alt="add" />
        <span className="pt-1 text-solo-label-pc text-orange-400 font-semibold">
          추가하기
        </span>
      </PetRegisterButton>
    </>
  );
}

export default MyPets;
