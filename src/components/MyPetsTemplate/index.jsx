import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPets } from 'store/pet/pet-action';
import PetRegisterButton from 'components/MyPetsTemplate/PetRegisterButton';
import PetList from './PetList';
import plus from '../../assets/plus.svg';

function MyPetsTemplate() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div className="h-full">
      <PetList />
      <PetRegisterButton className="flex items-center justify-center gap-x-2 mt-1 py-5 bg-white border border-dashed border-orange-400 rounded-2xl">
        <img src={plus} alt="add" />
        <span className="text-solo-label-pc text-orange-400 font-semibold">
          추가하기
        </span>
      </PetRegisterButton>
    </div>
  );
}

export default MyPetsTemplate;
