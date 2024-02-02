/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchLetters,
  sendReply,
} from '../../../../store/admin/letter-actions';
import { letterUiActions } from '../../../../store/admin/letterUi-slice';
import TableRow from './TableRow';

function LetterTable() {
  const dispatch = useDispatch();
  const { letters } = useSelector((state) => state.adminLetters);
  const { filterOption } = useSelector((state) => state.adminLetterUi);

  const handleSendReplies = () => {
    const requests = letters
      .filter(
        (letter) =>
          letter.isChecked && letter.reply.inspection && !letter.reply.timestamp
      )
      .map((letter) => ({
        replyId: letter.reply.id,
        letterId: letter.id,
      }));

    dispatch(sendReply(requests));
  };

  const areAllCheckedLettersFailed = (letters) => {
    const checkedLetters = letters.filter((letter) => letter.isChecked);
    if (checkedLetters.length === 0) {
      return false;
    }

    return checkedLetters.every((letter) => letter.reply.status === '실패');
  };

  const allCheckedAreFailed = areAllCheckedLettersFailed(letters);

  return (
    <div className="p-4">
      <div className="flex justify-between flex-wrap">
        <div className="mb-4 flex items-center gap-2">
          <input
            className="border rounded-md py-1 px-2"
            type="date"
            value={filterOption.startDate}
            onChange={({ target }) =>
              dispatch(
                letterUiActions.setFilterOption({ startDate: target.value })
              )
            }
          />
          <span>부터</span>
          <input
            className="border rounded-md py-1 px-2"
            type="date"
            value={filterOption.endDate}
            onChange={({ target }) =>
              dispatch(
                letterUiActions.setFilterOption({ endDate: target.value })
              )
            }
          />
          <span>까지</span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => dispatch(fetchLetters())}
          >
            검색
          </button>
        </div>
        <div>
          <button
            className={`${
              !allCheckedAreFailed
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-700'
            } text-white font-bold py-2 px-4 rounded`}
            type="button"
            disabled={!allCheckedAreFailed}
            onClick={handleSendReplies}
          >
            편지 보내기
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[870px] table-auto border-collapse mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 whitespace-nowrap">행 체크</th>
              <th className="border px-4 py-2 whitespace-nowrap">행 NO.</th>
              <th className="border px-4 py-2 whitespace-nowrap">사용자 ID</th>
              <th className="border px-4 py-2 whitespace-nowrap">
                편지 등록일
              </th>
              <th className="border px-4 py-2 whitespace-nowrap">편지 원본</th>
              <th className="border px-4 py-2 whitespace-nowrap">
                GPT 답장 원본
              </th>
              <th className="border px-4 py-2 whitespace-nowrap">최종 답장</th>
              <th className="border px-4 py-2 whitespace-nowrap">검수 여부</th>
              <th className="border px-4 py-2 whitespace-nowrap">검수일</th>
              <th className="border px-4 py-2 whitespace-nowrap">
                답장 발송 여부
              </th>
              <th className="border px-4 py-2 whitespace-nowrap">
                답장 발송일
              </th>
            </tr>
          </thead>
          <tbody>
            {letters
              ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((letter, index) => (
                <TableRow key={letter.id} no={index + 1} letter={letter} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LetterTable;
