import React, { useState, useEffect, useCallback } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import useCalendar from 'hooks/useCalendar';
import letterSlice from 'store/letter/letter-slice';
import Divider from 'components/Home/Divider';
import MonthCalendar from 'components/LetterBox/MonthCalendar';
import Left from '../../assets/ic_letterBox_left.svg';
import Right from '../../assets/ic_letterBox_right.svg';
import DropDown from '../../assets/ic_letterBox_dropdown.svg';
import Stamp from '../../assets/ic_letterBox_stamp.svg';

const DAY_OF_THE_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

type Props = {
  setDate: (date: Date) => void;
  selectedDate: Date;
  letterList: string[];
};

export default function WeekCalendar({
  setDate,
  selectedDate,
  letterList,
}: Props) {
  const dispatch = useDispatch();
  const {
    currentDate,
    setCurrentDate,
    weekCalendarListForWeeks,
    weekCalendarList,
  } = useCalendar();
  const { isCalendarOpen } = useSelector((state: RootState) => state.letter);
  const yearAndMonth = `${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월`;
  const [weekCalendar, setWeekCalendar] = useState<number[]>([]);

  useEffect(() => {
    const findIndex = weekCalendarList.findIndex((weeks: string[]) =>
      weeks.includes(format(currentDate, 'yyyy-MM-dd'))
    );

    setWeekCalendar(weekCalendarListForWeeks[findIndex]);
  }, [currentDate]);

  const onClickNextWeek = useCallback(() => {
    setCurrentDate(addDays(currentDate, 7));
  }, [currentDate]);

  const onClickPrevWeek = useCallback(() => {
    setCurrentDate(subDays(currentDate, 7));
  }, [currentDate]);

  const onClickDateButton = useCallback((date: number) => {
    setDate(new Date(date));
  }, []);

  const onClickMonthCalendar = useCallback(() => {
    const action = letterSlice.actions.setCalendarOpen();
    dispatch(action);
  }, [dispatch]);

  const isActiveDate = useCallback(
    (date: number) => {
      if (format(selectedDate, 'yyyy-MM-dd') === String(date)) {
        return true;
      }

      return false;
    },
    [selectedDate]
  );

  const isExistWrittenLetter = useCallback(
    (date: number) => {
      return letterList.includes(String(date));
    },
    [letterList]
  );

  const isToday = useCallback((date: number) => {
    const today = format(new Date(), 'yyyy-MM-dd');

    return today === String(date) ? 'bg-orange-400' : 'bg-gray-2';
  }, []);

  return (
    <>
      <section className="px-[1.125rem] py-8">
        <header className="flex justify-between">
          <button
            type="button"
            onClick={onClickPrevWeek}
            className="flex items-center gap-1.5"
          >
            <img src={Left} alt="왼쪽 화살표 아이콘" />
            <span className="mt-px text-[10px]">이전 주</span>
          </button>
          <button
            type="button"
            onClick={onClickMonthCalendar}
            className="flex items-center"
          >
            <p className="text-[1.125rem] font-bold">{yearAndMonth}</p>
            <img src={DropDown} alt="드롭다운 아이콘" />
          </button>
          <button
            type="button"
            onClick={onClickNextWeek}
            className="flex items-center gap-1.5"
          >
            <span className="mt-px text-[10px]">다음 주</span>
            <img src={Right} alt="오른쪽 화살표 아이콘" />
          </button>
        </header>
        <article className="mt-5">
          <ul className="flex justify-around">
            {DAY_OF_THE_WEEK.map((day: string) => (
              <li key={`letterBox-day-${day}`} className="text-xs text-gray-5">
                {day}
              </li>
            ))}
          </ul>
          <ul className="mt-1.5 flex justify-around">
            {weekCalendar &&
              weekCalendar.map((day: number) => (
                <li
                  key={`letterBox-calendar-${day}`}
                  className="flex flex-col items-center"
                >
                  <button
                    type="button"
                    onClick={() => onClickDateButton(day)}
                    className={`${isExistWrittenLetter(day) ? 'bg-orange-50' : isToday(day)} mb-1.5 h-[3.125rem] w-11 rounded-lg`}
                  >
                    {isExistWrittenLetter(day) && (
                      <img src={Stamp} alt="썸네일" />
                    )}
                  </button>
                  <p
                    className={`${isActiveDate(day) ? 'bg-orange-400 text-white' : 'text-gray-5'} h-3.5 w-[1.875rem] rounded-[10px] text-center text-xs`}
                  >
                    {format(day, 'dd')}
                  </p>
                </li>
              ))}
          </ul>
        </article>
      </section>
      {isCalendarOpen && (
        <MonthCalendar
          weekCalendarList={weekCalendarList}
          letterList={letterList}
          setDate={setDate}
          selectedDate={selectedDate}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      )}
      <Divider />
    </>
  );
}