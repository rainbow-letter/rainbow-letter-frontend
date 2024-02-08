/* eslint-disable react/jsx-no-useless-fragment */
import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { USER_ACTIONS } from 'components/LetterBox/constants';

import WritingPadSection from '../components/Write/WritingPadSection';
import SentPhoto from '../components/LetterBox/SentPhoto';
import { getLetter } from '../api/letter';
import { readReply } from '../api/reply';
import metaData from '../utils/metaData';

export default function DetailLetter() {
  const params = useParams();
  const navigate = useNavigate();
  const [letterData, setLetterData] = useState(null);

  useEffect(() => {
    (async () => {
      metaData(Object.keys(params)[0]);
      const data = await getLetter(params.letterId);
      setLetterData(data);
      if (data.reply.type === 'REPLY') {
        await readReply(data.reply.id);
      }
    })();
  }, []);

  const onClickReplyButton = () => {
    navigate('/write-letter', { state: letterData.pet.name });
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
              petName={`${letterData.pet.name}로부터`}
              reply={letterData.reply.content}
              date={processDate(letterData.reply.timestamp)}
            />
          )}
          <WritingPadSection
            image={!letterData.reply.content && letterData.pet.image.url}
            petName={`${letterData.pet.name}에게`}
            reply={letterData.content}
            date={processDate(letterData.createdAt)}
            className="bg-gray-2"
          />
          {letterData.image.id && <SentPhoto letterData={letterData} />}
          <Button
            id="reply_write"
            disabled={!letterData.reply.content}
            onClick={onClickReplyButton}
            className="mt-12"
          >
            {USER_ACTIONS.GO_TO_REPLY}
          </Button>
        </main>
      )}
    </>
  );
}
