import React from 'react';
import { Link } from 'react-router-dom';

import { Message } from 'components/Login/constants';

type Props = {
  message: Message;
  className?: string;
};

export default function LinkAvailable({
  message: { findPassword, link },
  className,
}: Props) {
  const style = className || '';

  return (
    <section className="mt-7 text-body-medium">
      <article className={`${style} flex justify-center`}>
        {findPassword && (
          <div className="w-full">
            <Link to="/auth/email">
              <p>{findPassword}</p>
            </Link>
          </div>
        )}
        {findPassword && <span className="absolute text-gray-1">|</span>}
        <div className="w-full">
          <Link to={`${link.address}`}>
            <p>{link.value}</p>
          </Link>
        </div>
      </article>
    </section>
  );
}
