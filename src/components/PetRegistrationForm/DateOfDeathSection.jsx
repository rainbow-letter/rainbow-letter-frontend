import React, { useState, useEffect } from 'react';

import { TITLES, DATE_OF_DEATH } from './constants';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';
import { validateDateInput } from '../../utils/validators';
import Input from '../Input';
import Chip from '../Chips/Chip';
import PetRegistrationSection from './PetRegistrationSection';

function DateOfDeathSection() {
  const { mandatoryData, setMandatoryData } = usePetRegistration();
  const [date, setDate] = useState(mandatoryData.deathAnniversary);
  const isChipSelected = date === null;

  useEffect(() => {
    if ((date?.year && date?.month && date?.day) || !date) {
      setMandatoryData({ ...mandatoryData, deathAnniversary: date });
    }
  }, [date]);

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
        <div className="flex items-center">
          <Chip
            value={DATE_OF_DEATH.UNKNOWN}
            isSelected={isChipSelected}
            onClick={handleChipClick}
          />
        </div>
      </div>
    </PetRegistrationSection>
  );
}

export default DateOfDeathSection;
