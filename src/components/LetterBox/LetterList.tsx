import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { format, getDay } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store';
import LetterItem from 'components/LetterBox/LetterItem';
import Button from 'components/Button';
import { Letters } from 'types/letters';
import { PetResponse } from 'types/pets';
import { formatDay } from 'utils/date';
import Plus from '../../assets/ic_letterBox_plus.svg';

type Props = {
  date: Date;
  selectedPet: PetResponse | null;
  letterList: Letters[];
};

export default function LetterList({ date, selectedPet, letterList }: Props) {
  const navigate = useNavigate();
  const { isCalendarOpen } = useSelector((state: RootState) => state.letter);
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
  }, [selectedPet, letterList, isCalendarOpen]);

  useEffect(() => {
    if (isCalendarOpen) {
      setFilteredLetterLisByPet([]);
    }
  }, [isCalendarOpen]);

  const filteredListByDate = filteredLetterListByPet.filter(
    (letter) =>
      format(letter.createdAt, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
  );

  const formattedDay = formatDay(getDay(date));
  const dateAndDay = `${format(date, 'M월 dd일')} ${formattedDay}요일`;

  const isToday = useMemo(() => {
    const today = format(new Date(), 'yyyy-MM-dd');

    return today === format(date, 'yyyy-MM-dd');
  }, [date]);

  const onClickWriteLetterButton = useCallback(() => {
    navigate('/write-letter', { state: selectedPet });
  }, []);

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
      {isToday && (
        <Button
          onClick={onClickWriteLetterButton}
          className="mt-5 flex h-auto items-center justify-center gap-x-2 rounded-2xl border border-dashed border-orange-400 bg-white py-5"
        >
          <img src={Plus} alt="add" />
          <span className="text-[16px] font-bold leading-none text-orange-400">
            편지쓰기
          </span>
        </Button>
      )}
    </section>
  );
}
