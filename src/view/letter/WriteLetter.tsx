import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';

import ResisterButtonSection from 'components/Write/ResisterButtonSection';
import PetsListDropDown from 'components/Write/PetsListDropDown';
import TopicSuggestion from 'components/Write/TopicSuggestion';
import ImageUploadSection from 'components/Write/ImageUploadSection';
import WritableLetterPaper from 'components/Write/WritableLetterPaper';
import LetterPaperWithImage from 'components/Write/LetterPaperWithImage';
import Button from 'components/Button';
import { sendLetter, getLetterList } from 'api/letter';
import { getUserInfo } from 'api/user';
import { getPets } from 'api/pets';
import { resisterImage } from 'api/images';
import {
  isExistCheckSavedLetter,
  getSavedLetter,
  generateSavedLetter,
  updateSavedLetter,
  updateSessionID,
  deleteSavedLetter,
} from 'api/temporaries';
import { PetResponse } from 'types/pets';
import { generateFormData } from 'utils/formData';
import { getExpireModal } from 'utils/localStorage';
import {
  setSessionAutoSaveID,
  getSessionAutoSaveID,
} from 'utils/sessionStorage';
import { modalActions } from 'store/modal/modal-slice';
import { letterActions } from 'store/letter/letter-slice';
import CoverImage from 'components/Common/CoverImage';
import useGetImage from 'hooks/useGetImage';
import { LetterRequest } from 'types/letters';

export default function WriteLetter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [petsList, setPetsList] = useState<PetResponse[]>([]);
  const [selectedPet, setSelectedPet] = useState<PetResponse | null>(null);
  const [imageFile, setImageFile] = useState<File | string>('');
  const [letter, setLetter] = useState<LetterRequest>({
    summary: '',
    content: '',
    image: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [temp, setTemp] = useState<string | undefined>('');
  const [id, setId] = useState<number | null>(null);
  const { image } = useGetImage(selectedPet);

  const fetchAutoSaveLetter = useCallback(async () => {
    const { data: savedLetter } = await getSavedLetter(selectedPet?.id);
    setLetter({
      ...letter,
      content: savedLetter.content,
      summary: savedLetter.content.slice(0, 20),
    });
    setId(savedLetter.id);
    const {
      data: { sessionId },
    } = await updateSessionID(savedLetter.id);
    setSessionAutoSaveID(sessionId);

    return savedLetter.petId;
  }, [selectedPet?.id]);

  const setAutoSaveLetter = useCallback(async (pet: PetResponse[]) => {
    const sessionId = await generateSavedLetter({
      petId: pet[0].id,
      content: letter?.content,
    });
    const { data: savedLetter } = await getSavedLetter(selectedPet?.id);
    setId(savedLetter.id);
    setSessionAutoSaveID(sessionId.sessionId);
  }, []);

  const loadLetter = useCallback(
    async (pets: PetResponse[]) => {
      const petId = await fetchAutoSaveLetter();

      const finedPet = pets.find((pet: PetResponse) => pet.id === petId);
      return setSelectedPet(finedPet || pets[0]);
    },
    [selectedPet?.id]
  );

  const choosePet = useCallback(
    async (pets: PetResponse[]) => {
      const {
        data: { exists },
      } = await isExistCheckSavedLetter(selectedPet?.id);
      if (location.state) {
        if (exists && selectedPet?.id) {
          dispatch(modalActions.openModal('EXIST'));
          return loadLetter(pets);
        }

        const finedPet = pets.find(
          (pet: PetResponse) => pet.name === location.state
        );
        setSelectedPet(finedPet || pets[0]);
        return await setAutoSaveLetter(pets);
      }

      if (exists && selectedPet?.id) {
        return loadLetter(pets);
      }

      await setAutoSaveLetter(pets);
    },
    [location, selectedPet?.id]
  );

  // 편지쓰기 페이지 입장
  useEffect(() => {
    (async () => {
      const { data } = await getPets();
      // const {
      //   data: { letters },
      // } = await getLetterList();
      setPetsList(data.pets || []);
      // if (letters.length < 1) {
      //   dispatch(modalActions.openModal('TOPIC'));
      // }
      setSelectedPet(data.pets[0] || null);

      return () => {
        dispatch(modalActions.closeModal());
      };
    })();
  }, []);

  // 편지 서버에 저장
  useEffect(() => {
    const saveLetterValue = async () => {
      try {
        const {
          data: { exists },
        } = await isExistCheckSavedLetter(selectedPet?.id);
        if (exists && temp !== '') {
          await updateSavedLetter(id, {
            petId: selectedPet?.id,
            content: letter?.content,
          });
          dispatch(letterActions.setIsSuccess());
        }
      } catch (error) {
        dispatch(letterActions.setisFailed());
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
  // useEffect(() => {
  //   const compareSessionId = async () => {
  //     try {
  //       const {
  //         data: { exists },
  //       } = await isExistCheckSavedLetter(selectedPet?.id);
  //       if (!exists) return;
  //       const { data } = await getSavedLetter(selectedPet?.id);
  //       const isTabLive = getSessionAutoSaveID();
  //       if (exists && data.sessionId !== isTabLive) {
  //         return dispatch(modalActions.openModal('SAVING'));
  //       }
  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //         console.log(error);
  //       }
  //     }
  //   };

  //   const isCheckTabLive = setInterval(() => {
  //     compareSessionId();
  //   }, 5000);

  //   return () => clearInterval(isCheckTabLive);
  // }, []);

  // 편지 내용 임시 저장
  useEffect(() => {
    setTemp(letter?.content);
    dispatch(letterActions.setIsSaving(true));
  }, [letter?.content]);

  const uploadImage = async (image: string | File) => {
    const formData = generateFormData(image);
    const { data } = await resisterImage(formData);

    return data.objectKey;
  };

  const isCheckPhoneNumberModalOpen = async () => {
    const { data } = await getUserInfo();
    const expire = getExpireModal();

    if (!data.phoneNumber && Number(expire) < Date.now()) {
      dispatch(modalActions.openModal('PHONE'));
    }
  };

  const onClickSendButton = useCallback(async () => {
    try {
      setIsLoading(true);
      const newLetter = { ...letter };
      if (imageFile) {
        const objectKey = await uploadImage(imageFile);
        newLetter.image = objectKey;
      }
      await sendLetter(selectedPet?.id, newLetter);
      // await deleteSavedLetter(id, selectedPet?.id);

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
      <LetterPaperWithImage>
        <CoverImage image={image} />
        <WritableLetterPaper
          petName={selectedPet?.name}
          onchange={setLetter}
          letter={letter}
        />
      </LetterPaperWithImage>
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
        <div className="mt-[3.625rem] text-center">
          <ClipLoader color="#FFB347" />
        </div>
      )}
    </main>
  );
}
