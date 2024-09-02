import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ClipLoader from 'react-spinners/ClipLoader';
import Button from 'components/Button';
import usePreventDoubleClick from 'hooks/usePreventDoubleClick';
import { convertDateStringToObject } from 'utils/date';
import PetNameSection from './PetNameSection';
import DateOfDeathSection from './DateOfDeathSection';
import PetTypeSection from './PetTypeSection';
import RoleForPetSection from './RoleForPetSection';
import PetPersonalitiesSection from './PetPersonalitiesSection';
import PetImageSection from './PetImageSection';
import {
  usePetRegistration,
  setInitialPetData,
} from '../../contexts/PetRegistrationContext';
import useGetImage from 'hooks/useGetImage';

function PetRegistrationForm({ petData, isDisabled, handleSubmit }) {

  const [isEmptyImage, setIsEmptyImage] = useState(isEdit ? false : true);

  const { pathname } = useLocation();
  const isEdit = pathname.includes('edit');

  const { setMandatoryData, setOptionalData } = usePetRegistration();
  const { isSubmitting, handleButtonClick } = usePreventDoubleClick();
  const { image, setImage } = useGetImage(petData?.image);

  const setPetData = () => {
    if (petData) {
      const { name, species, owner, deathAnniversary, image, personalities } =
        petData;

      setMandatoryData({
        name,
        species,
        owner,
        deathAnniversary:
          deathAnniversary && convertDateStringToObject(deathAnniversary),
        image,
      });
      setOptionalData({
        personalities,
      });
    }
  };

  useEffect(() => {
    setPetData();
    return () => {
      setInitialPetData(setMandatoryData, setOptionalData);
    };
  }, [petData]);

  return (
    <div className="flex flex-col gap-y-6 px-2">
      <PetNameSection isEdit={isEdit} />
      <DateOfDeathSection />
      <PetTypeSection />
      <RoleForPetSection />
      <PetPersonalitiesSection />
      <PetImageSection
        image={image}
        setImage={setImage}
        setIsEmptyImage={setIsEmptyImage}
      />
      <section className="pt-6">
        {!isSubmitting ? (
          <Button
            disabled={!isDisabled || isSubmitting || isEmptyImage}
            onClick={handleButtonClick(handleSubmit)}
          >
            <span>등록하기</span>
          </Button>
        ) : (
          <div className="text-center">
            <ClipLoader color="#FFB347" />
          </div>
        )}
      </section>
    </div>
  );
}

export default PetRegistrationForm;
