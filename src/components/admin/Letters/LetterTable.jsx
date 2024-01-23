/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateSendDate } from '../../../store/admin/letters';
import { sendReply } from '../../../api/reply';
import TableRow from './TableRow';

function LetterTable({ dateRange, onDateSet, onLetterFilter }) {
  const dispatch = useDispatch();
  const { letters } = useSelector((state) => state.letters);
  // const [selectAll, setSelectAll] = useState(false);

  // const handleSelectAll = async () => {
  //   const newSelectAll = !selectAll;
  //   setSelectAll(newSelectAll);

  //   const requests = letters
  //     .filter((letter) => letter.reply.inspection !== newSelectAll)
  //     .map(async (letter) => {
  //       try {
  //         await inspectReply(letter.reply.id);
  //         return { id: letter.reply.id, success: true };
  //       } catch (error) {
  //         return { id: letter.reply.id, success: false, error };
  //       }
  //     });

  //   const results = await Promise.allSettled(requests);

  //   results.forEach((result) => {
  //     if (result.status === 'fulfilled' && result.value.success) {
  //       dispatch(toggleInspection(result.value.id));
  //     } else if (result.status === 'fulfilled') {
  //       alert('Error inspecting reply:', result.value.error);
  //     }
  //   });
  // };

  const handleSendReplies = async () => {
    const letterToSend = letters
      .filter(
        (letter) =>
          letter.isChecked && letter.reply.inspection && !letter.reply.timestamp
      )
      .map(async (letter) => {
        try {
          await sendReply(letter.reply.id, { letterId: letter.id });
          return { id: letter.id, success: true };
        } catch (error) {
          return { id: letter.id, success: false, error };
        }
      });

    const results = await Promise.allSettled(letterToSend);

    const sentReplies = results.map((result) => {
      if (result.status === 'fulfilled' && result.value.success) {
        return result.value.id;
      }
      if (result.status === 'fulfilled') {
        alert('Error sending reply:', result.value.error);
      }
      return null;
    });

    dispatch(updateSendDate(sentReplies));
  };

  const handleDateSet = (date) => {
    const newDate = { ...dateRange, ...date };
    onDateSet(newDate);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between flex-wrap">
        <div className="mb-4 flex items-center gap-2">
          <input
            className="border rounded-md py-1 px-2"
            type="date"
            value={dateRange.startDate}
            onChange={({ target }) =>
              handleDateSet({ startDate: target.value })
            }
          />
          <span>부터</span>
          <input
            className="border rounded-md py-1 px-2"
            type="date"
            value={dateRange.endDate}
            onChange={({ target }) => handleDateSet({ endDate: target.value })}
          />
          <span>까지</span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onLetterFilter}
          >
            검색
          </button>
        </div>
        <div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="button"
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
              <th className="border px-4 py-2">행 체크</th>
              <th className="border px-4 py-2">행 NO.</th>
              <th className="border px-4 py-2">사용자 ID</th>
              <th className="border px-4 py-2">편지 등록일</th>
              <th className="border px-4 py-2">편지 원본</th>
              <th className="border px-4 py-2">GPT 답장 원본</th>
              <th className="border px-4 py-2">최종 답장</th>
              <th className="border px-4 py-2">검수 여부</th>
              <th className="border px-4 py-2">검수일</th>
              <th className="border px-4 py-2">답장 발송 여부</th>
              <th className="border px-4 py-2">답장 발송일</th>
            </tr>
          </thead>
          <tbody>
            {letters?.map((letter, index) => (
              <TableRow key={letter.id} no={index + 1} letter={letter} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LetterTable;
