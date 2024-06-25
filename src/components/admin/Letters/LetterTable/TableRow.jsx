import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { formatDateToYYDDMMHHMM } from 'utils/date';
import { adminUserLetterActions } from 'store/admin/useLetter-slice';
import { adminLetterActions } from '../../../../store/admin/letter-slice';

export const replyStatusInfo = {
  검수대기: 'bg-yellow-400',
  검수완료: 'bg-blue-700',
  발송완료: 'bg-green-600',
  발송실패: 'bg-red-700',
};

function TableRow({ no, letter, isChecked }) {
  const { id, email, count, createdAt, summary, reply } = letter;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRowCheck = () => {
    dispatch(adminLetterActions.toggleLetterCheck(id));
  };

  const handleReplyClick = () => {
    dispatch(adminUserLetterActions.setFilterOption({ email }));
    navigate(`/admin/letters/${id}`);
  };

  const replyStatus = getReplyStatus(reply.timestamp, reply.inspectionTime);

  return (
    <tr className="border-b">
      <td className="border p-2">
        <div className="flex h-full items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
          <input
            className="form-checkbox h-5 w-5"
            type="checkbox"
            checked={isChecked}
            onChange={handleRowCheck}
          />
        </div>
      </td>
      <td className="border p-2 text-center">{no}</td>
      <td className="border p-2 text-center">
        {formatDateToYYDDMMHHMM(createdAt)}
      </td>
      <td className="border p-2 text-center">
        <div
          className={`rounded py-1 text-white ${replyStatusInfo[replyStatus]}`}
        >
          {replyStatus}
        </div>
      </td>
      <td className="border p-2">
        <button
          className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left"
          type="button"
          onClick={handleReplyClick}
        >
          {summary}
        </button>
      </td>
      <td className="border p-2 text-center">
        {formatDateToYYDDMMHHMM(reply.inspectionTime)}
      </td>
      <td className="border p-2 text-center">
        {reply.timestamp && formatDateToYYDDMMHHMM(reply.timestamp)}
      </td>
      <td className="border p-2 text-center">{email}</td>
      <td className="border p-2 text-center">{count}</td>
    </tr>
  );
}

export default TableRow;

export function getReplyStatus(replyTime, inspectionTime) {
  const replyDate = replyTime ? new Date(replyTime) : null;
  const inspectionDate = inspectionTime ? new Date(inspectionTime) : null;

  if (!inspectionDate) {
    return '검수대기';
  }

  if (replyDate) {
    return '발송완료';
  }

  if (inspectionDate && !replyDate) {
    const nextDay = new Date(inspectionDate);
    nextDay.setDate(inspectionDate.getDate() + 1);
    nextDay.setHours(10, 0, 0, 0);

    if (new Date() > nextDay) {
      return '발송실패';
    }

    return '검수완료';
  }

  return '검수대기';
}
