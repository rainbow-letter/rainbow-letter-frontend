/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import WritingPadSection from 'components/Write/WritingPadSection';
import SentPhoto from 'components/LetterBox/SentPhoto';
import AppBar from 'components/AppBar';
import Button from 'components/Button';
import { USER_ACTIONS } from 'components/LetterBox/constants';
import LetterPaperWithImage from 'components/Write/LetterPaperWithImage';
import CoverImage from 'components/CoverImage';
import { getShareLetter } from 'api/letter';
import { getImage } from 'api/images';
import metaData from 'utils/metaData';
import { formatDateIncludingHangul } from 'utils/date';
import { isKakaoTalk } from 'utils/device';
import { Letter } from 'types/letters';
import defaultImage from 'assets/Logo_256px.png';

const targetUrl = window.location.href;

export default function ShareLetter() {
  const [letterData, setLetterData] = useState<Letter>();
  const [petImage, setPetImage] = useState<string>('');
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (isKakaoTalk()) {
        window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(targetUrl)}`;
      }

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

  const onClickReplyButton = () => {
    navigate('/write-letter', { state: letterData?.pet.name });
  };

  return (
    <>
      {letterData && (
        <main className="relative pb-10">
          <AppBar />
          <LetterPaperWithImage>
            <CoverImage image={petImage} />
            <WritingPadSection
              image={letterData.pet.image}
              petName={`${letterData.pet.name}로부터`}
              reply={letterData.reply.content}
              date={formatDateIncludingHangul(letterData.reply.timestamp)}
            />
          </LetterPaperWithImage>
          <WritingPadSection
            image={!letterData.reply.content ? letterData.pet.image : null}
            petName={`${letterData.pet.name}에게`}
            reply={letterData.content}
            date={formatDateIncludingHangul(letterData.createdAt)}
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
