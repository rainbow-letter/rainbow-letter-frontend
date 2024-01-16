/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { useDispatch } from 'react-redux';
import { toggleCheck } from '../../../store/admin/letters';
import { getFormattedDate } from '../../../utils/date';

function TableRow({ letter }) {
  const dispatch = useDispatch();
  const { id, userId, createdAt, summary, reply } = letter;

  const handleCheck = () => {
    dispatch(toggleCheck(letter.id));
    // TODO: 바로 API 보내기
  };

  return (
    <tr className="border-b">
      <td className="border px-4 py-2 text-center">{id}</td>
      <td className="border px-4 py-2">{userId}</td>
      <td className="border px-4 py-2 text-center">
        {getFormattedDate(new Date(createdAt))}
      </td>
      <td className="border px-4 py-2">{summary}</td>
      <td className="border px-4 py-2">{reply.summary}</td>
      <td className="border px-4 py-2">
        <div className="flex justify-center items-center h-full">
          <input
            className="form-checkbox h-5 w-5 text-blue-600"
            type="checkbox"
            checked={reply.inspection}
            onChange={handleCheck}
          />
        </div>
      </td>
      <td className="border px-4 py-2 text-center">
        {getFormattedDate(new Date(reply.timestamp))}
      </td>
    </tr>
  );
}

export default TableRow;
