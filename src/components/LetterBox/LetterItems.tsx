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
      } border-gray-3 list-none mb-4 border rounded-2xl cursor-pointer relative`}
    >
      <div className="pl-6 pt-6">
        <div className="flex flex-col min-w-[30px] bg-orange-50 absolute items-center px-2.5 pt-2.5 pb-1 rounded-t-sm rounded-b-lg -top-1 right-7 text-orange-400">
          <p className="text-solo-large font-[350] leading-normal">
            {typeof index === 'number' && index}
          </p>
        </div>
        <img
          src={ellipseIcon}
          alt="ellipse"
          className={`${
            isCheckUnread(readStatus, status) || 'hidden'
          } absolute top-3 right-3 `}
        />
        <h3 className="text-solo-large mb-[1.375rem]">{petName}</h3>
        <div className="flex gap-[1.125rem] mb-2.5 text-body-small">
          <span>{INFO_MESSAGES.SENT_LETTER}</span>
          <p className="text-gray-1 truncate w-[11.25rem]">{summary}</p>
        </div>
        <div className="flex gap-[1.125rem] mb-5 text-solo-label-pc">
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
          className="absolute right-5 bottom-1/2"
        />
      </div>
      <div className="border-t flex justify-end px-5 py-2.5">
        <p className="text-caption text-gray-2">{setDate(createdAt)}</p>
      </div>
    </li>
  );
}
