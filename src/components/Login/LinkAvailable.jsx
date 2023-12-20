import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkAvailable({ message: { question, forget, link } }) {
  return (
    <section className="mt-[22px]">
      <Link to="/auth/email">
        <span className="text-gray-1 text-solo-medium">{forget}</span>
      </Link>
      <article className="flex justify-center mt-[40px] gap-3">
        <h3>{question}</h3>
        <Link to={`${link.address}`}>
          <span className="underline text-orange-400">{link.value}</span>
        </Link>
      </article>
    </section>
  );
}
