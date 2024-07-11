import { Link } from 'react-router-dom';

import { OPEN_TALK_MESSAGE } from 'components/Home/constants';
import kakaoLogo from 'assets/kakao-logo.svg';

export default function OpenTalk() {
  return (
    <section className="mb-2.5 mt-9 h-[3.125rem] gap-2.5 px-7">
      <Link
        className="flex size-full items-center justify-center gap-x-2.5 rounded-2xl bg-orange-50 text-solo-label font-semibold text-orange-400"
        target="_blank"
        to="http://pf.kakao.com/_MNevG/chat"
      >
        <div className="size-6">
          <img alt="kakao" height="100%" src={kakaoLogo} width="100%" />
        </div>
        <p className="font-bold">{OPEN_TALK_MESSAGE}</p>
      </Link>
    </section>
  );
}
