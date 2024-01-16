/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchLetters, sendLetters } from '../../../api/letter';
import {
  toggleAllChecks,
  // toggleCheck,
  // updateSendDate,
} from '../../../store/admin/letters';
import TableRow from './TableRow';

function LetterTable() {
  const dispatch = useDispatch();
  const { letters } = useSelector((state) => state.letters);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    dispatch(toggleAllChecks(newSelectAll));
  };

  const handleSendLetters = () => {
    // const lettersToSend = letters.filter(
    //   (letter) => letter.isChecked && !letter.sentDate
    // );
    // sendLetters(lettersToSend).then(() => {
    //   dispatch(updateSendDate(lettersToSend.map((letter) => letter.id)));
    // });
  };

  return (
    <div className="p-4">
      <div className="mb-4">날짜로 필터하기</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        type="button"
        onClick={handleSelectAll}
      >
        {selectAll ? 'Uncheck All' : 'Check All'}
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={handleSendLetters}
      >
        Send Letters
      </button>
      <table className="min-w-full table-auto border-collapse mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">번호</th>
            <th className="border px-4 py-2">사용자ID</th>
            <th className="border px-4 py-2">편지 등록일</th>
            <th className="border px-4 py-2">편지 원본</th>
            <th className="border px-4 py-2">GPT 답장</th>
            <th className="border px-4 py-2">검수 여부</th>
            <th className="border px-4 py-2">답장 발송일</th>
          </tr>
        </thead>
        <tbody>
          {letters?.map((letter) => (
            <TableRow key={letter.id} letter={letter} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LetterTable;
