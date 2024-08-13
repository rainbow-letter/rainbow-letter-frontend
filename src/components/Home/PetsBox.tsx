import { useState, useEffect } from 'react';

import { PetResponse } from 'types/pets';
import { getPets } from 'api/pets';
import NoPets from 'components/Home/NoPets';
import NameSection from 'components/Home/NameSection';
import PetInfo from 'components/Home/PetInfo';

export default function PetsBox() {
  const [petsList, setPetsList] = useState<PetResponse[]>([]);
  const [selectedPet, setSelectedPet] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await getPets();

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
      {/* TODO: letterCount 속성으로 수정하기(현재는 좋아요 숫자로 넣었음..) */}
      <PetInfo pet={filteredPet} letterCount={filteredPet?.favorite.total} />
    </section>
  );
}
