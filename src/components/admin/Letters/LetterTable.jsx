/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAllChecks } from '../../../store/admin/letters';
import TableRow from './TableRow';

function LetterTable({ dateRange, onDateSet, onLetterFilter }) {
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

  const handleDateSet = (date) => {
    const newDate = { ...dateRange, ...date };
    onDateSet(newDate);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="mb-4 flex items-center gap-2">
          <input
            className="border rounded-md py-1 px-2"
            type="date"
            value={dateRange.startDate}
            onChange={({ target }) =>
              handleDateSet({ startDate: target.value })
            }
          />
          <span>부터</span>
          <input
            className="border rounded-md py-1 px-2"
            type="date"
            value={dateRange.endDate}
            onChange={({ target }) => handleDateSet({ endDate: target.value })}
          />
          <span>까지</span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onLetterFilter}
          >
            검색
          </button>
        </div>
        <div>
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
        </div>
      </div>
      <table className="min-w-full table-auto border-collapse mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">번호</th>
            <th className="border px-4 py-2">사용자 ID</th>
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
