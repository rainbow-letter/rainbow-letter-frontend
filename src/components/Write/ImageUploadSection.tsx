import React, { useState } from 'react';

import { INFO_MESSAGES } from 'components/Write/constants';
import ImageInput from 'components/Input/ImageInput';

import roundX from '../../assets/roundX.svg';

type Props = {
  setImageFile: (file: File | string) => void;
};

export default function ImageUploadSection({ setImageFile }: Props) {
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if (file && file.type.match('image.*')) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
        setImageFile(file);
        e.target.value = '';
      }
    }
  };

  const handleImageDelete = () => {
    setPreviewUrl('');
    setImageFile('');
  };

  return (
    <section className="mt-10">
      <h4 className="text-solo-large">
        {INFO_MESSAGES.SUGGEST_SEND_PHOTO}
        <span className="text-gray-2">{INFO_MESSAGES.OPTION}</span>
      </h4>
      <p className="text-gray-2 text-caption mt-[13px] mb-[26px]">
        {INFO_MESSAGES.POSSIBLE_NUMBER}
      </p>
      <ImageInput
        imageSrc={previewUrl}
        deleteIcon={roundX}
        onChange={handleImageChange}
        onDelete={handleImageDelete}
        className=""
      />
    </section>
  );
}
