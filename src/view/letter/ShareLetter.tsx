import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import SentPhoto from 'components/LetterBox/SentPhoto';
import AppBar from 'components/AppBar';
import Button from 'components/Button';
import { USER_ACTIONS } from 'components/LetterBox/constants';
import LetterPaperWithImage from 'components/Write/LetterPaperWithImage';
import WrittenLetterPaper from 'components/Write/WrittenLetterPaper';
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
        return (window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(targetUrl)}`);
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
            <WrittenLetterPaper
              className="pt-[15.187rem]"
              content={letterData.reply.content}
              date={formatDateIncludingHangul(letterData.reply.timestamp)}
              letterPaperColor="bg-orange-50"
              petName={`${letterData.pet.name}로부터`}
            />
            <WrittenLetterPaper
              className="mt-4"
              content={letterData.content}
              date={formatDateIncludingHangul(letterData.reply.timestamp)}
              letterPaperColor="bg-gray-2"
              petName={`${letterData.pet.name}에게`}
            />
          </LetterPaperWithImage>
          {letterData.image.id && <SentPhoto letterData={letterData} />}
          <Button
            className="sticky bottom-10 mt-12 max-w-[350px]"
            disabled={!letterData.reply.content}
            id="sms_reply"
            onClick={onClickReplyButton}
          >
            {USER_ACTIONS.GO_TO_REPLY}
          </Button>
        </main>
      )}
    </>
  );
}
