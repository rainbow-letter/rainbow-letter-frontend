import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchLetters,
  sendReply,
} from '../../../../store/admin/letters-actions';
import { letterUiActions } from '../../../../store/admin/letterUi-slice';
import TableRow from './TableRow';

function LetterTable() {
  const [emailValue, setEmailValue] = useState('');

  const dispatch = useDispatch();
  const { letters } = useSelector((state) => state.adminLetters);
  const { userId, petId } = letters;
  const { filterOption } = useSelector((state) => state.adminLetterUi);

  const handleSearchClick = () => {
    dispatch(async (dispatch) => {
      await dispatch(letterUiActions.setFilterOption({ email: emailValue }));
      dispatch(fetchLetters());
    });
  };

  const handleStatusFilterClick = (event) => {
    const { inspect, status } = event.currentTarget.dataset;
    dispatch(letterUiActions.setFilterOption({ inspect, status }));
    dispatch(fetchLetters());
  };

  const handleSendRepliesClick = () => {
    const requests = letters
      .filter(
        (letter) =>
          letter.isChecked && letter.inspection && letter.submitTime === null
      )
      .map((letter) => ({
        id: letter.id,
      }));

    dispatch(sendReply(requests));
  };

  const validateLetters = (letters) => {
    const checkedLetters = letters.filter(
      (letter) => letter.isChecked === true
    );

    if (checkedLetters.length === 0) return false;

    return checkedLetters.every(
      (letter) => letter.inspection && letter.submitTime === null
    );
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-2">
            <div className="bg-gray-100 px-4 py-2 font-semibold">이메일</div>
            <input
              className="rounded-md border px-2 py-1"
              value={emailValue}
              onChange={({ target }) => setEmailValue(target.value)}
            />
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              type="button"
              onClick={handleSearchClick}
            >
              검색
            </button>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <input
              className="rounded-md border px-2 py-1"
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
              className="rounded-md border px-2 py-1"
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
            <div className="flex gap-x-1 rounded-md bg-gray-300 text-white">
              <button
                className={`${filterOption.status === 'null' && filterOption.inspect === 'null' ? 'bg-blue-500' : 'bg-gray-300'} rounded-md px-4 py-2 font-bold`}
                type="button"
                data-inspect="null"
                data-status="null"
                onClick={handleStatusFilterClick}
              >
                전체
              </button>
              <button
                className={`${filterOption.status === 'CHAT_GPT' && filterOption.inspect === 'false' ? 'bg-blue-500' : 'bg-gray-300'} rounded-md px-4 py-2 font-bold`}
                type="button"
                data-inspect="false"
                data-status="CHAT_GPT"
                onClick={handleStatusFilterClick}
              >
                검수대기
              </button>
              <button
                className={`${filterOption.status === 'CHAT_GPT' && filterOption.inspect === 'true' ? 'bg-blue-500' : 'bg-gray-300'} rounded-md px-4 py-2 font-bold`}
                type="button"
                data-inspect="true"
                data-status="CHAT_GPT"
                onClick={handleStatusFilterClick}
              >
                검수완료
              </button>
              <button
                className={`${filterOption.status === 'REPLY' ? 'bg-blue-500' : 'bg-gray-300'} rounded-md px-4 py-2 font-bold`}
                type="button"
                data-inspect="true"
                data-status="REPLY"
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
            } items-end rounded px-4 py-2 font-bold text-white`}
            type="button"
            disabled={!validateLetters(letters)}
            onClick={handleSendRepliesClick}
          >
            편지 보내기
          </button>
        </div>
      </div>

      {letters.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="mt-4 w-full min-w-[54.375rem] table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="whitespace-nowrap border px-4 py-2">행 체크</th>
                <th className="whitespace-nowrap border px-4 py-2">행 NO.</th>
                <th className="whitespace-nowrap border px-4 py-2">
                  편지 등록일
                </th>
                <th className="whitespace-nowrap border px-4 py-2">상태</th>
                <th className="whitespace-nowrap border px-4 py-2">
                  편지 원본
                </th>
                <th className="whitespace-nowrap border px-4 py-2">검수일</th>
                <th className="whitespace-nowrap border px-4 py-2">
                  답장 발송일
                </th>
                <th className="whitespace-nowrap border px-4 py-2">
                  가입이메일
                </th>
                <th className="whitespace-nowrap border px-4 py-2">편지회차</th>
              </tr>
            </thead>
            <tbody>
              {letters.map((letter, index) => {
                return (
                  <TableRow
                    key={letter.id}
                    no={index + 1}
                    letter={letter}
                    userId={userId}
                    pertId={petId}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-10 text-center">검색 결과가 없습니다.</div>
      )}
    </div>
  );
}

export default LetterTable;
