/* eslint-disable no-shadow */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchLetters,
  sendReply,
} from '../../../../store/admin/letter-actions';
import { letterUiActions } from '../../../../store/admin/letterUi-slice';
import TableRow from './TableRow';

function LetterTable() {
  const [emailValue, setEmailValue] = useState('');

  const dispatch = useDispatch();
  const { letters } = useSelector((state) => state.adminLetters);
  const { filterOption } = useSelector((state) => state.adminLetterUi);

  const handleSearchClick = () => {
    dispatch(async (dispatch) => {
      await dispatch(letterUiActions.setFilterOption({ email: emailValue }));
      dispatch(fetchLetters());
    });
  };

  const handleStatusFilterClick = (event) => {
    const { type, inspect } = event.currentTarget.dataset;
    dispatch(letterUiActions.setFilterOption({ type, inspect }));
    dispatch(fetchLetters());
  };

  const handleSendRepliesClick = () => {
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

  return (
    <div className="p-4">
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-2">
            <div className="px-4 py-2 font-semibold bg-gray-100">이메일</div>
            <input
              className="border rounded-md py-1 px-2"
              value={emailValue}
              onChange={({ target }) => setEmailValue(target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleSearchClick}
            >
              검색
            </button>
          </div>
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
          </div>
          <div className="flex items-center gap-x-3">
            <span className="font-bold">상태</span>
            <div className="flex gap-x-1 bg-gray-300 rounded-md text-white">
              <button
                className={`${filterOption.type === 'ALL' ? 'bg-blue-500' : 'bg-gray-300'} py-2 px-4 font-bold rounded-md`}
                type="button"
                data-type="ALL"
                data-inspect="null"
                onClick={handleStatusFilterClick}
              >
                전체
              </button>
              <button
                className={`${filterOption.type === 'WAIT' && filterOption.inspect === 'false' ? 'bg-blue-500' : 'bg-gray-300'} py-2 px-4 font-bold rounded-md`}
                type="button"
                data-type="WAIT"
                data-inspect="false"
                onClick={handleStatusFilterClick}
              >
                검수대기
              </button>
              <button
                className={`${filterOption.type === 'WAIT' && filterOption.inspect === 'true' ? 'bg-blue-500' : 'bg-gray-300'} py-2 px-4 font-bold rounded-md`}
                type="button"
                data-type="WAIT"
                data-inspect="true"
                onClick={handleStatusFilterClick}
              >
                검수완료
              </button>
              <button
                className={`${filterOption.type === 'COMPLETE' ? 'bg-blue-500' : 'bg-gray-300'} py-2 px-4 font-bold rounded-md`}
                type="button"
                data-type="COMPLETE"
                data-inspect="null"
                onClick={handleStatusFilterClick}
              >
                발송완료
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
            onClick={handleSendRepliesClick}
          >
            편지 보내기
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[54.375rem] table-auto border-collapse mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 whitespace-nowrap">행 체크</th>
              <th className="border px-4 py-2 whitespace-nowrap">행 NO.</th>
              <th className="border px-4 py-2 whitespace-nowrap">
                편지 등록일
              </th>
              <th className="border px-4 py-2 whitespace-nowrap">상태</th>
              <th className="border px-4 py-2 whitespace-nowrap">편지 원본</th>
              <th className="border px-4 py-2 whitespace-nowrap">검수일</th>
              <th className="border px-4 py-2 whitespace-nowrap">
                답장 발송일
              </th>
              <th className="border px-4 py-2 whitespace-nowrap">가입이메일</th>
              <th className="border px-4 py-2 whitespace-nowrap">편지회차</th>
            </tr>
          </thead>
          <tbody>
            {letters.map((letter, index) => {
              return (
                <TableRow key={letter.id} no={index + 1} letter={letter} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LetterTable;
