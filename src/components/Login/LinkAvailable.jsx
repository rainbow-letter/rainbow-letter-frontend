import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkAvailable({ message: { question, forget, link } }) {
  return (
    <section className="mt-[22px] text-caption">
      <Link to="/auth/email">
        <span className="text-gray-2">{forget}</span>
      </Link>
      <article className="flex justify-center mt-10 gap-3">
        <p>{question}</p>
        <Link to={`${link.address}`}>
          <span className="underline text-orange-400 font-bold">
            {link.value}
          </span>
        </Link>
      </article>
    </section>
  );
}
