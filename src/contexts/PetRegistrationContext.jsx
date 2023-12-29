import React, { createContext, useState, useContext, useMemo } from 'react';

const PetRegistrationContext = createContext({
  formData: {},
  setFormData: () => {},
});

export const usePetRegistration = () => useContext(PetRegistrationContext);

const initialFormData = {
  name: '',
  species: '',
  owner: '',
  personality: [],
  deathAnniversary: [],
  image: null,
};

export function PetRegistrationProvider({ children }) {
  const [formData, setFormData] = useState(initialFormData);
  const [profileImage, setProfileImage] = useState(null);

  const petData = useMemo(
    () => ({ formData, profileImage, setFormData, setProfileImage }),
    [formData, setFormData]
  );

  return (
    <PetRegistrationContext.Provider value={petData}>
      {children}
    </PetRegistrationContext.Provider>
  );
}
