import React, { useEffect, useState } from 'react';

import { TITLES } from './constants';
import PetRegistrationSection from './PetRegistrationSection';
import ImageInput from '../Input/ImageInput';
import roundX from '../../assets/roundX.svg';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetImageSection() {
  const { mandatoryData, setMandatoryData } = usePetRegistration();
  const [previewUrl, setPreviewUrl] = useState(mandatoryData.image.url);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.match('image.*')) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      setMandatoryData({
        ...mandatoryData,
        image: {
          id: null,
          url: imageUrl,
          file,
        },
      });
      e.target.value = '';
    }
  };

  const handleImageDelete = () => {
    setMandatoryData({ ...mandatoryData, image: '' });
    setPreviewUrl('');
  };

  useEffect(() => {
    setPreviewUrl(mandatoryData.image.url);
  }, [mandatoryData.image]);

  return (
    <PetRegistrationSection title={TITLES.PROFILE_IMAGE}>
      <ImageInput
        imageSrc={previewUrl}
        deleteIcon={roundX}
        onChange={handleImageChange}
        onDelete={handleImageDelete}
      />
    </PetRegistrationSection>
  );
}

export default PetImageSection;
