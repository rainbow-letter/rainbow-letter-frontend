/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import WritingPadSection from 'components/Write/WritingPadSection';
import SentPhoto from 'components/LetterBox/SentPhoto';
import AppBar from 'components/AppBar';
import NavBar from 'components/NavBar';
import Button from 'components/Button';
import { USER_ACTIONS } from 'components/LetterBox/constants';
import { getShareLetter } from 'api/letter';
import { Letter } from 'types/letters';
import metaData from 'utils/metaData';

export default function ShareLetter() {
  const [letterData, setLetterData] = useState<Letter>();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      metaData(Object.keys(params)[0]);
      const data = await getShareLetter(params.shareLink);
      setLetterData(data);
    })();
  }, []);

  const processDate = (date: string) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  const onClickReplyButton = () => {
    navigate('/write-letter', { state: letterData?.pet.name });
  };

  return (
    <>
      {letterData && (
        <main>
          <AppBar />
          {letterData.reply.content && (
            <WritingPadSection
              image={letterData.pet.image.url}
              petName={`${letterData.pet.name}로부터`}
              reply={letterData.reply.content}
              date={processDate(letterData.reply.timestamp)}
            />
          )}
          <WritingPadSection
            image={!letterData.reply.content ? letterData.pet.image.url : null}
            petName={`${letterData.pet.name}에게`}
            reply={letterData.content}
            date={processDate(letterData.createdAt)}
            className="bg-gray-2"
          />
          {letterData.image.id && <SentPhoto letterData={letterData} />}
          <Button
            disabled={!letterData.reply.content}
            onClick={onClickReplyButton}
            className="mt-12"
          >
            {USER_ACTIONS.GO_TO_REPLY}
          </Button>
          <NavBar />
        </main>
      )}
    </>
  );
}
