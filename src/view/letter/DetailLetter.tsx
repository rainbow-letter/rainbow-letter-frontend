/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';

import Button from 'components/Button';
import WritingPadSection from 'components/Write/WritingPadSection';
import SentPhoto from 'components/LetterBox/SentPhoto';
import { USER_ACTIONS } from 'components/LetterBox/constants';

import { RootState, useAppDispatch } from 'store';
import { Letter } from 'types/letters';
import { getLetter } from 'api/letter';
import metaData from 'utils/metaData';
import { isiPhone } from 'utils/device';
import { modalActions } from 'store/modal/modal-slice';
import { letterActions } from 'store/letter/letter-slice';
import { readReply } from '../../api/reply';
import saveImg from '../../assets/detailLetter_save.svg';
import captureLogo from '../../assets/detailLetter_logo.svg';

export default function DetailLetter() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [letterData, setLetterData] = useState<Letter>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSave = useSelector((state: RootState) => state.letter.isSaveToImage);
  const letterType = useSelector((state: RootState) => state.letter.letterType);

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
    navigate('/write-letter', { state: letterData?.pet.name });
  };

  const processDate = (date: string) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  const handleSaveToImage = useCallback(
    async (type: string | null) => {
      const isIphone = isiPhone();
      let fileDate: string | null | undefined;
      let cate: string | null | undefined = '편지';
      if (sectionRef.current) {
        html2canvas(sectionRef.current, {
          allowTaint: false,
          useCORS: true,
          scale: 4,
          onclone: (document) => {
            const letterBox = document.querySelector(
              '.letterBox'
            ) as HTMLElement;
            const label = document.querySelector('.not-label') as HTMLElement;
            const button = document.querySelector('.not-btn') as HTMLElement;
            const saveBtn = document.querySelector('.not-save') as HTMLElement;
            const sentPhoto = document.querySelector('.not-img') as HTMLElement;
            const logo = document.querySelector('.logo') as HTMLElement;

            const textarea = document.querySelector(
              `${type === 'image_reply' ? '.reply_value' : '.letter_value'}`
            ) as HTMLTextAreaElement;
            const unSelectedLetter = document.querySelector(
              `${type === 'image_letter' ? '.reply_down' : '.letter_down'}`
            ) as HTMLElement;
            const date = document.querySelector(
              `${type === 'image_reply' ? '.reply_date' : '.letter_date'}`
            ) as HTMLElement;

            if (type === 'image_reply') {
              cate = '답장';
            }

            if (letterBox) {
              letterBox.style.paddingLeft = '20px';
              letterBox.style.paddingRight = '20px';
              letterBox.style.paddingTop = '15px';
              label.style.display = 'none';
              button.style.display = 'none';
              unSelectedLetter.style.display = 'none';
              saveBtn.style.display = 'none';

              const div = document.createElement('div');
              div.innerText = textarea.value;
              textarea.style.display = 'none';
              div.style.minHeight = '280px';
              textarea.parentElement?.append(div);
              textarea.parentElement?.append(date);
              const text = date.firstChild;
              fileDate = text?.textContent;
              logo.style.display = 'block';
              if (sentPhoto) {
                sentPhoto.style.display = 'none';
              }
              if (type === 'image_reply') {
                logo.style.position = 'absolute';
                logo.style.bottom = '4px';
                logo.style.left = '0px';
                letterBox.style.paddingBottom = '40px';
              }
              if (isIphone) {
                logo.style.position = 'absolute';
                logo.style.left = '-30px';
                letterBox.style.paddingBottom = '48px';
              }
            }
          },
        })
          .then((canvas) => {
            const image = canvas.toDataURL('image/png');
            dispatch(letterActions.setSaveImageUrl(image));
            const link = document.createElement('a');
            link.download = `${fileDate}_${letterData?.pet.name} ${cate}`;
            if (!isIphone) {
              link.href = image;
              link.click();
            }
          })
          .then((_) => {
            if (isIphone) {
              return navigate('/saved-image');
            }
            return dispatch(modalActions.openModal('SAVECOMPLETE'));
          });
      }
    },
    [letterData]
  );

  useEffect(() => {
    if (isSave) {
      handleSaveToImage(letterType);
    }

    return () => {
      dispatch(letterActions.saveToImage(false));
    };
  }, [isSave, letterType]);

  const onClickSaveIcon = useCallback(async () => {
    dispatch(modalActions.openModal('IMAGE'));
  }, [dispatch]);

  const isReply = letterData?.reply.type === 'REPLY';

  return (
    <>
      {letterData && (
        <main className="relative letterBox" ref={sectionRef}>
          {isReply && (
            <button
              type="button"
              onClick={onClickSaveIcon}
              id="save-button"
              className="absolute -top-[3.75rem] right-6 z-10 not-save"
            >
              <img src={saveImg} alt="저장" className="fixed" />
            </button>
          )}
          {letterData.reply.content && (
            <WritingPadSection
              image={letterData.pet.image.url}
              petName={`${letterData.pet.name}로부터`}
              reply={letterData.reply.content}
              date={processDate(letterData.reply.timestamp)}
              index={location.state.index}
              saveType={{
                target: 'reply_down',
                unTargetValue: 'reply_value',
                date: 'reply_date',
              }}
            />
          )}
          <WritingPadSection
            image={!letterData.reply.content ? letterData.pet.image.url : null}
            petName={`${letterData.pet.name}에게`}
            reply={letterData.content}
            date={processDate(letterData.createdAt)}
            className="bg-gray-2"
            saveType={{
              target: 'letter_down',
              unTargetValue: 'letter_value',
              date: 'letter_date',
            }}
          />
          {letterData.image.id && <SentPhoto letterData={letterData} />}
          <div className="w-full">
            <img src={captureLogo} alt="로고" className="logo hidden" />
          </div>
          <Button
            id="reply_write"
            disabled={!letterData.reply.content}
            onClick={onClickReplyButton}
            className="not-btn mt-12"
          >
            {USER_ACTIONS.GO_TO_REPLY}
          </Button>
        </main>
      )}
    </>
  );
}
