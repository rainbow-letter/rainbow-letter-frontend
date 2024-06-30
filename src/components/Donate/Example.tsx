import React from 'react';

import { DONATE_EXAMPLE_CONTENTS } from 'components/Donate/constants';

export default function Example() {
  return (
    <section className="mt-28">
      <h2 className="text-center text-[1.375rem] font-bold">
        이만큼도 감사해요
      </h2>
      {DONATE_EXAMPLE_CONTENTS.map(({ id, title, price, image }) => (
        <article
          key={`donate-example-${id}`}
          className="mt-6 flex items-center justify-between rounded-2xl bg-white px-6 py-4"
        >
          <div>
            <p className="mb-3 text-[1.125rem]">{title}</p>
            <p className="font-Pretendard text-[1.375rem] font-bold text-orange-400">
              {price}
            </p>
          </div>
          <img src={image} alt={`${title} 이미지`} />
        </article>
      ))}
    </section>
  );
}
