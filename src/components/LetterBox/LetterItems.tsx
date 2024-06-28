import React from 'react';

import { INFO_MESSAGES } from 'components/LetterBox/constants';
import { formatDateWithSlash } from 'utils/date';
import { letterReplyStatus, isCheckUnread } from 'utils/replyStatus';
import { Letters } from 'types/letters';
import arrowIcon from '../../assets/ion_chevron-back_1.svg';
import ellipseIcon from '../../assets/Ellipse 439.svg';

type Props = {
  letter: Letters;
  index: number | undefined;
};

export default function LetterItems({
  letter: { readStatus, petName, summary, status, createdAt },
  index,
}: Props) {
  return (
    <li
      className={`${
        isCheckUnread(readStatus, status) && `bg-orange-50`
      } relative mb-4 cursor-pointer list-none rounded-2xl border border-gray-3`}
    >
      <div className="pl-6 pt-6">
        <div className="absolute -top-1 right-7 flex min-w-[30px] flex-col items-center rounded-b-lg rounded-t-sm bg-orange-50 px-2.5 pb-1 pt-2.5 text-orange-400">
          <p className="text-solo-large font-[350] leading-normal">
            {typeof index === 'number' && index}
          </p>
        </div>
        <img
          src={ellipseIcon}
          alt="ellipse"
          className={`${
            isCheckUnread(readStatus, status) || 'hidden'
          } absolute right-3 top-3`}
        />
        <h3 className="mb-[1.375rem] text-solo-large">{petName}</h3>
        <div className="mb-2.5 flex gap-[1.125rem] text-body-small">
          <span>{INFO_MESSAGES.SENT_LETTER}</span>
          <p className="w-[11.25rem] truncate text-gray-1">{summary}</p>
        </div>
        <div className="mb-5 flex gap-[1.125rem] text-solo-label-pc">
          <span>{INFO_MESSAGES.RESPONSE_STATUS}</span>
          <p
            className={`${
              isCheckUnread(readStatus, status) && `text-alarm-red`
            }`}
          >
            {letterReplyStatus(status)}
          </p>
        </div>
        <img
          src={arrowIcon}
          alt="arrow"
          className="absolute bottom-1/2 right-5"
        />
      </div>
      <div className="flex justify-end border-t px-5 py-2.5">
        <p className="text-caption text-gray-2">
          {formatDateWithSlash(createdAt)}
        </p>
      </div>
    </li>
  );
}
