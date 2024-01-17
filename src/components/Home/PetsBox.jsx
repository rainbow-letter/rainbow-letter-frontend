/* eslint-disable import/no-cycle */
import { React, useState, useEffect } from 'react';

import NoPets from './NoPets';
import NameSection from '../LetterBox/NameSection';
import { getPets } from '../../api/pets';
import { getLetters } from '../../api/letter';
import PetInfo from './PetInfo';

export default function PetsBox() {
  const [petsList, setPetsList] = useState([]);
  const [letterList, setLetterList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    (async () => {
      const { pets } = await getPets();
      const { letters } = await getLetters();

      setPetsList(pets || []);
      if (pets.length > 0) {
        setSelectedPet(pets[0].name || null);
        setLetterList(letters);
      }
    })();
  }, []);

  const petsNames = petsList.map((pet) => pet.name);
  const filteredPet = petsList.find((pet) => pet.name === selectedPet);
  const filteredLetter = letterList.filter(
    (letter) => letter.petName === selectedPet
  );

  if (petsList.length < 1) return <NoPets />;

  return (
    <>
      <NameSection
        petsNames={petsNames}
        onClick={setSelectedPet}
        selectedPet={selectedPet}
        className="gap-2.5"
      />
      <PetInfo pet={filteredPet} letterCount={filteredLetter.length} />
    </>
  );
}
