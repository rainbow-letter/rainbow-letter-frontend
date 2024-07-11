import { Link } from 'react-router-dom';

import { BANNER_MESSAGE } from 'components/Home/constants';
import banner from '../../assets/banner.jpg';

export default function Banner() {
  return (
    <section>
      <Link
        className="flex justify-between rounded-2xl bg-[#FFF1EB] px-5 py-2.5 tracking-[-0.04rem] shadow-home"
        id="ads_consult1"
        target="_blank"
        to="https://smore.im/quiz/IEiAubtaOQ"
      >
        <div className="flex flex-col justify-center">
          <p className="font-bold text-black">{BANNER_MESSAGE.title}</p>
          <p className="text-caption text-gray-1">
            {BANNER_MESSAGE.description}
          </p>
        </div>
        <div className="h-[53px] w-[82px]">
          <img
            alt="banner"
            className="size-full rounded-[15px] object-cover"
            src={banner}
          />
        </div>
      </Link>
    </section>
  );
}
