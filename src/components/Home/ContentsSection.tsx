import Banner from 'components/Home/Banner';
import ContentsItem from 'components/Home/ContentsItem';

import { INFO_MESSAGES, CONTENTS_MESSAGE } from 'components/Home/constants';

export default function ContentsSection() {
  return (
    <section className="px-5">
      <h3 className="mt-[1.875rem] text-solo-large font-semibold">
        {INFO_MESSAGES.CONTENTS_TITLE}
      </h3>
      <div className="mt-5 flex flex-col gap-4">
        <Banner />
        {CONTENTS_MESSAGE.map((item) => (
          <ContentsItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
