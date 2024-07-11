import { Link } from 'react-router-dom';

import { FOOTER_MESSAGE } from 'components/Home/constants';
import blog from '../../assets/blog.png';

export default function HomeFooter() {
  return (
    <footer className="flex flex-col items-center pb-40 pt-5 text-caption text-gray-1">
      <Link className="mb-[1.125rem]" to={`mailto:${FOOTER_MESSAGE.ADDRESS}`}>
        {FOOTER_MESSAGE.ADDRESS}
      </Link>
      <div className="mb-[1.125rem] text-center">
        <p>{FOOTER_MESSAGE.COPYRIGHT}</p>
        <p>{FOOTER_MESSAGE.COPYRIGHT_2}</p>
      </div>
      <Link target="_blank" to={`${FOOTER_MESSAGE.EMAIL}`}>
        <img alt="blog" src={blog} width={46} />
      </Link>
    </footer>
  );
}
