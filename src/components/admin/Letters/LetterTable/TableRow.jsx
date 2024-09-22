import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { formatDateToYYDDMMHHMM } from 'utils/date';
import { adminUserLetterActions } from 'store/admin/useLetter-slice';
import { adminLetterActions } from '../../../../store/admin/letters-slice';
import { fetchLetter } from '../../../../store/admin/letters-actions';
import apiRequest from '../../../../api';

export const replyStatusInfo = {
  검수대기: 'bg-yellow-400',
  검수완료: 'bg-blue-700',
  발송완료: 'bg-green-600',
  발송실패: 'bg-red-700',
};

function TableRow({ no, letter, isChecked }) {
  const {
    id,
    email,
    count,
    createdAt,
    summary,
    submitTime,
    inspectionTime,
    status,
    userId,
    petId,
  } = letter;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRowCheck = () => {
    dispatch(adminLetterActions.toggleLetterCheck(id));
  };

  const handleReplyClick = async () => {
    dispatch(adminUserLetterActions.setFilterOption({ email }));
    // dispatch(fetchLetter(userId, petId, id));
    const res = await apiRequest.get(
      `/api/admins/letters/${id}?user=${userId}&pet=${petId}`
    );

    if (res.status === 200) {
      navigate(`/admin/letters/${id}`, { state: res.data });
    }
  };

  const replyStatus = getReplyStatus(status, inspectionTime);

  return (
    <tr className="border-b">
      <td className="border p-2">
        <div className="flex h-full items-center justify-center truncate">
          <input
            className="form-checkbox size-5"
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
          className="w-full truncate text-left"
          type="button"
          onClick={handleReplyClick}
        >
          {summary}
        </button>
      </td>
      <td className="border p-2 text-center">
        {formatDateToYYDDMMHHMM(inspectionTime)}
      </td>
      <td className="border p-2 text-center">
        {submitTime && formatDateToYYDDMMHHMM(submitTime)}
      </td>
      <td className="border p-2 text-center">{email}</td>
      <td className="border p-2 text-center">{count}</td>
    </tr>
  );
}

export default TableRow;

export function getReplyStatus(replyStatus, inspection) {
  if (replyStatus === 'REPLY') {
    return '발송완료';
  }

  if (inspection) {
    return '검수완료';
  }

  if (!inspection) {
    return '검수대기';
  }
}
