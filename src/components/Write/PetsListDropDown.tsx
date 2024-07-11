import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { USER_ACTIONS } from 'components/Write/constants';
import { Pets } from 'types/pets';
import useDetectClose from 'hooks/useDetectClose';

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
  const { isOpen, setIsOpen } = useDetectClose(dropdown, false);

  const imgSrc = isOpen ? dropUpImg : dropDownImg;

  useEffect(() => {
    setIsOpen(false);
  }, [petName]);

  return (
    <section ref={dropdown} className="text-solo-medium">
      <button
        className="flex w-full items-center justify-between rounded-2xl border border-orange-400 bg-orange-50 px-6 py-[1.125rem]"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <p>{petName}</p>
        <img alt="dropdown" src={imgSrc} />
      </button>
      <div className="relative">
        {isOpen && (
          <ul className="absolute z-10 mt-1.5 w-full rounded-2xl border border-orange-400 bg-white">
            {petsList.map((pet) => (
              <li
                key={pet.id}
                className="cursor-pointer border-b border-[#EFEFEF] py-4 pl-6 last:border-none"
                onClick={() => onclick(pet)}
              >
                {pet.name}
              </li>
            ))}
            <Link
              className="flex items-center py-3 pl-3"
              to="/my-pets/register"
            >
              <img alt={plusImg} src={plusImg} />
              <p>{USER_ACTIONS.ADD}</p>
            </Link>
          </ul>
        )}
      </div>
    </section>
  );
}
