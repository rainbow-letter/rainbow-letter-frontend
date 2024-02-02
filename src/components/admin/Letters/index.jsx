import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchLetters } from '../../../store/admin/letter-actions';
import LetterTable from './table/LetterTable';
import Pagination from './Pagination';

function Letters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLetters());
  }, [dispatch]);

  return (
    <div className="w-full min-w-[600px] text-solo-label">
      <LetterTable />
      <Pagination />
    </div>
  );
}

export default Letters;
