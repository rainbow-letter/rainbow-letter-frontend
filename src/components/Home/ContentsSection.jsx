import React from 'react';

import ContentsItem from './ContentsItem';

import { INFO_MESSAGES } from './constants';

export default function ContentsSection() {
  return (
    <section className="px-[18px]">
      <h3 className="mt-[42px] pl-[6px] text-solo-large font-semibold">
        {INFO_MESSAGES.CONTENTS_TITLE}
      </h3>
      <div className="mt-5 gap-[14px] flex flex-wrap">
        <ContentsItem />
      </div>
    </section>
  );
}
