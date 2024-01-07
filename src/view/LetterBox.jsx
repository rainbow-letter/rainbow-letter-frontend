/* eslint-disable */
import { React, useState, useEffect } from 'react';

import NoPets from '../components/MyPets/NoPets';
import { getPets } from '../api/pets';
import { getLetters } from '../api/letter';
import PetNameSection from '../components/LetterBox/petNameSection';

const DEFAULT = '전체';

export default function LetterBox() {
  const [petsList, setPetsList] = useState([]);
  const [letterList, setLetterList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(DEFAULT);

  useEffect(() => {
    (async () => {
      const { pets } = await getPets();
      const { letters } = await getLetters();

      setPetsList(pets || []);
      setLetterList(letters || []);
    })();
  }, []);

  if (petsList.length < 1) return <NoPets />;

  const petsNames = petsList && petsList.map((pet) => pet.name);

  return (
    <main>
      <PetNameSection
        petsNames={[DEFAULT, ...petsNames]}
        selectedPet={selectedPet}
        onClick={setSelectedPet}
      />
    </main>
  );
}
