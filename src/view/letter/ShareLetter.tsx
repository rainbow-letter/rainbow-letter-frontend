/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import WritingPadSection from 'components/Write/WritingPadSection';
import SentPhoto from 'components/LetterBox/SentPhoto';
import AppBar from 'components/AppBar';
import Button from 'components/Button';
import { USER_ACTIONS } from 'components/LetterBox/constants';
import { getShareLetter } from 'api/letter';
import { Letter } from 'types/letters';
import metaData from 'utils/metaData';
import CoverImage from 'components/CoverImage';
import { getImage } from 'api/images';
import defaultImage from 'assets/Logo_256px.png';

export default function ShareLetter() {
  const [letterData, setLetterData] = useState<Letter>();
  const [petImage, setPetImage] = useState('');
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      metaData(Object.keys(params)[0]);
      const data = await getShareLetter(params.shareLink);
      setLetterData(data);
    })();
  }, []);

  useEffect(() => {
    const getPetImage = async () => {
      if (letterData?.pet.image.objectKey) {
        const data = await getImage(letterData?.pet.image.objectKey);
        return setPetImage(data);
      }

      return setPetImage(defaultImage);
    };

    getPetImage();
  }, [letterData]);

  const processDate = (date: string) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  const onClickReplyButton = () => {
    navigate('/write-letter', { state: letterData?.pet.name });
  };

  const useragt = navigator.userAgent.toLowerCase();
  const targetUrl = window.location.href;

  if (useragt.match(/kakaotalk/i)) {
    window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(targetUrl)}`;
  }

  return (
    <>
      {letterData && (
        <main className="relative pb-10">
          <AppBar />
          <section className="relative">
            <CoverImage image={petImage} />
            <WritingPadSection
              image={letterData.pet.image}
              petName={`${letterData.pet.name}로부터`}
              reply={letterData.reply.content}
              date={processDate(letterData.reply.timestamp)}
            />
          </section>
          <WritingPadSection
            image={!letterData.reply.content ? letterData.pet.image : null}
            petName={`${letterData.pet.name}에게`}
            reply={letterData.content}
            date={processDate(letterData.createdAt)}
            className="bg-gray-2"
          />
          {letterData.image.id && <SentPhoto letterData={letterData} />}
          <Button
            disabled={!letterData.reply.content}
            onClick={onClickReplyButton}
            className="sticky bottom-10 mt-12 max-w-[350px]"
            id="sms_reply"
          >
            {USER_ACTIONS.GO_TO_REPLY}
          </Button>
        </main>
      )}
    </>
  );
}
