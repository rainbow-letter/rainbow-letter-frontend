import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkAvailable({ message: { question, forget, link } }) {
  return (
    <section className="mt-5">
      {/* 추후 다른 페이지 주소 작성 */}
      <Link to="/">
        <span className="text-caption text-gray-2 text-solo-medium">
          {forget}
        </span>
      </Link>
      <article className="flex justify-center mt-[60px] gap-2.5">
        <h3>{question}</h3>
        <Link to={`${link.address}`}>
          <span className="underline text-orange-400">{link.value}</span>
        </Link>
      </article>
    </section>
  );
}
