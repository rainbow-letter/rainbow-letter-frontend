import ImageInput from 'components/Input/ImageInput';
import { TITLES } from './constants';
import PetRegistrationSection from './PetRegistrationSection';
import roundX from '../../assets/roundX.svg';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetImageSection({ image, setImage, setIsEmptyImage }) {
  const { mandatoryData, setMandatoryData } = usePetRegistration();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.match('image.*')) {
      const imageUrl = URL.createObjectURL(file);
      setIsEmptyImage(false);
      setImage(imageUrl);
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
    setImage('');
  };

  return (
    <PetRegistrationSection title={TITLES.PROFILE_IMAGE}>
      <ImageInput
        imageSrc={image}
        deleteIcon={roundX}
        onChange={handleImageChange}
        onDelete={handleImageDelete}
      />
    </PetRegistrationSection>
  );
}

export default PetImageSection;
