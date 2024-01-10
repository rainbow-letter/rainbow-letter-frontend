import React from 'react';

import CoverImage from '../CoverImage';

export default function SentPhoto({ letterData }) {
  return (
    <section className="mt-16">
      <h3 className="text-solo-large">아이에게 보낸 편지</h3>
      <CoverImage image={letterData.image.url} className="relative mt-8" />
    </section>
  );
}
