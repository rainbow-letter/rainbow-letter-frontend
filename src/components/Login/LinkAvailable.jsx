/* eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkAvailable({ message: { question, forget, join } }) {
  return (
    <section>
      {/* 추후 다른 페이지 주소 작성 */}
      <Link to="/">
        <span className="text-caption text-gray-2 text-solo-medium">
          {forget}
        </span>
      </Link>
      <article className="flex justify-center mt-[60px] gap-2.5">
        <h3>{question}</h3>
        {/* 추후 회원가입 페이지 주소 작성 */}
        <Link to="/">
          <span className="underline text-orange-400">{join}</span>
        </Link>
      </article>
    </section>
  );
}
