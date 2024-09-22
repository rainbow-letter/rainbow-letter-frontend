import ContentsItem from 'components/Home/ContentsItem';
import { PET_CONTENTS_MESSAGE, CONTENTS_MESSAGE } from './constants';
import PetContentsItem from './PetContentsItem';

export default function OtherContentsSection() {
  return (
    <section className="px-[18px] py-[30px]">
      <h2 className="text-[18px] font-bold leading-[18px]">
        무지개마을 컨텐츠
      </h2>
      <p className="mt-3 text-[14px] font-[400] leading-[21px] text-gray-1">
        우리 아이와 나를 알아 보는 심리테스트를 해보세요
      </p>
      {PET_CONTENTS_MESSAGE.map((item) => (
        <PetContentsItem key={item.id} item={item} />
      ))}
      <div className="mt-[30px]">
        {CONTENTS_MESSAGE.map((item) => (
          <ContentsItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
