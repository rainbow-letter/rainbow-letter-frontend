import React from 'react';

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

  return (
    <section className="mt-6">
      <ul>
        {letters &&
          letters.map((letter) => (
            <li
              key={letter.id}
              className="list-none mb-4 border rounded-[15px] cursor-pointer"
            >
              <div className="pl-6 pt-6">
                <h3 className="text-solo-large mb-[22px]">{letter.petName}</h3>
                <div className="flex gap-[18px] mb-2.5">
                  <span>보낸편지</span>
                  <p>{letter.summary}</p>
                </div>
                <div className="flex gap-[18px] mb-[21px]">
                  <span>답장상태</span>
                  <p>{setStatus(letter.status)}</p>
                </div>
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
