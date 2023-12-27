import React from 'react';

import ImageInput from '../Input/ImageInput';
import thinImage from '../../assets/Frame 39811.svg';

export default function ImageUploadSection() {
  return (
    <section className="mt-10">
      <h4 className="text-solo-large">
        사진을 보내보세요. <span className="text-gray-1">(선택)</span>
      </h4>
      <p className="text-gray-1 text-caption mt-[13px] mb-[26px]">
        딱 1장만 보낼 수 있어요.
      </p>
      <ImageInput
        imageSrc={thinImage}
        className="border-orange-400 text-orange-400 bg-[#FFFDFB]"
      />
    </section>
  );
}
