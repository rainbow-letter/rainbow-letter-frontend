import React from 'react';

import { TITLES, INFO_MESSAGES, DATE_OF_DEATH } from './constants';
import { PET_TYPES, PET_PERSONALITIES } from '../Chips/constants';
import Button from '../Button';
import Input from '../Input';
import PetRegistrationSection from './PetRegistrationSection';
import Chip from '../Chips/Chip';
import Chips from '../Chips';
import ImageInput from '../Input/ImageInput';

function PetRegistrationForm() {
  return (
    <div className="mt-3">
      <PetRegistrationSection title={TITLES.PET_NAME}>
        <div className="">
          <Input className="w-full" placeholder={INFO_MESSAGES.ENTER_NAME} />
        </div>
      </PetRegistrationSection>
      <PetRegistrationSection title={TITLES.DATE_OF_DEATH}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Input
              className="max-w-[65px] py-[15px] px-[19px] text-caption"
              placeholder="YYYY"
            />
            <span className="p-[7px] text-caption">{DATE_OF_DEATH.YEAR}</span>
            <Input
              className="w-[55px] py-[15px] px-[19px] text-caption"
              placeholder="MM"
            />
            <span className="p-[7px] text-caption">{DATE_OF_DEATH.MONTH}</span>
            <Input
              className="w-[55px] py-[15px] px-[19px] text-caption"
              placeholder="DD"
            />
            <span className="p-[7px] text-caption">{DATE_OF_DEATH.DAY}</span>
          </div>
          <Chip
            value={DATE_OF_DEATH.UNKNOWN}
            onClick={() => {
              // TODO
            }}
          />
        </div>
      </PetRegistrationSection>
      <PetRegistrationSection title={TITLES.PET_TYPES}>
        <Chips attributes={PET_TYPES} />
      </PetRegistrationSection>
      <PetRegistrationSection
        title={TITLES.PET_PERSONALITIES}
        subTitle={TITLES.OPTION}
      >
        <Chips attributes={PET_PERSONALITIES} />
      </PetRegistrationSection>
      <PetRegistrationSection
        title={TITLES.PROFILE_IMAGE}
        subTitle={TITLES.OPTION}
      >
        <ImageInput
          onChange={() => {
            // TODO
          }}
        />
      </PetRegistrationSection>
      <section>
        <Button
          value="등록하기"
          onClick={() => {
            // TODO
          }}
        />
      </section>
    </div>
  );
}

export default PetRegistrationForm;
