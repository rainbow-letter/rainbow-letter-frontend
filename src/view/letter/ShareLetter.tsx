import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import SentPhoto from 'components/LetterBox/SentPhoto';
import AppBar from 'components/AppBar';
import Button from 'components/Button';
import { USER_ACTIONS } from 'components/LetterBox/constants';
import LetterPaperWithImage from 'components/Write/LetterPaperWithImage';
import WrittenLetterPaper from 'components/Write/WrittenLetterPaper';
import CoverImage from 'components/Common/CoverImage';
import useGetImage from 'hooks/useGetImage';
import { getShareLetter } from 'api/letter';
import metaData from 'utils/metaData';
import { formatDateIncludingHangul } from 'utils/date';
import { isKakaoTalk } from 'utils/device';
import { Letter } from 'types/letters';

const targetUrl = window.location.href;

export default function ShareLetter() {
  const [letterData, setLetterData] = useState<any>();
  const { petImage } = useGetImage(letterData?.pet);
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
              petName={`${letterData.pet.name}로부터`}
              content={letterData.reply.content}
              className="pt-[15.187rem]"
              letterPaperColor="bg-orange-50"
              date={formatDateIncludingHangul(letterData.reply.timestamp)}
            />
            <WrittenLetterPaper
              petName={`${letterData.pet.name}에게`}
              content={letterData.content}
              className="mt-4"
              letterPaperColor="bg-gray-2"
              date={formatDateIncludingHangul(letterData.reply.timestamp)}
            />
          </LetterPaperWithImage>
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
