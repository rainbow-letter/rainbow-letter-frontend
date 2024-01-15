import React from 'react';

import { INFO_MESSAGES } from './constants';
import arrowIcon from '../../assets/ion_chevron-back_1.svg';
import ellipseIcon from '../../assets/Ellipse 439.svg';

export default function LetterItems({
  letter: { readStatus, petName, summary, status, createdAt },
}) {
  const setDate = (date) => {
    const year = date.slice(2, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(date).getDay()];

    return `${year}/${month}/${day}(${dayOfWeek})`;
  };

  const setStatus = (reply) => {
    switch (reply) {
      case 'REQUEST':
        return `${INFO_MESSAGES.STILL_WRITING}`;
      case 'RESPONSE':
        return `${INFO_MESSAGES.REPLY_ARRIVED}`;
      default:
        return null;
    }
  };

  const isCheckUnread = (isRead, reply) => {
    if (reply === 'REQUEST') return false;
    if (isRead === 'READ') return false;

    return true;
  };

  return (
    <li
      className={`${
        isCheckUnread(readStatus, status) && `bg-orange-50`
      } border-gray-3 list-none mb-4 border rounded-[15px] cursor-pointer relative `}
    >
      <div className="pl-6 pt-6">
        <img
          src={ellipseIcon}
          alt="ellipse"
          className={`${
            isCheckUnread(readStatus, status) || 'hidden'
          } absolute top-3 right-3 `}
        />
        <h3 className="text-solo-large mb-[22px]">{petName}</h3>
        <div className="flex gap-[18px] mb-2.5 text-body-small">
          <span>{INFO_MESSAGES.SENT_LETTER}</span>
          <p className="text-gray-1 truncate w-[180px]">{summary}</p>
        </div>
        <div className="flex gap-[18px] mb-[21px] text-solo-label-pc">
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
      <div className="border-t flex justify-end px-5 py-[11px]">
        <p className="text-caption text-gray-2">{setDate(createdAt)}</p>
      </div>
    </li>
  );
}
