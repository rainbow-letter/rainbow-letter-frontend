import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';

import Button from 'components/Button';
import WrittenLetterPaper from 'components/Write/WrittenLetterPaper';
import LetterPaperWithImage from 'components/Write/LetterPaperWithImage';
import SentPhoto from 'components/LetterBox/SentPhoto';
import { USER_ACTIONS } from 'components/LetterBox/constants';
import CoverImage from 'components/CoverImage';
import DownLoadButton from 'components/Write/DownLoadButton';

import { RootState, useAppDispatch } from 'store';
import { Letter } from 'types/letters';
import { getLetter } from 'api/letter';
import metaData from 'utils/metaData';
import { formatDateIncludingHangul } from 'utils/date';
import { isiPhone } from 'utils/device';
import defaultImage from 'assets/Logo_256px.png';
import { modalActions } from 'store/modal/modal-slice';
import { letterActions } from 'store/letter/letter-slice';
import { getImage } from 'api/images';
import { readReply } from '../../api/reply';
import captureLogo from '../../assets/detailLetter_logo.svg';

export default function DetailLetter() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [letterData, setLetterData] = useState<Letter>();
  const [petImage, setPetImage] = useState('');

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
              div.style.fontFamily = 'Gyobomungo2019';
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
                logo.style.bottom = '4px';
                logo.style.left = '-30px';
                letterBox.style.paddingBottom = '42px';
                if (type === 'image_letter') {
                  letterBox.style.paddingBottom = '58px';
                }
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
          .then(() => {
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

  const isExistReply = !!letterData?.reply.content;

  return (
    <>
      {letterData && (
        <main ref={sectionRef} className="letterBox relative">
          {isExistReply && <DownLoadButton onClick={onClickSaveIcon} />}
          <LetterPaperWithImage>
            <CoverImage image={petImage} />
            {isExistReply && (
              <WrittenLetterPaper
                className="pt-[15.187rem]"
                content={letterData.reply.content}
                date={formatDateIncludingHangul(letterData.reply.timestamp)}
                index={location.state.index}
                letterPaperColor="bg-orange-50"
                petName={`${letterData.pet.name}로부터`}
                saveType={{
                  target: 'reply_down',
                  unTargetValue: 'reply_value',
                  date: 'reply_date',
                }}
              />
            )}
            <WrittenLetterPaper
              className={isExistReply ? 'mt-4' : 'pt-[15.187rem]'}
              content={letterData.content}
              date={
                isExistReply
                  ? formatDateIncludingHangul(letterData.reply.timestamp)
                  : ''
              }
              letterPaperColor="bg-gray-2"
              petName={`${letterData.pet.name}에게`}
              saveType={{
                target: 'letter_down',
                unTargetValue: 'letter_value',
                date: 'letter_date',
              }}
            />
          </LetterPaperWithImage>
          {letterData.image.id && <SentPhoto letterData={letterData} />}
          <div className="w-full">
            <img alt="로고" className="logo hidden" src={captureLogo} />
          </div>
          <Button
            className="not-btn mt-12"
            disabled={!letterData.reply.content}
            id="reply_write"
            onClick={onClickReplyButton}
          >
            {USER_ACTIONS.GO_TO_REPLY}
          </Button>
        </main>
      )}
    </>
  );
}
