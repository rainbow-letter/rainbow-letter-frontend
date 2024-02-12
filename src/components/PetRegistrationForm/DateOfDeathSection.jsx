import React, { useState, useEffect } from 'react';

import Chip from 'components/Chips/Chip';
import Input from 'components/Input';
import InputAlert from 'components/InputAlert';
import { validateDateInput } from 'utils/validators';
import { isFutureDate } from 'utils/date';
import { TITLES, DATE_OF_DEATH, INFO_MESSAGES } from './constants';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';
import PetRegistrationSection from './PetRegistrationSection';

function DateOfDeathSection() {
  const { mandatoryData, setMandatoryData } = usePetRegistration();
  const [date, setDate] = useState(mandatoryData.deathAnniversary);
  const [isDateInFuture, setIsDateInFuture] = useState(false);
  const isChipSelected = date === null;

  const handleInputChange = (field) => (event) => {
    const { value } = event.target;
    setDate({ ...date, [field]: value });
  };

  const handleChipClick = () => {
    setDate(date ? null : { year: '', month: '', day: '' });
  };

  const handleDateValidation = (field) => (event) => {
    const { value } = event.target;
    if (validateDateInput(value, field)) {
      handleInputChange(field)(event);
    }
  };

  useEffect(() => {
    if ((date?.year && date?.month && date?.day) || !date) {
      setMandatoryData({ ...mandatoryData, deathAnniversary: date });
      setIsDateInFuture(date ? isFutureDate(date) : false);
    }
  }, [date]);

  useEffect(() => {
    setDate(mandatoryData.deathAnniversary);
  }, [mandatoryData]);

  return (
    <PetRegistrationSection title={TITLES.DATE_OF_DEATH}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Input
            className="h-11 w-[65px] py-[15px] px-[15px] text-caption text-center"
            type="tel"
            placeholder="YYYY"
            value={date?.year || ''}
            onChange={handleDateValidation('year')}
          />
          <span className="p-[7px] text-caption">{DATE_OF_DEATH.YEAR}</span>
          <Input
            className="h-11 w-[55px] py-[15px] px-[15px] text-caption text-center"
            type="tel"
            placeholder="MM"
            value={date?.month || ''}
            onChange={handleDateValidation('month')}
          />
          <span className="p-[7px] text-caption">{DATE_OF_DEATH.MONTH}</span>
          <Input
            className="h-11 w-[55px] py-[15px] px-[15px] text-caption text-center"
            type="tel"
            placeholder="DD"
            value={date?.day || ''}
            onChange={handleDateValidation('day')}
          />
          <span className="p-[7px] text-caption">{DATE_OF_DEATH.DAY}</span>
        </div>
        <div className="flex items-center text-nowrap">
          <Chip
            value={DATE_OF_DEATH.UNKNOWN}
            isSelected={isChipSelected}
            onClick={handleChipClick}
          />
        </div>
      </div>
      <InputAlert
        message={INFO_MESSAGES.CHECK_DATE_AGAIN}
        isVisible={isDateInFuture}
      />
    </PetRegistrationSection>
  );
}

export default DateOfDeathSection;
