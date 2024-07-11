import { Link } from 'react-router-dom';

import arrow from '../../../assets/Vector.svg';

type Props = {
  url: string;
};

export default function ArrowLink({ url }: Props) {
  return (
    <Link target="_blank" to={url}>
      <img
        alt="arrow"
        className="absolute right-4 top-1/2 -translate-x-1/2 -translate-y-1/2"
        src={arrow}
      />
    </Link>
  );
}
