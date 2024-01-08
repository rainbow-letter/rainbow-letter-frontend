/* eslint-disable import/no-cycle */
import { registerPet } from '../api/pets';
import { updateImageAndGetId } from '../api/images';
import { generateFormData } from '../utils/formData';

const usePetRegistration = (initialData, onSuccess, onError) => {
  const isAllMandatoryDataFilled = Object.values(initialData).every((value) =>
    Boolean(value)
  );

  const formatDeathAnniversary = ({ year, month, day }) => {
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  const uploadImage = async (image) => {
    const imageFormData = generateFormData(image);
    const response = await updateImageAndGetId(imageFormData);
    return response.id;
  };

  const handleSubmit = async (mandatoryData, optionalData) => {
    try {
      const imageId = await uploadImage(mandatoryData.image);
      const formattedDeathAnniversary = formatDeathAnniversary(
        mandatoryData.deathAnniversary
      );
      const dataToSubmit = {
        ...mandatoryData,
        ...optionalData,
        image: imageId,
        deathAnniversary: formattedDeathAnniversary,
      };

      await registerPet(dataToSubmit);
      onSuccess?.();
    } catch (error) {
      onError?.(error);
    }
  };

  return { isAllMandatoryDataFilled, handleSubmit };
};

export default usePetRegistration;
