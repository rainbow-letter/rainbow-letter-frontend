import React, { createContext, useState, useContext, useMemo } from 'react';

const PetRegistrationContext = createContext({
  mandatoryData: {},
  optionalData: {},
  setMandatoryData: () => {},
  setOptionalData: () => {},
});

export const usePetRegistration = () => useContext(PetRegistrationContext);

const initialMandatoryData = {
  name: '',
  species: '',
  owner: '',
  deathAnniversary: [],
};

const initialOptionalData = {
  personality: [],
  image: null,
};

export function PetRegistrationProvider({ children }) {
  const [mandatoryData, setMandatoryData] = useState(initialMandatoryData);
  const [optionalData, setOptionalData] = useState(initialOptionalData);

  const petData = useMemo(
    () => ({
      mandatoryData,
      optionalData,
      setMandatoryData,
      setOptionalData,
    }),
    [mandatoryData, optionalData]
  );

  return (
    <PetRegistrationContext.Provider value={petData}>
      {children}
    </PetRegistrationContext.Provider>
  );
}
