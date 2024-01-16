/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadLetters } from '../../../store/admin/letters';
import { getLettersForAdmin } from '../../../api/letter';
import LetterTable from './LetterTable';

function Letters() {
  const dispatch = useDispatch();

  const onGetLetters = async () => {
    const letters = await getLettersForAdmin('2024-01-13', '2024-01-16');
    dispatch(loadLetters(letters.content));
  };

  useEffect(() => {
    onGetLetters();
  }, [dispatch]);

  return (
    <div>
      <LetterTable />
    </div>
  );
}

export default Letters;
