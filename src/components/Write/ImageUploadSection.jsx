/* eslint-disable */
import { React, useState } from 'react';

import ImageInput from '../Input/ImageInput';
import roundX from '../../assets/roundX.svg';

export default function ImageUploadSection() {
  const [imageSrc, setImageSrc] = useState(null);
  const handleImageChange = ({ target }) => {
    const file = target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="mt-10">
      <h4 className="text-solo-large">
        사진을 보내보세요. <span className="text-gray-2">(선택)</span>
      </h4>
      <p className="text-gray-2 text-caption mt-[13px] mb-[26px]">
        딱 1장만 보낼 수 있어요.
      </p>
      <ImageInput
        imageSrc={imageSrc}
        deleteIcon={roundX}
        onChange={handleImageChange}
      />
    </section>
  );
}
