import React from 'react';

import LetterStatus from 'components/LetterBox/LetterStatus';
import { Letters } from 'types/letters';
import { isCheckUnread } from 'utils/replyStatus';
import Stamp from '../../assets/im_letterBox_stamp.png';

type Props = {
  letter: Letters;
};

export default function LetterItem({
  letter: { readStatus, summary, status, index },
}: Props) {
  return (
    <li
      className={`${
        isCheckUnread(readStatus, status) ? 'bg-yellow-50' : 'bg-gray-6'
      } relative mb-4 cursor-pointer rounded-xl p-[1.125rem]`}
    >
      <LetterStatus status={status} readStatus={readStatus} />
      <p className="mt-3 text-caption">{summary}</p>
      <p className="mt-5 text-caption text-gray-3">{index}번째 편지</p>
      <img
        src={Stamp}
        alt="우표 이미지"
        className="absolute right-[18px] top-[18px]"
      />
    </li>
  );
}
