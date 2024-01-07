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
import { sendLetter } from '../api/letter';
import { generateFormData } from '../utils/formData';
import { updateImageAndGetId } from '../api/images';

export default function WriteLetter() {
  const dispatch = useDispatch();
  const location = useLocation();
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
      setPetsList(pets || []);
      if (!location.state) {
        setSelectedPet(pets[0]);
      }
    })();
  }, []);

  const onClickSendButton = async () => {
    try {
      if (imageFile) {
        const imageId = await uploadImage(imageFile);
        setLetter({ ...letter, image: imageId });
      }
      await sendLetter(selectedPet.id, letter);
      const { phoneNumber } = await getUserInfo();

      if (!phoneNumber) {
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
    selectedPet && (
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
          onchange={setLetter}
          letter={letter}
        />
        <TopicSuggestion />
        <ImageUploadSection setImageFile={setImageFile} />
        <Button
          children={'편지 보내기'}
          // TODO: 편지 보내기 api 나오면 이어서
          disabled={letter.content.length < 1}
          onClick={() => onClickSendButton()}
          className="mt-[58px]"
        />
      </main>
    )
  );
}
