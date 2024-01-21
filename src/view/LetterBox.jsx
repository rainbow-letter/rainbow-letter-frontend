/* eslint-disable import/no-cycle */
import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NoPets from '../components/MyPets/NoPets';
import { getPets } from '../api/pets';
import { getLetters } from '../api/letter';
import NameSection from '../components/LetterBox/NameSection';
import LetterListSection from '../components/LetterBox/LetterListSection';

const DEFAULT = '전체';

export default function LetterBox() {
  const { state } = useLocation();
  const [petsList, setPetsList] = useState([]);
  const [letterList, setLetterList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(DEFAULT);

  useEffect(() => {
    (async () => {
      const { pets } = await getPets();
      const { letters } = await getLetters();

      setPetsList(pets || []);
      setLetterList(letters || []);
      if (state) {
        const findedPet = pets.find((pet) => pet.id === state);
        setSelectedPet(findedPet.name || DEFAULT);
      }
    })();
  }, []);

  const petsNames = petsList && petsList.map((pet) => pet.name);
  const filteredLetter =
    selectedPet === DEFAULT
      ? letterList
      : letterList.filter((letter) => letter.petName === selectedPet);

  if (petsList.length < 1) return <NoPets />;

  return (
    <main className="min-h-screen">
      <NameSection
        petsNames={[DEFAULT, ...petsNames]}
        selectedPet={selectedPet}
        onClick={setSelectedPet}
      />
      <LetterListSection letters={filteredLetter} pet={selectedPet} />
    </main>
  );
}
