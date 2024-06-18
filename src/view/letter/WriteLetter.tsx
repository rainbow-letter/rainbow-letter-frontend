/* eslint-disable consistent-return */
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

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
import {
  isExistCheckSavedLetter,
  getSavedLetter,
  generateSavedLetter,
  updateSavedLetter,
  updateSessionID,
  deleteSavedLetter,
} from 'api/temporaries';
import { Pets } from 'types/pets';
import { generateFormData } from 'utils/formData';
import { getExpireModal } from 'utils/localStorage';
import {
  setSessionAutoSaveID,
  getSessionAutoSaveID,
} from 'utils/sesstionStorage';
import { modalActions } from 'store/modal/modal-slice';
import { letterActions } from 'store/letter/letter-slice';

export default function WriteLetter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [petsList, setPetsList] = useState<Pets[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pets | null>(null);
  const [imageFile, setImageFile] = useState<File | string>('');
  const [letter, setLetter] = useState({
    summary: '',
    content: '',
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [temp, setTemp] = useState<string | undefined>('');
  const [id, setId] = useState<string>('');

  const fetchAutoSaveLetter = useCallback(async () => {
    const { data: savedLetter } = await getSavedLetter();
    setLetter({
      ...letter,
      content: savedLetter.content,
      summary: savedLetter.content.slice(0, 20),
    });
    setId(String(savedLetter.id));
    const sessionId = await updateSessionID(String(savedLetter.id));
    setSessionAutoSaveID(sessionId);

    return savedLetter.petId;
  }, []);

  const setAutoSaveLetter = useCallback(async (data: Pets[]) => {
    const sessionId = await generateSavedLetter({
      petId: data[0].id,
      content: letter?.content,
    });
    const { data: savedLetter } = await getSavedLetter();
    setId(String(savedLetter.id));
    setSessionAutoSaveID(sessionId);
  }, []);

  const loadLetter = useCallback(async (pets: Pets[]) => {
    const petId = await fetchAutoSaveLetter();

    const finedPet = pets.find((pet: Pets) => pet.id === petId);
    return setSelectedPet(finedPet || pets[0]);
  }, []);

  const choosePet = useCallback(
    async (pets: Pets[]) => {
      const isExist = await isExistCheckSavedLetter();
      if (location.state) {
        if (isExist) {
          dispatch(modalActions.openModal('EXIST'));
          return loadLetter(pets);
        }

        const finedPet = pets.find((pet: Pets) => pet.name === location.state);
        setSelectedPet(finedPet || pets[0]);
        return setAutoSaveLetter(pets);
      }

      if (isExist) {
        return loadLetter(pets);
      }

      await setAutoSaveLetter(pets);
      return setSelectedPet(pets[0] || null);
    },
    [location]
  );

  // 편지쓰기 페이지 입장
  useEffect(() => {
    (async () => {
      const { pets } = await getPets();
      const { letters } = await getLetters();
      setPetsList(pets || []);
      if (letters.length < 1) {
        dispatch(modalActions.openModal('TOPIC'));
      }
      choosePet(pets);

      return () => {
        dispatch(modalActions.closeModal());
      };
    })();
  }, []);

  // 편지 서버에 저장
  useEffect(() => {
    const saveLetterValue = async () => {
      try {
        const isExist = await isExistCheckSavedLetter();
        if (isExist && temp !== '') {
          await updateSavedLetter({
            id,
            petId: selectedPet?.id,
            content: letter?.content,
          });
          dispatch(letterActions.setIsSuccess());
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          dispatch(letterActions.setisFailed());
        }
      }
    };

    const autoSaveLetter = setTimeout(() => {
      if (temp === letter?.content) {
        dispatch(letterActions.setIsSaving(false));
        saveLetterValue();
      }

      clearTimeout(autoSaveLetter);
    }, 3000);

    return () => clearTimeout(autoSaveLetter);
  }, [temp, selectedPet?.id]);

  // 다른 탭에서 접속했는지 확인.
  useEffect(() => {
    const compareSessionId = async () => {
      try {
        const isExist = await isExistCheckSavedLetter();
        if (!isExist) return;
        const { data } = await getSavedLetter();
        const isTabLive = getSessionAutoSaveID();
        if (isExist && data.sessionId !== isTabLive) {
          return dispatch(modalActions.openModal('SAVING'));
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
      }
    };

    const isCheckTabLive = setInterval(() => {
      compareSessionId();
    }, 5000);

    return () => clearInterval(isCheckTabLive);
  }, []);

  // 편지 내용 임시 저장
  useEffect(() => {
    setTemp(letter?.content);
    dispatch(letterActions.setIsSaving(true));
  }, [letter?.content]);

  const uploadImage = async (image: string | File) => {
    const formData = generateFormData(image);
    const response = await updateImageAndGetId(formData);

    return response.id;
  };

  const isCheckPhoneNumberModalOpen = async () => {
    const { phoneNumber } = await getUserInfo();
    const expire = getExpireModal();

    if (!phoneNumber && Number(expire) < Date.now()) {
      dispatch(modalActions.openModal('PHONE'));
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
      await deleteSavedLetter(id);
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
    <main className="relative">
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
        id={selectedPet?.id}
        petName={selectedPet && `${selectedPet.name}에게`}
        image={selectedPet && selectedPet.image}
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
          className="mt-[3.625rem]"
        >
          편지 보내기
        </Button>
      ) : (
        <div className="text-center mt-[3.625rem]">
          <ClipLoader color="#FFB347" />
        </div>
      )}
    </main>
  );
}
