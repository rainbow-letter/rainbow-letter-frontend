import React from 'react';

import ContentsItem from 'components/Home/ContentsItem';

import { INFO_MESSAGES } from 'components/Home/constants';

export default function ContentsSection() {
  return (
    <section className="px-[1.562rem]">
      <h3 className="mt-[1.875rem] text-solo-large font-semibold">
        {INFO_MESSAGES.CONTENTS_TITLE}
      </h3>
      <div className="mt-5 flex flex-col gap-4">
        <ContentsItem />
      </div>
    </section>
  );
}
