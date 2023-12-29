/* eslint-disable */
import { React, useState } from 'react';

import ResisterButtonSection from '../components/Write/ResisterButtonSection';
import PetsListDropDown from '../components/Write/PetsListDropDown';
import WritingPadSection from '../components/Write/WritingPadSection';
import ImageUploadSection from '../components/Write/ImageUploadSection';
import TopicSuggestion from '../components/Write/TopicSuggestion';
import Button from '../components/Button';

const IS_REGISTER_PET = true;
const petsList = [
  {
    id: 1,
    name: '두부',
    species: '고양이',
    owner: '형님',
    personality: ['활발한'],
    deathAnniversary: '2023-01-01',
    image: null,
    favorite: {
      id: 1,
      total: 0,
      dayIncreaseCount: 0,
      canIncrease: true,
    },
  },
  {
    id: 2,
    name: '새롬',
    species: '강아지',
    owner: '오빠',
    personality: ['조용한', '활발한'],
    deathAnniversary: '2023-01-02',
    image: null,
    favorite: {
      id: 1,
      total: 0,
      dayIncreaseCount: 0,
      canIncrease: true,
    },
  },
];

export default function WriteLetter() {
  const [currentPet, setCurrentPet] = useState(petsList[0].name);
  const selectedPet =
    currentPet === petsList[0].name
      ? petsList[0]
      : petsList.find((pet) => pet.name === currentPet);
  return (
    <main>
      {IS_REGISTER_PET ? (
        <PetsListDropDown
          petsList={petsList}
          currentPet={currentPet}
          onclick={setCurrentPet}
        />
      ) : (
        <ResisterButtonSection />
      )}
      <WritingPadSection selectedPet={selectedPet} />
      <TopicSuggestion />
      <ImageUploadSection />
      <Button
        value={'편지 보내기'}
        // TODO
        onClick={() => alert('추후에 할거야')}
        className="mt-[58px]"
      />
    </main>
  );
}
