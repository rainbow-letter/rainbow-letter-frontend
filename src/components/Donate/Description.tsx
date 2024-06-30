import React from 'react';
import { DONATE_DESCRIPTION_CONTENTS } from 'components/Donate/constants';

export default function Description() {
  return (
    <>
      <section className="mt-6 rounded-[15px] bg-white px-5 py-8">
        {DONATE_DESCRIPTION_CONTENTS.map(({ ID, CONTENT }) => (
          <p key={`donate-description-${ID}`}>{CONTENT}</p>
        ))}
      </section>
      <div className="mx-3 border-b-2 border-dotted" />
    </>
  );
}
