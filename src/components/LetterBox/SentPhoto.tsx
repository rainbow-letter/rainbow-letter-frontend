import React from 'react';

import CoverImage from 'components/CoverImage';
import { Letter } from 'types/letters';

type Props = {
  letterData: Letter;
};

export default function SentPhoto({ letterData }: Props) {
  return (
    <section className="mt-16 not-img">
      <h3 className="text-solo-large">아이에게 보낸 편지</h3>
      <CoverImage image={letterData.image.url} className="relative mt-8" />
    </section>
  );
}
