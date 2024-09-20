import React, { useState, useCallback } from 'react';

import BottomSheetContents from 'components/LetterBox/SelectPets';
import BottomSheet from 'components/Common/BottomSheet';
import { PetResponse } from 'types/pets';
import Arrow from '../../assets/ic_toggle_arrow.svg';

type Props = {
  selectedPet: string | undefined;
  petsList: PetResponse[];
  onChange: (pet: PetResponse) => void;
  setIsEditing: (bool: boolean) => void;
};

export default function PetsToggle({
  selectedPet,
  petsList,
  onChange,
  setIsEditing,
}: Props) {
  const [isShow, setIsShow] = useState(false);

  const handlePetsListShow = useCallback(() => {
    setIsShow((prev) => !prev);
    setIsEditing(false);
  }, []);

  return (
    <>
      <article className="relative">
        <button
          type="button"
          onClick={handlePetsListShow}
          className="absolute left-5 top-6 z-10 flex flex-row items-center gap-2.5 rounded-[8px] bg-white p-3 text-[18px] leading-[18px]"
        >
          {selectedPet}
          <img src={Arrow} alt="화살표 이미지" />
        </button>
      </article>
      <BottomSheet
        handlePetsListShow={handlePetsListShow}
        isShow={isShow}
        contents={
          <BottomSheetContents
            list={petsList}
            onChange={onChange}
            handlePetsListShow={handlePetsListShow}
          />
        }
      />
    </>
  );
}
