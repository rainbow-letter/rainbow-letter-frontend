import { React, useState } from 'react';

import ImageInput from '../Input/ImageInput';

import { INFO_MESSAGES } from './constants';
import roundX from '../../assets/roundX.svg';

export default function ImageUploadSection({ setImageFile }) {
  const [previewUrl, setPreviewUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.match('image.*')) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      setImageFile(file);
      e.target.value = '';
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
      />
    </section>
  );
}
