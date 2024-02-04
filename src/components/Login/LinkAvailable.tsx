import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkAvailable({
  message: { findPassword, link },
  className,
}: any) {
  const style = className || '';

  return (
    <section className="mt-7 text-body-medium ">
      <article className={`${style} flex justify-center gap-3`}>
        {findPassword && (
          <div className="w-1/2">
            <Link to="/auth/email">
              <p>{findPassword}</p>
            </Link>
          </div>
        )}
        {findPassword && <span className="absolute text-gray-1">|</span>}
        <div className="w-1/2">
          <Link to={`${link.address}`}>
            <span>{link.value}</span>
          </Link>
        </div>
      </article>
    </section>
  );
}
