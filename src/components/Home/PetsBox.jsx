/* eslint-disable import/no-cycle */
import { React, useState, useEffect } from 'react';

import NoPets from './NoPets';
import NameSection from './NameSection';
import { getDashboard } from '../../api/pets';
import PetInfo from './PetInfo';

export default function PetsBox() {
  const [petsList, setPetsList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    (async () => {
      const { pets } = await getDashboard();

      setPetsList(pets || []);
      if (pets.length > 0) {
        setSelectedPet(pets[0].name || null);
      }
    })();
  }, []);

  const petsNames = petsList.map((pet) => pet.name);
  const filteredPet = petsList.find((pet) => pet.name === selectedPet);

  if (petsList.length < 1) return <NoPets />;
  return (
    <>
      <NameSection
        petsNames={petsNames}
        onClick={setSelectedPet}
        selectedPet={selectedPet}
      />
      <PetInfo pet={filteredPet} letterCount={filteredPet.letterCount} />
    </>
  );
}
