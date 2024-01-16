/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchLetters, sendLetters } from '../../../api/letter';
import {
  toggleAllChecks,
  // toggleCheck,
  // updateSendDate,
} from '../../../store/admin/letter';
import TableRow from './TableRow';

function LetterTable() {
  const dispatch = useDispatch();
  const letters = useSelector((state) => state.letters);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // fetchLetters().then((data) => {
    // dispatch(loadLetters(data));
    // });
  }, [dispatch]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    dispatch(toggleAllChecks(!selectAll));
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
    <div>
      <button type="button" onClick={handleSelectAll}>
        {selectAll ? 'Uncheck All' : 'Check All'}
      </button>
      <button type="button" onClick={handleSendLetters}>
        Send Letters
      </button>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>번호</th>
            <th>사용자ID</th>
            <th>편지 등록일</th>
            <th>편지 원본</th>
            <th>GPT 답장</th>
            <th>검수 여부</th>
            <th>답장 발송일</th>
          </tr>
        </thead>
        <tbody>
          {letters.map((letter, index) => (
            <TableRow key={letter.id} letter={letter} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LetterTable;
