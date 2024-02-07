import { useLocation } from 'react-router-dom';

import { registerPet, updatePet } from 'api/pets';
import { updateImageAndGetId } from '../api/images';
import { generateFormData } from '../utils/formData';
import { isFutureDate } from '../utils/date';

const usePetForm = (initialData, onSuccess, onError, id) => {
  const { pathname } = useLocation();
  const isEdit = pathname.includes('edit');

  const isDataComplete = (data) => {
    if (!data) return null;
    const isNameFilled = !!data.name;
    const isSpeciesFilled = !!data.species;
    const isOwnerFilled = !!data.owner;
    const isDeathAnniversaryFilled =
      data.deathAnniversary === null ||
      (data.deathAnniversary.year !== '' &&
        data.deathAnniversary.month !== '' &&
        data.deathAnniversary.day !== '' &&
        !isFutureDate(data.deathAnniversary));
    const isImageUrlFilled = !!(data.image && data.image.url);
    const isImageFileFilled = !!(
      data.image &&
      (data.image.file || data.image.id)
    );

    return (
      isNameFilled &&
      isSpeciesFilled &&
      isOwnerFilled &&
      isDeathAnniversaryFilled &&
      isImageUrlFilled &&
      isImageFileFilled
    );
  };

  const isAllMandatoryDataFilled = isDataComplete(initialData);

  const formatDeathAnniversary = ({ year, month, day }) => {
    if (year === '' || month === '' || day === '') {
      return null;
    }

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
    const { image } = mandatoryData;
    let imageId;

    try {
      if (image.id) {
        imageId = image.id;
      } else if (image.file) {
        imageId = await uploadImage(image.file);
      }
      const formattedDeathAnniversary =
        mandatoryData.deathAnniversary &&
        formatDeathAnniversary(mandatoryData.deathAnniversary);
      const dataToSubmit = {
        ...mandatoryData,
        ...optionalData,
        image: imageId,
        deathAnniversary: formattedDeathAnniversary,
      };

      if (isEdit) {
        await updatePet(dataToSubmit, id);
      } else {
        await registerPet(dataToSubmit);
      }
      onSuccess?.();
    } catch (error) {
      onError?.(error);
    }
  };

  return { isAllMandatoryDataFilled, handleSubmit };
};

export default usePetForm;
