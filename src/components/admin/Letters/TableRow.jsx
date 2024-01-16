/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { useDispatch } from 'react-redux';
import { toggleCheck } from '../../../store/admin/letters';
import { formatDateToYYDDMMHHMM } from '../../../utils/date';

function TableRow({ letter }) {
  const dispatch = useDispatch();
  const { id, userId, createdAt, summary, reply } = letter;

  const handleCheck = () => {
    dispatch(toggleCheck(letter.id));
    // TODO: 바로 API 보내기
  };

  return (
    <tr className="border-b">
      <td className="border p-2 text-center">{id}</td>
      <td className="border p-2">{userId}</td>
      <td className="border p-2 text-center">
        {formatDateToYYDDMMHHMM(createdAt)}
      </td>
      <td className="border p-2">
        <button type="button">{summary}</button>
      </td>
      <td className="border p-2">
        <button type="button">{reply.summary}</button>
      </td>
      <td className="border p-2">
        <div className="flex justify-center items-center h-full">
          <input
            className="form-checkbox h-5 w-5 text-blue-600"
            type="checkbox"
            checked={reply.inspection}
            onChange={handleCheck}
          />
        </div>
      </td>
      <td className="border p-2 text-center">
        {formatDateToYYDDMMHHMM(reply.timestamp)}
      </td>
    </tr>
  );
}

export default TableRow;
