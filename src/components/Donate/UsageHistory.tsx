import React from 'react';

import { DONATE_USAGE_CONTENTS } from 'components/Donate/constants';
import { Link } from 'react-router-dom';

const COUNT = Math.ceil(220 / 12);

const CircleList = Array.from({ length: COUNT }).map(() => (
  <div className="h-[9px] w-[12px] rounded-full bg-[#F9F9F9]" />
));

export default function UsageHistory() {
  return (
    <section className="mt-14 px-2.5">
      <h2 className="text-center text-[1.375rem] font-bold">
        후원금은 이렇게 쓰여요
      </h2>
      <article className="relative mt-8 h-[280px]">
        <div className="relative h-[8px] rounded-[21px] border-y-4 border-[#424242]">
          <div className="absolute inset-x-[10px] top-0 bg-white px-5 pb-9 pt-4">
            <h3 className="border-y border-dashed border-black py-3 text-center text-[1.375rem] font-bold">
              무지개편지 운영비용
            </h3>
            {DONATE_USAGE_CONTENTS.map(({ id, title, price }) => (
              <div
                key={`donate-usage-${id}`}
                className="mt-[1.875rem] flex justify-between text-caption"
              >
                <p>{title}</p>
                <p className="font-bold">{price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-px left-2 flex gap-1">{CircleList}</div>
      </article>
      <div className="flex justify-center">
        <Link
          to="https://pf.kakao.com/_MNevG/105841865"
          target="_blank"
          className="mt-8 rounded-full bg-primary px-6 py-2 text-center text-caption text-white"
        >
          사용내역 확인하기
        </Link>
      </div>
    </section>
  );
}
