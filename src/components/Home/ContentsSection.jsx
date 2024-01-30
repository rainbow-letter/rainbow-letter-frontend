import React from 'react';

import ContentsItem from './ContentsItem';

import { INFO_MESSAGES } from './constants';

export default function ContentsSection() {
  return (
    <section className="px-[25px]">
      <h3 className="mt-[30px] text-solo-large font-semibold">
        {INFO_MESSAGES.CONTENTS_TITLE}
      </h3>
      <div className="mt-5 flex flex-col gap-4">
        <ContentsItem />
      </div>
    </section>
  );
}
