/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLetters, sendReply } from '../../../store/admin/letter-actions';
import { letterUiActions } from '../../../store/admin/letterUi-slice';
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

  const validateLetters = (letters) => {
    const checkedLetters = letters.filter(
      (letter) => letter.isChecked === true
    );

    if (checkedLetters.length === 0) return false;

    return checkedLetters.every(
      (letter) =>
        letter.reply?.inspection === true && letter.reply?.timestamp === null
    );
  };

  const handleStatusChange = ({ target }) => {
    dispatch(letterUiActions.setFilterOption({ type: target.value }));
    dispatch(fetchLetters());
  };

  return (
    <div className="p-4">
      <div className="flex justify-between flex-wrap">
        <div>
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
          <div className="flex items-center gap-x-3">
            <span className="font-bold">상태</span>
            <div className="flex gap-x-1 bg-gray-300 rounded-md text-white">
              <button
                className={`${filterOption.type === 'ALL' ? 'bg-blue-500' : 'bg-gray-300'} py-2 px-4 font-bold rounded-md`}
                type="button"
                value="ALL"
                onClick={handleStatusChange}
              >
                전체
              </button>
              <button
                className={`${filterOption.type === 'WAIT' ? 'bg-blue-500' : 'bg-gray-300'} py-2 px-4 font-bold rounded-md`}
                type="button"
                value="WAIT"
                onClick={handleStatusChange}
              >
                대기
              </button>
              <button
                className={`${filterOption.type === 'COMPLETE' ? 'bg-blue-500' : 'bg-gray-300'} py-2 px-4 font-bold rounded-md`}
                type="button"
                value="COMPLETE"
                onClick={handleStatusChange}
              >
                발송
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            className={`${
              !validateLetters(letters)
                ? 'bg-gray-400'
                : 'bg-green-500 hover:bg-green-700'
            } text-white font-bold py-2 px-4 items-end rounded`}
            type="button"
            disabled={!validateLetters(letters)}
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
              <th className="border px-4 py-2 whitespace-nowrap">보낸 편지</th>
              <th className="border px-4 py-2 whitespace-nowrap">동물 종류</th>
              <th className="border px-4 py-2 whitespace-nowrap">동물 성격</th>
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
              <th className="border px-4 py-2 whitespace-nowrap">답장 상태</th>
              <th className="border px-4 py-2 whitespace-nowrap">
                답장 발송일
              </th>
            </tr>
          </thead>
          <tbody>
            {letters.map((letter, index) => (
              <TableRow key={letter.id} no={index + 1} letter={letter} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LetterTable;
