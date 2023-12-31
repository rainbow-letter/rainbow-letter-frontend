/* eslint-disable */
import { React, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import useDetectClose from '../../hooks/useDetectClose';

import { USER_ACTIONS } from './constants';
import dropDownImg from '../../assets/ion_chevron-back.svg';
import dropUpImg from '../../assets/ion_chevron-up.svg';
import plusImg from '../../assets/ic_round-plus-black.svg';

export default function PetsListDropDown({ petName, petsList, onclick }) {
  const dropdown = useRef();
  const [isDropDown, setIsDropDown] = useDetectClose(dropdown, false);

  const imgSrc = isDropDown ? dropUpImg : dropDownImg;

  useEffect(() => {
    setIsDropDown(false);
  }, [petName]);

  return (
    <section ref={dropdown} className="text-solo-medium">
      <button
        type="button"
        onClick={() => setIsDropDown(!isDropDown)}
        className="w-full px-6 py-[18px] rounded-[15px] flex justify-between items-center border bg-orange-50 border-orange-400"
      >
        <p>{petName}</p>
        <img src={imgSrc} alt="dropdown" />
      </button>
      <div className="relative">
        {isDropDown && (
          <ul className="absolute w-full mt-[6px] bg-white border border-orange-400 rounded-[15px] z-10">
            {petsList.map((pet) => (
              <li
                key={pet.id}
                onClick={() => onclick(pet)}
                className="pl-6 py-[15px] border-b border-[#EFEFEF] last:border-none cursor-pointer"
              >
                {pet.name}
              </li>
            ))}
            <Link
              to="/my-pets/register"
              className="pl-3 py-3 flex items-center"
            >
              <img src={plusImg} />
              <p>{USER_ACTIONS.ADD}</p>
            </Link>
          </ul>
        )}
      </div>
    </section>
  );
}
