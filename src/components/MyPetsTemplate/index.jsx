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
      <PetRegisterButton className="mt-1 flex items-center justify-center gap-x-2 rounded-2xl border border-dashed border-orange-400 bg-white py-5">
        <img src={plus} alt="add" />
        <span className="text-solo-label-pc font-semibold text-orange-400">
          추가하기
        </span>
      </PetRegisterButton>
    </div>
  );
}

export default MyPetsTemplate;
