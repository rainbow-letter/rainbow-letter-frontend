/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadLetters } from '../../../store/admin/letters';
import { getLettersForAdmin } from '../../../api/letter';
import { formatDateToYMD, getPastDate } from '../../../utils/date';

import LetterTable from './LetterTable';
import Pagination from './Pagination';

const DAYS_AGO = 2;

function Letters() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [dateRange, setDateRange] = useState({
    startDate: getPastDate(DAYS_AGO),
    endDate: formatDateToYMD(),
  });

  const setDates = (date) => {
    setDateRange(date);
  };

  const getLetters = async () => {
    const { startDate, endDate } = dateRange;
    const response = await getLettersForAdmin(startDate, endDate, currentPage);
    dispatch(loadLetters(response.content));
    setTotalPages(response.totalPages);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getLetters();
  }, [dispatch, currentPage]);

  return (
    <div>
      <LetterTable
        dateRange={dateRange}
        onDateSet={setDates}
        onLetterFilter={getLetters}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Letters;
