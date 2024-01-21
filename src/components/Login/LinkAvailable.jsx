import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkAvailable({ message: { findPassword, link } }) {
  return (
    <section className="mt-7 text-body-medium">
      <article className="flex justify-center gap-3">
        <Link to="/password">
          <p>{findPassword}</p>
        </Link>
        <Link to={`${link.address}`}>
          <span>{link.value}</span>
        </Link>
      </article>
    </section>
  );
}
