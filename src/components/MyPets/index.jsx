/* eslint-disable no-shadow */

import React, { Suspense } from 'react';

import Spinner from '../Spinner';
import PetRegisterButton from './PetRegisterButton';

import plus from '../../assets/plus.svg';

const FetchPets = React.lazy(() => import('./FetchPets'));

function MyPets() {
  return (
    <div className="h-full">
      <Suspense fallback={<Spinner />}>
        <FetchPets />
      </Suspense>
      <PetRegisterButton className="flex items-center justify-center gap-x-2 mt-1 py-5 bg-white border border-dashed border-orange-400 rounded-2xl">
        <img src={plus} alt="add" />
        <span className="text-solo-label-pc text-orange-400 font-semibold">
          추가하기
        </span>
      </PetRegisterButton>
    </div>
  );
}

export default MyPets;
