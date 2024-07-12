import React, { useState, useEffect } from 'react';
import { format, getDay } from 'date-fns';

import LetterItem from 'components/LetterBox/LetterItem';
import { Letters } from 'types/letters';
import { Pets } from 'types/pets';
import { formatDay } from 'utils/date';
import { Link } from 'react-router-dom';

type Props = {
  date: Date;
  selectedPet: Pets | null;
  letterList: Letters[];
};
export default function LetterList({ date, selectedPet, letterList }: Props) {
  const [filteredLetterListByPet, setFilteredLetterLisByPet] = useState<
    Letters[]
  >([]);

  useEffect(() => {
    const filteredListByPet = letterList.filter(
      (letter) => letter.petName === selectedPet?.name
    );
    filteredListByPet.reverse().forEach((letter: Letters, index: number) => {
      const temp = letter;
      temp.index = index + 1;

      return temp;
    });

    setFilteredLetterLisByPet(filteredListByPet.reverse() || []);
  }, [selectedPet, letterList]);

  const filteredListByDate = filteredLetterListByPet.filter(
    (letter) =>
      format(letter.createdAt, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
  );

  const formattedDay = formatDay(getDay(date));
  const dateAndDay = `${format(date, 'M월 dd일')} ${formattedDay}요일`;

  return (
    <section className="px-[1.125rem] pt-5">
      <h3 className="text-solo-large font-bold">{dateAndDay}</h3>
      <ul className="mt-5">
        {filteredListByDate.map((letter) => (
          <Link
            to={`/letter-box/${letter.id}`}
            key={`letter-item-${letter.id}`}
            state={{ index: letter.index }}
          >
            <LetterItem letter={letter} />
          </Link>
        ))}
      </ul>
    </section>
  );
}
