import React from 'react';
import { Link } from 'react-router-dom';

import thinPlus from '../../assets/ic_round-plus.svg';

export default function ResisterButtonSection() {
  return (
    <section className="mt-5">
      <Link
        to="/my-pets/register"
        className="py-5 gap-1.5 border border-orange-400 text-orange-400 border-dashed rounded-[15px] cursor-pointer flex items-center justify-center text-solo-medium"
      >
        <img src={thinPlus} alt="thin plus icon" />
        <p>동물 등록하기</p>
      </Link>
    </section>
  );
}
