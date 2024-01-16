import React from 'react';

import { useDispatch } from 'react-redux';
import { toggleCheck } from '../../../store/admin/letter';

function TableRow({ letter, index }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(toggleCheck(letter.id));
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={letter.isChecked}
          onChange={handleCheck}
        />
      </td>
      <td>{index + 1}</td>
      <td>{letter.userId}</td>
      <td>{letter.registrationDate}</td>
      <td>{/* 클릭 이벤트로 편지 원본 확인 가능 */}</td>
      <td>{/* 클릭 이벤트로 GPT 답장 확인 가능 */}</td>
      <td>
        <input
          type="checkbox"
          checked={letter.isChecked}
          onChange={handleCheck}
        />
      </td>
      <td>{letter.sentDate || 'Null'}</td>
    </tr>
  );
}

export default TableRow;
