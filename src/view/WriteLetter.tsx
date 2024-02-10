/* eslint-disable consistent-return */
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

import ResisterButtonSection from 'components/Write/ResisterButtonSection';
import PetsListDropDown from 'components/Write/PetsListDropDown';
import WritingPadSection from 'components/Write/WritingPadSection';
import TopicSuggestion from 'components/Write/TopicSuggestion';
import ImageUploadSection from 'components/Write/ImageUploadSection';
import Button from 'components/Button';
import { sendLetter, getLetters } from 'api/letter';
import { getUserInfo } from 'api/user';
import { getPets } from 'api/pets';
import { updateImageAndGetId } from 'api/images';
import { Pets } from 'types/pets';
import { State } from 'types/store';

import { generateFormData } from 'utils/formData';
import { modalActions } from '../store/modal-slice';

export default function WriteLetter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { canOpenAgain } = useSelector((state: State) => state.modal);
  const [petsList, setPetsList] = useState<Pets[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pets | null>(null);
  const [imageFile, setImageFile] = useState<File | string>('');
  const [letter, setLetter] = useState({
    summary: '',
    content: '',
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { pets } = await getPets();
      const { letters } = await getLetters();
      setPetsList(pets || []);
      if (letters.length < 1) {
        dispatch(modalActions.openModal('TOPIC'));
      }
      if (!location.state) {
        setSelectedPet(pets[0] || null);
      } else {
        const finedPet = pets.find((pet: Pets) => pet.name === location.state);
        setSelectedPet(finedPet || pets[0]);
      }

      return () => {
        dispatch(modalActions.closeModal());
      };
    })();
  }, []);

  const uploadImage = async (image: string | File) => {
    const formData = generateFormData(image);
    const response = await updateImageAndGetId(formData);

    return response.id;
  };

  const isCheckPhoneNumberModalOpen = async () => {
    const { phoneNumber } = await getUserInfo();
    if (!phoneNumber && canOpenAgain) {
      return dispatch(modalActions.openModal('PHONE'));
    }
  };

  const onClickSendButton = useCallback(async () => {
    try {
      setIsLoading(true);
      const newLetter = { ...letter };
      if (imageFile) {
        const imageId = await uploadImage(imageFile);
        newLetter.image = imageId;
      }
      await sendLetter(selectedPet?.id, newLetter);

      isCheckPhoneNumberModalOpen();
      return dispatch(modalActions.openModal('COMPLETE'));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [letter, imageFile, selectedPet]);

  return (
    <main>
      {petsList.length > 0 ? (
        <PetsListDropDown
          petName={selectedPet && selectedPet.name}
          petsList={petsList}
          onclick={setSelectedPet}
        />
      ) : (
        <ResisterButtonSection />
      )}
      <WritingPadSection
        petName={selectedPet && `${selectedPet.name}에게`}
        image={selectedPet && selectedPet.image.url}
        onchange={setLetter}
        letter={letter}
      />
      <TopicSuggestion />
      <ImageUploadSection setImageFile={setImageFile} />

      {!isLoading ? (
        <Button
          id="letter_submit"
          disabled={letter.content.length < 1 || selectedPet === null}
          onClick={onClickSendButton}
          className="mt-[58px]"
        >
          편지 보내기
        </Button>
      ) : (
        <div className="text-center mt-[58px]">
          <ClipLoader color="#FFB347" />
        </div>
      )}
    </main>
  );
}
