import { useState } from 'react';
import ImageInput from 'components/Input/ImageInput';
import { TITLES } from './constants';
import PetRegistrationSection from './PetRegistrationSection';
import roundX from '../../assets/roundX.svg';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetImageSection() {
  const { mandatoryData, setMandatoryData } = usePetRegistration();
  const [previewUrl, setPreviewUrl] = useState('');

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

  return (
    <PetRegistrationSection title={TITLES.PROFILE_IMAGE}>
      <ImageInput
        imageSrc={previewUrl || mandatoryData.image.url}
        deleteIcon={roundX}
        onChange={handleImageChange}
        onDelete={handleImageDelete}
      />
    </PetRegistrationSection>
  );
}

export default PetImageSection;
