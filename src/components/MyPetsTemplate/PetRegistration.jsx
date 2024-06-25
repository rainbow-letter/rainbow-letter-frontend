import { useNavigate } from 'react-router-dom';

import usePetRegistrationForm from 'hooks/usePetForm';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';
import PetRegistrationForm from '../PetRegistrationForm';

function PetRegistration() {
  const { mandatoryData, optionalData } = usePetRegistration();
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate(-1);
  };

  const onError = (error) => {
    alert(error);
  };

  const { isAllMandatoryDataFilled, handleSubmit } = usePetRegistrationForm(
    mandatoryData,
    onSuccess,
    onError
  );

  return (
    <PetRegistrationForm
      isDisabled={isAllMandatoryDataFilled}
      handleSubmit={() => handleSubmit(mandatoryData, optionalData)}
    />
  );
}

export default PetRegistration;
