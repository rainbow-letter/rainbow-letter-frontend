/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadLetters } from '../../../store/admin/letters';
import { getLettersForAdmin } from '../../../api/letter';
import { formatDateToYMD, getPastDate } from '../../../utils/date';

import LetterTable from './LetterTable';

const DAYS_AGO = 7;

function Letters() {
  const dispatch = useDispatch();

  const [dateRange, setDateRange] = useState({
    startDate: getPastDate(DAYS_AGO),
    endDate: formatDateToYMD(),
  });

  const setDates = (date) => {
    setDateRange(date);
  };

  const getLetters = async () => {
    const { startDate, endDate } = dateRange;
    const letters = await getLettersForAdmin(startDate, endDate);
    dispatch(loadLetters(letters.content));
  };

  useEffect(() => {
    getLetters();
  }, [dispatch]);

  return (
    <div>
      <LetterTable
        dateRange={dateRange}
        onDateSet={setDates}
        onLetterFilter={getLetters}
      />
    </div>
  );
}

export default Letters;
