import { useState, useEffect } from 'react';

import { PetsDashBoard } from 'types/pets';
import { getPetsDashBoard } from 'api/pets';
import NoPets from 'components/Home/NoPets';
import NameSection from 'components/Home/NameSection';
import PetInfo from 'components/Home/PetInfo';

export default function PetsBox() {
  const [petsList, setPetsList] = useState<PetsDashBoard[]>([]);
  const [selectedPet, setSelectedPet] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await getPetsDashBoard();

      setPetsList(data.pets || []);
      if (data.pets.length > 0) {
        setSelectedPet(data.pets[0].name || null);
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
