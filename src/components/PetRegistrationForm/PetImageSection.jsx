import React, { useState } from 'react';

import { TITLES } from './constants';
import PetRegistrationSection from './PetRegistrationSection';
import ImageInput from '../Input/ImageInput';

function PetImageSection() {
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
    <PetRegistrationSection
      title={TITLES.PROFILE_IMAGE}
      subTitle={TITLES.OPTION}
    >
      <ImageInput imageSrc={imageSrc} onChange={handleImageChange} />
    </PetRegistrationSection>
  );
}

export default PetImageSection;
