import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { format, getDay } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store';
import LetterItem from 'components/LetterBox/LetterItem';
import Button from 'components/Button';
import { LetterListResponse } from 'types/letters';
import { PetResponse } from 'types/pets';
import { formatDay } from 'utils/date';
import Plus from '../../assets/ic_letterBox_plus.svg';
import Info from '../../assets/ic_letterBox_info.svg';

type Props = {
  date: Date;
  selectedPet: PetResponse | null;
  letterList: LetterListResponse[];
};

export default function LetterList({ date, selectedPet, letterList }: Props) {
  const navigate = useNavigate();
  const { isCalendarOpen } = useSelector((state: RootState) => state.letter);
  const [filteredLetterList, setFilteredLetterList] = useState<
    LetterListResponse[]
  >([]);

  useEffect(() => {
    const filteredListByPet = letterList.filter(
      (letter) => letter.petName === selectedPet?.name
    );

    setFilteredLetterList(filteredListByPet || []);
  }, [selectedPet, letterList, isCalendarOpen]);

  useEffect(() => {
    if (isCalendarOpen) {
      setFilteredLetterList([]);
    }
  }, [isCalendarOpen]);

  const filteredListByDate = filteredLetterList.filter(
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
    navigate('/write-letter', { state: selectedPet?.id });
  }, [selectedPet?.id]);

  return (
    <section className="px-3 py-7">
      <h3 className="text-solo-large font-bold">{dateAndDay}</h3>
      <ul className="mt-5">
        {filteredListByDate.map((letter) => (
          <Link
            to={`/letter-box/${letter.id}`}
            key={`letter-item-${letter.id}`}
            state={{ index: letter.number }}
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
          <span className="pt-px text-[18px] font-bold leading-[18px] text-orange-400">
            편지쓰기
          </span>
        </Button>
      )}
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=794420&template=carousel&trackingCode=AF8807113&subId=&width=390&height=100&tsource="
        width="360"
        height="100"
        className="mt-6"
      />
      <div className="mt-4 flex items-start gap-[6.5px]">
        <img src={Info} alt="인포 아이콘" />
        <p className="text-[12px] font-[300] text-[#424242]">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
          제공받습니다.
        </p>
      </div>
    </section>
  );
}
