import { Link } from 'react-router-dom';
import Introduce from '../../assets/im_contents_introduce.png';

export default function EventSection() {
  return (
    <section className="px-[18px] py-[30px]">
      <h2 className="text-[18px] font-bold leading-[18px]">
        무지개가족 이벤트
      </h2>
      <p className="mt-3 text-[14px] font-[400] leading-[21px] text-gray-1">
        이벤트에 참여하면 무지개편지가 선물을 드려요!
      </p>
      <Link to="https://pf.kakao.com/_MNevG/106391151">
        <img
          src={Introduce}
          alt="아이 소개 이미지"
          className="mt-3 rounded-[16px]"
        />
      </Link>
    </section>
  );
}
