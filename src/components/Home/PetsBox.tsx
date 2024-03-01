import React, { useState, useEffect } from 'react';

import { PetDashBoard } from 'types/pets';
import { getDashboard } from 'api/pets';
import NoPets from 'components/Home/NoPets';
import NameSection from 'components/Home/NameSection';
import PetInfo from 'components/Home/PetInfo';

export default function PetsBox() {
  const [petsList, setPetsList] = useState<PetDashBoard[]>([]);
  const [selectedPet, setSelectedPet] = useState<string | null>(null);

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
    <section className="flex flex-col gap-y-4">
      <NameSection
        petsNames={petsNames}
        onClick={setSelectedPet}
        selectedPet={selectedPet}
      />
      <PetInfo pet={filteredPet} letterCount={filteredPet?.letterCount} />
    </section>
  );
}
