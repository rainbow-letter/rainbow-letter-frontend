import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../../assets/Vector.svg';

type Props = {
  url: string;
};

export default function ArrowLink({ url }: Props) {
  return (
    <Link to={url} target="_blank">
      <img
        src={arrow}
        alt="arrow"
        className="absolute right-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </Link>
  );
}
