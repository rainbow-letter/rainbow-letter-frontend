/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { USER_ACTIONS } from 'components/Write/constants';
import { Pets } from 'types/pets';
import useDetectClose from '../../hooks/useDetectClose';

import dropDownImg from '../../assets/ion_chevron-back.svg';
import dropUpImg from '../../assets/ion_chevron-up.svg';
import plusImg from '../../assets/ic_round-plus-black.svg';

type Props = {
  petName: string | null;
  petsList: Pets[];
  onclick: (pet: Pets) => void;
};

export default function PetsListDropDown({
  petName,
  petsList,
  onclick,
}: Props) {
  const dropdown = useRef<HTMLDivElement>(null);
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
              <img src={plusImg} alt={plusImg} />
              <p>{USER_ACTIONS.ADD}</p>
            </Link>
          </ul>
        )}
      </div>
    </section>
  );
}
