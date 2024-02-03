/* eslint-disable no-shadow */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadLetters } from '../../../store/admin/letters';
import { getLettersForAdmin } from '../../../api/letter';
import { formatDateToYMD, getPastDate } from '../../../utils/date';
import { checkLetterStatus } from '../../../utils/replyStatus';

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

    const sortedResponse = [...response.content].map((letter) => ({
      ...letter,
      reply: {
        ...letter.reply,
        status: checkLetterStatus(
          letter.reply.inspectionTime,
          letter.reply.timestamp
        ),
      },
    }));

    dispatch(loadLetters(sortedResponse));
    setTotalPages(response.totalPages);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLetterFilter = () => {
    setCurrentPage(0);
    getLetters();
  };

  useEffect(() => {
    getLetters();
  }, [dispatch, currentPage]);

  return (
    <div className="w-full min-w-[600px] text-solo-label">
      <LetterTable
        dateRange={dateRange}
        onDateSet={setDates}
        onLetterFilter={handleLetterFilter}
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
