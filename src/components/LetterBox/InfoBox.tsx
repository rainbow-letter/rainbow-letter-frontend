import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Pets } from 'types/pets';
import { calculateDDay } from 'utils/date';
import TagItem from 'components/LetterBox/TagItem';

type Props = {
  pet: Pets | null;
};

export default function InfoBox({ pet }: Props) {
  const navigate = useNavigate();

  const onClickProfileUpdateButton = () => {
    navigate('/my-pets/edit', { state: pet?.id });
  };

  const deathAnniversaryDDay =
    pet?.deathAnniversary && calculateDDay(pet?.deathAnniversary);

  return (
    <header className="relative pt-[15.187rem]">
      <div className="rounded-2xl bg-white px-[1.125rem] pb-[1.875rem] pt-6">
        <article className="flex items-center justify-between">
          <div className="flex grow items-center gap-4">
            <span className="text-heading-2">{pet?.name}</span>
            <span className="text-solo-large text-orange-400">
              {deathAnniversaryDDay}
            </span>
          </div>
          <button
            className="rounded-[50px] border border-gray-1 px-2 py-[4.5px] text-caption-pc leading-[12px] text-gray-1"
            type="button"
            onClick={onClickProfileUpdateButton}
          >
            프로필 수정
          </button>
        </article>
        <ul className="mt-2.5 flex flex-row gap-1.5">
          {pet?.personalities.map((personality, index) => (
            <TagItem
              key={`pets-personality-${personality}`}
              value={personality}
              bgColor={index % 2 === 0 ? 'bg-orange-100' : 'bg-orange-50'}
            />
          ))}
        </ul>
        <p className="mt-4 text-heading-3 font-[400]">
          아이에게 나는 사랑하는 {pet?.owner}
        </p>
      </div>
    </header>
  );
}
