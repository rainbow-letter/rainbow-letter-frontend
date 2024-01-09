import React from 'react';

import NoLetters from './NoLetters';

import arrowIcon from '../../assets/ion_chevron-back_1.svg';
import ellipseIcon from '../../assets/Ellipse 439.svg';

export default function LetterListSection({ letters }) {
  const setDate = (date) => {
    const year = date.slice(2, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(date).getDay()];

    return `${year}/${month}/${day}(${dayOfWeek})`;
  };

  const setStatus = (status) => {
    switch (status) {
      case 'REQUEST':
        return '아직 답장을 쓰고있어요';
      case 'RESPONSE':
        return '답장이 도착했어요!';
      default:
        return null;
    }
  };

  const isCheckUnread = (status) => {
    if (status === 'UNREAD') {
      return true;
    }

    return false;
  };

  if (letters.length < 1) return <NoLetters />;

  return (
    <section className="mt-6">
      <ul>
        {letters &&
          letters.map((letter) => (
            <li
              key={letter.id}
              className={`${
                isCheckUnread(letter.readStatus) && `bg-orange-50`
              } list-none mb-4 border rounded-[15px] cursor-pointer relative `}
            >
              <div className="pl-6 pt-6">
                <img
                  src={ellipseIcon}
                  alt="ellipse"
                  className={`${
                    isCheckUnread(letter.readStatus) || 'hidden'
                  } absolute top-3 right-3 `}
                />
                <h3 className="text-solo-large mb-[22px]">{letter.petName}</h3>
                <div className="flex gap-[18px] mb-2.5 text-body-small">
                  <span>보낸편지</span>
                  <p className="text-gray-1 truncate w-[180px]">
                    {letter.summary}
                  </p>
                </div>
                <div className="flex gap-[18px] mb-[21px] text-solo-label-pc">
                  <span>답장상태</span>
                  <p
                    className={`${
                      isCheckUnread(letter.readStatus) && `text-alarm-red`
                    }`}
                  >
                    {setStatus(letter.status)}
                  </p>
                </div>
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="absolute right-5 bottom-1/2"
                />
              </div>
              <div className="border-t flex justify-end px-5 py-[11px]">
                <p className="text-caption text-gray-2">
                  {setDate(letter.createdAt)}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
