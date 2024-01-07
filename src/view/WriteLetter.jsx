/* eslint-disable */
import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ResisterButtonSection from '../components/Write/ResisterButtonSection';
import PetsListDropDown from '../components/Write/PetsListDropDown';
import WritingPadSection from '../components/Write/WritingPadSection';
import ImageUploadSection from '../components/Write/ImageUploadSection';
import TopicSuggestion from '../components/Write/TopicSuggestion';
import Button from '../components/Button';

import { getUserInfo } from '../api/user';
import { openModal } from '../store/modal';
import { getPets } from '../api/pets';

export default function WriteLetter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [petsList, setPetsList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(location.state || '');

  useEffect(() => {
    (async () => {
      const { pets } = await getPets();
      setPetsList(pets || []);
    })();
  }, []);

  const onClickSendButton = async () => {
    try {
      const { phoneNumber } = await getUserInfo();

      if (!phoneNumber) {
        return dispatch(openModal('PHONE'));
      }

      return dispatch(openModal('COMPLETE'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {petsList ? (
        <PetsListDropDown
          petName={selectedPet.name}
          petsList={petsList}
          onclick={setSelectedPet}
        />
      ) : (
        <ResisterButtonSection />
      )}
      <WritingPadSection
        petName={selectedPet.name}
        image={selectedPet.image.url}
      />
      <TopicSuggestion />
      <ImageUploadSection />
      <Button
        children={'편지 보내기'}
        // TODO: 편지 보내기 api 나오면 이어서
        disabled={false}
        // TODO: 편지 보내기 api 나오면 이어서
        onClick={() => onClickSendButton()}
        className="mt-[58px]"
      />
    </main>
  );
}
