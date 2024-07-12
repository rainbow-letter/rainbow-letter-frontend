import React, { useState, useEffect, useCallback } from 'react';
import { addDays, subDays } from 'date-fns';

import useCalendar from 'hooks/useCalendar';
import Divider from 'components/Home/Divider';
import Left from '../../assets/ic_letterBox_left.svg';
import Right from '../../assets/ic_letterBox_right.svg';
import DropDown from '../../assets/ic_letterBox_dropdown.svg';
import TestLogo from '../../assets/logo.png';

const DAY_OF_THE_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

type Props = {
  setDate: (date: Date) => void;
  date: Date;
};

export default function WeekCalendar({ setDate, date }: Props) {
  const {
    currentDate,
    setCurrentDate,
    weekCalendarListForWeeks,
    weekCalendarList,
  } = useCalendar();

  const yearAndMonth = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  const [weekCalendar, setWeekCalendar] = useState<number[]>([]);
  const [activeWeek, setActiveWeek] = useState<number[]>([]);

  useEffect(() => {
    const findIndex = weekCalendarList.findIndex((weeks: number[]) =>
      weeks.includes(currentDate.getDate())
    );

    setWeekCalendar(weekCalendarListForWeeks[findIndex]);
  }, [currentDate]);

  const onClickNextWeek = useCallback(() => {
    setCurrentDate(addDays(currentDate, 7));
    setActiveWeek([]);
  }, [currentDate]);

  const onClickPrevWeek = useCallback(() => {
    setCurrentDate(subDays(currentDate, 7));
    setActiveWeek([]);
  }, [currentDate]);

  const onClickDateButton = useCallback(
    (day: number) => {
      const currentIndex = weekCalendar.findIndex(
        (value) => value === currentDate.getDate()
      );
      const selectedIndex = weekCalendar.findIndex((value) => value === day);
      const differenceDay = currentIndex - selectedIndex;

      setDate(subDays(currentDate, differenceDay));
      setActiveWeek(weekCalendar);
    },
    [currentDate, weekCalendar]
  );

  const isActiveDate = (day: number, index: number) => {
    const isCorrectYearAndMonth =
      date.getFullYear() === currentDate.getFullYear() &&
      date.getMonth() === currentDate.getMonth();

    const findIndexOfActiveWeek = activeWeek.findIndex(
      (item) => item === date.getDate()
    );

    if (date.getDate() === day && isCorrectYearAndMonth) {
      return true;
    }

    if (findIndexOfActiveWeek === index) {
      return true;
    }

    return false;
  };

  return (
    <>
      <section className="px-[1.125rem] py-8">
        <header className="flex justify-between">
          <button
            type="button"
            onClick={onClickPrevWeek}
            className="flex items-center gap-[6px]"
          >
            <img src={Left} alt="왼쪽 화살표 아이콘" />
            <span className="mt-px text-[10px]">이전 주</span>
          </button>
          <button type="button" className="flex items-center">
            <p className="text-[18px] font-bold">{yearAndMonth}</p>
            <img src={DropDown} alt="드롭다운 아이콘" />
          </button>
          <button
            type="button"
            onClick={onClickNextWeek}
            className="flex items-center gap-[6px]"
          >
            <span className="mt-px text-[10px]">다음 주</span>
            <img src={Right} alt="오른쪽 화살표 아이콘" />
          </button>
        </header>
        <article className="mt-5">
          <ul className="flex justify-around">
            {DAY_OF_THE_WEEK.map((day: string) => (
              <li
                key={`letterBox-day-${day}`}
                className="text-xs text-[#989898]"
              >
                {day}
              </li>
            ))}
          </ul>
          <ul className="mt-[6px] flex justify-around">
            {weekCalendar.map((day: number, index: number) => (
              <li
                key={`letterBox-calendar-${day}`}
                className="flex flex-col items-center"
              >
                <button
                  type="button"
                  onClick={() => onClickDateButton(day)}
                  className="mb-[6px] h-[50px] w-[44px] rounded-[8px] bg-gray-2"
                >
                  <img src={TestLogo} alt="썸네일" />
                </button>
                <p
                  className={`${isActiveDate(day, index) ? 'bg-orange-400 text-white' : 'text-[#989898]'} h-[14px] w-[30px] rounded-[10px] text-center text-xs`}
                >
                  {day}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <Divider />
    </>
  );
}
