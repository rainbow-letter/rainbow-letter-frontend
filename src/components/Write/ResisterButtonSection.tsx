import React from 'react';
import { Link } from 'react-router-dom';

import { USER_ACTIONS } from 'components/Write/constants';
import thinPlus from '../../assets/ic_round-plus.svg';

export default function ResisterButtonSection() {
  return (
    <section className="mt-5">
      <Link
        to="/my-pets/register"
        className="py-5 gap-1.5 border border-orange-400 text-orange-400 border-dashed rounded-2xl cursor-pointer flex items-center justify-center text-solo-medium"
      >
        <img src={thinPlus} alt="thin plus icon" />
        <p>{USER_ACTIONS.RESISTER_PET}</p>
      </Link>
    </section>
  );
}
