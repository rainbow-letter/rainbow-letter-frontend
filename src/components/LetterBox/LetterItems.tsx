import React from 'react';

import { INFO_MESSAGES } from 'components/LetterBox/constants';
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
  const setDate = (date: string) => {
    const year = date.slice(2, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(date).getDay()];

    return `${year}/${month}/${day}(${dayOfWeek})`;
  };

  const setStatus = (reply: string) => {
    switch (reply) {
      case 'REQUEST':
        return `${INFO_MESSAGES.STILL_WRITING}`;
      case 'RESPONSE':
        return `${INFO_MESSAGES.REPLY_ARRIVED}`;
      default:
        return null;
    }
  };

  const isCheckUnread = (isRead: string, reply: string): boolean => {
    if (reply === 'REQUEST') return false;
    if (isRead === 'READ') return false;

    return true;
  };

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
            {setStatus(status)}
          </p>
        </div>
        <img
          src={arrowIcon}
          alt="arrow"
          className="absolute bottom-1/2 right-5"
        />
      </div>
      <div className="flex justify-end border-t px-5 py-2.5">
        <p className="text-caption text-gray-2">{setDate(createdAt)}</p>
      </div>
    </li>
  );
}
