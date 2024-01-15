/* eslint-disable */
import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import WritingPadSection from '../components/Write/WritingPadSection';

import SentPhoto from '../components/LetterBox/SentPhoto';
import Button from '../components/Button';
import { getLetter } from '../api/letter';
import { readReply } from '../api/reply';
import { USER_ACTIONS } from '../components/LetterBox/constants';

export default function DetailLetter() {
  const { letterId } = useParams();
  const navigate = useNavigate();
  const [letterData, setLetterData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getLetter(letterId);
      setLetterData(data);
      if (data.reply.type === 'REPLY') {
        await readReply(data.id);
      }
    })();
  }, []);

  const onClickReplyButton = () => {
    navigate('/write-letter', { state: letterData.pet });
  };

  const processDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <>
      {letterData && (
        <main>
          {letterData.reply.content && (
            <WritingPadSection
              image={letterData.pet.image.url}
              petName={letterData.pet.name + '로부터'}
              reply={reply.content}
              date={processDate(letterData.createdAt)}
            />
          )}
          <WritingPadSection
            image={!letterData.reply.content && letterData.pet.image.url}
            petName={letterData.pet.name + '에게'}
            reply={letterData.content}
            date={processDate(letterData.createdAt)}
            className={'bg-gray-2'}
          />
          {letterData.image.id && <SentPhoto letterData={letterData} />}
          <Button onClick={onClickReplyButton} className="mt-12">
            {USER_ACTIONS.GO_TO_REPLY}
          </Button>
        </main>
      )}
    </>
  );
}
