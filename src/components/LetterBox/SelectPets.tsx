import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Pets } from 'types/pets';
import Plus from '../../assets/ic_letterBox_plus.svg';

type Props = {
  list: Pets[];
  onChange: (pet: Pets) => void;
  handlePetsListShow: (state: boolean) => void;
};

export default function BottomSheetContents({
  list,
  onChange,
  handlePetsListShow,
}: Props) {
  const navigate = useNavigate();

  const onClickAddPet = useCallback(() => {
    navigate('/my-pets/register');
  }, []);

  const handleChangePet = useCallback((pet: Pets) => {
    handlePetsListShow(false);
    onChange(pet);
  }, []);

  return (
    <article className="flex w-full flex-col items-center">
      <p className="mt-5 text-heading-3">아이 선택하기</p>
      <ul className="mt-[14.5px] w-full overflow-y-scroll text-heading-3 font-[400]">
        {list.map((pet) => (
          <li
            className="border-b py-3 pl-[1.125rem]"
            key={`bottomSheet-petName-${pet.id}`}
          >
            <button
              type="button"
              onClick={() => handleChangePet(pet)}
              className="block w-full text-left"
            >
              {pet.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onClickAddPet}
        className="my-3 flex flex-row items-center gap-1.5 rounded-[8px] border border-orange-400 px-5 py-2.5"
      >
        <img src={Plus} alt="추가하기 아이콘" />
        <span className="leading-[16px] text-orange-400">추가하기</span>
      </button>
    </article>
  );
}
