import { useEffect, useState } from 'react';

import ImageInput from 'components/Input/ImageInput';
import { getImage } from 'api/images';
import { TITLES } from './constants';
import PetRegistrationSection from './PetRegistrationSection';
import roundX from '../../assets/roundX.svg';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetImageSection({ petData, setIsEmptyImage }) {
  const { mandatoryData, setMandatoryData } = usePetRegistration();
  const [previewUrl, setPreviewUrl] = useState(mandatoryData.image.url);

  useEffect(() => {
    const getPetImage = async () => {
      if (petData?.image.objectKey) {
        const image = await getImage(petData?.image.objectKey);
        setIsEmptyImage(false);
        return setPreviewUrl(image);
      }
    };

    getPetImage();
  }, [petData?.id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.match('image.*')) {
      const imageUrl = URL.createObjectURL(file);
      setIsEmptyImage(false);
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
    setIsEmptyImage(true);
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
