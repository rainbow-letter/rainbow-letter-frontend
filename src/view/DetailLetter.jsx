/* eslint-disable */
import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import WritingPadSection from '../components/Write/WritingPadSection';
import CoverImage from '../components/CoverImage';
import Button from '../components/Button';
import { getLetter } from '../api/letter';

const reply = {
  id: 1,
  summary: '엄마 미키 여기서 잘 지내!',
  content:
    '엄마 미키 여기서 잘 지내! 여기 무지개마을은 매일 햇살이 따뜻해. 미키 언제나 엄마 곁에 있을게. 사랑해!',
  // content: null,
  readStatus: 'UNREAD',
  type: 'REPLY',
};

export default function DetailLetter() {
  const { letterId } = useParams();
  const navigate = useNavigate();
  const [letterData, setLetterData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getLetter(letterId);
      console.log(data);
      setLetterData(data);
    })();
  }, []);

  const onClickReplyButton = () => {
    navigate('/letter/write', { state: letterData.pet });
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
          {reply.content && (
            <WritingPadSection
              image={letterData.pet.image.url}
              petName={letterData.pet.name}
              reply={reply.content}
              date={processDate(letterData.createdAt)}
            />
          )}
          <WritingPadSection
            image={!reply.content && letterData.pet.image.url}
            petName={letterData.pet.name}
            reply={letterData.content}
            date={processDate(letterData.createdAt)}
            // TODO: 나중에 다시 한번
            className="bg-[#F8F8F8]"
          />
          {letterData.image.id && (
            <section className="mt-16">
              <h3 className="text-solo-large">아이에게 보낸 편지</h3>
              <CoverImage
                image={letterData.image.url}
                className="relative mt-8"
              />
            </section>
          )}
          <Button onClick={onClickReplyButton} className="mt-12">
            답장쓰기
          </Button>
        </main>
      )}
    </>
  );
}
