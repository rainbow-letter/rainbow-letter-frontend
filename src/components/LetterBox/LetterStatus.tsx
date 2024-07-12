import React from 'react';

import { letterReplyStatus, isCheckUnread } from 'utils/replyStatus';
import LetterIcon from '../../assets/ic_letterBox_letter.svg';
import Check from '../../assets/ic_letterBox_green-check.svg';
import GrayCheck from '../../assets/ic_letterBox_gray-check.svg';

type Props = {
  status: 'RESPONSE' | 'REQUEST';
  readStatus: string;
};

export default function LetterStatus({ status, readStatus }: Props) {
  const letterStatus = letterReplyStatus(status);
  const isCompleteResponse = status === 'RESPONSE';
  const Icon = isCheckUnread(readStatus, status) ? Check : GrayCheck;
  const TextColor = isCheckUnread(readStatus, status)
    ? 'text-[#61BA84]'
    : 'text-[#989898]';
  const bgColor = isCheckUnread(readStatus, status)
    ? 'bg-[#DDFFEB]'
    : 'bg-[#F0F0F0]';

  return (
    <div
      className={`${isCompleteResponse ? bgColor : 'bg-[#FFDABF]'} flex max-w-[80px] items-center justify-center gap-1 rounded-[15px] bg-red-50 py-1`}
    >
      <img
        src={isCompleteResponse ? Icon : LetterIcon}
        alt="답장 상태 아이콘"
      />
      <span
        className={`${isCompleteResponse ? TextColor : 'text-[#FF7C1E]'} text-caption-pc font-bold`}
      >
        {letterStatus}
      </span>
    </div>
  );
}
