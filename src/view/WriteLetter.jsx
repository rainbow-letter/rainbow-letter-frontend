/* eslint-disable */
import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ResisterButtonSection from '../components/Write/ResisterButtonSection';
import PetsListDropDown from '../components/Write/PetsListDropDown';
import WritingPadSection from '../components/Write/WritingPadSection';
import ImageUploadSection from '../components/Write/ImageUploadSection';
import TopicSuggestion from '../components/Write/TopicSuggestion';
import Button from '../components/Button';

import { getUserInfo } from '../api/user';
import { openModal } from '../store/modal';
import { getPets } from '../api/pets';
import { sendLetter } from '../api/letter';
import { generateFormData } from '../utils/formData';
import { updateImageAndGetId } from '../api/images';
import { getLetters } from '../api/letter';

export default function WriteLetter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { canOpenAgain } = useSelector((state) => state.modal);
  const [petsList, setPetsList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(location.state || null);
  const [imageFile, setImageFile] = useState(null);
  const [letter, setLetter] = useState({
    summary: '',
    content: '',
    image: null,
  });

  useEffect(() => {
    (async () => {
      const { pets } = await getPets();
      const { letters } = await getLetters();
      setPetsList(pets || []);
      if (letters.length < 1) {
        dispatch(openModal('TOPIC'));
      }
      if (!location.state) {
        setSelectedPet(pets[0] || null);
      }
    })();
  }, []);

  const onClickSendButton = async () => {
    try {
      const newLetter = { ...letter };
      if (imageFile) {
        const imageId = await uploadImage(imageFile);
        newLetter.image = imageId;
      }
      await sendLetter(selectedPet.id, newLetter);

      const { phoneNumber } = await getUserInfo();
      if (!phoneNumber && canOpenAgain) {
        return dispatch(openModal('PHONE'));
      }

      return dispatch(openModal('COMPLETE'));
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (image) => {
    const formData = generateFormData(image);
    const response = await updateImageAndGetId(formData);

    return response.id;
  };

  return (
    <main className="min-h-screen">
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
        petName={selectedPet && selectedPet.name + '에게'}
        image={selectedPet && selectedPet.image.url}
        onchange={setLetter}
        letter={letter}
      />
      <TopicSuggestion />
      <ImageUploadSection setImageFile={setImageFile} />
      <Button
        children={'편지 보내기'}
        disabled={letter.content.length < 1 || selectedPet === null}
        onClick={() => onClickSendButton()}
        className="mt-[58px]"
      />
    </main>
  );
}
