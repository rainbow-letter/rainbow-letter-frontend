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
  image: null,
};

const initialOptionalData = {
  personalities: [],
};

export const initialPetData = (setMandatoryData, setOptionalData) => {
  setMandatoryData({
    name: '',
    species: '',
    owner: '',
    deathAnniversary: [],
    image: null,
  });
  setOptionalData({
    personalities: [],
  });
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
