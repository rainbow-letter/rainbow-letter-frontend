import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button';
import Input from 'components/Input';
import Radio from 'components/Radio/Radio';
import RadioGroup from 'components/Radio/RadioGroup';
import ContentsItem from 'components/Home/ContentsItem';
import DonateContentsItem from 'components/Donate/AppBar';
import {
  MODAL_MESSAGE,
  Modal,
  MODAL_AD_CONTENTS_ITEMS,
} from 'components/Modal/constants';
import { updatePhoneNumber } from 'api/user';
import { State } from 'types/store';
import { validatePhoneNumber } from 'utils/validators';
import { setExpireModal } from 'utils/localStorage';
import { modalActions } from 'store/modal/modal-slice';
import { letterActions } from 'store/letter/letter-slice';
import { setSessionAutoSaveID } from 'utils/sessionStorage';
import { postData } from 'api/data';
import CancelImage from '../../assets/ph_x-bold.svg';
import WritingPad from '../../assets/writing_pad.svg';
import ErrorIcon from '../../assets/Error_icon.svg';
import SaveComplete from '../../assets/save_complete.svg';
import AlarmIcon from '../../assets/ic_Error_icon.svg';

export default function ModalContents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type } = useSelector((state: State) => state.modal);

  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectRadio, setSelectRadio] = useState<string>('image_letter');

  const { title, body } = MODAL_MESSAGE.find(
    (item) => item.type === type
  ) as Modal;

  const registerPhoneNumber = async () => {
    try {
      if (!validatePhoneNumber(value)) {
        setErrorMessage('앗, 번호를 잘못 입력했어요');
      }
      await updatePhoneNumber({
        phoneNumber: value,
      });
      dispatch(modalActions.openModal('COMPLETE'));
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const closeDuringDate = () => {
    const date = Date.now() + 7 * 24 * 60 * 60 * 1000;
    setExpireModal(String(date));
  };

  useEffect(() => {
    dispatch(letterActions.selectLetter(selectRadio));
  }, [selectRadio]);

  const onClickSaveButton = useCallback(async () => {
    dispatch(letterActions.saveToImage(true));
    dispatch(modalActions.closeModal());
    await postData({
      event: selectRadio,
    });
  }, [selectRadio]);

  return (
    <>
      {(() => {
        switch (type) {
          case 'TOPIC':
            return (
              <div className="w-full">
                <header className="mt-7 text-center">
                  <h3 className="text-heading-3">{title}</h3>
                </header>
                <ul className="my-6 text-center text-body-small">
                  {body &&
                    body.map(({ id, prefix, contents }) => (
                      <li key={id} className="mb-2">
                        <span className="text-orange-400">{prefix}</span>
                        {contents}
                      </li>
                    ))}
                </ul>
                <button
                  className="absolute right-4 top-4"
                  onClick={() => dispatch(modalActions.closeModal())}
                  type="button"
                >
                  <img alt="cancel" src={CancelImage} />
                </button>
              </div>
            );
          case 'PHONE':
            return (
              <div className="w-full">
                <header className="mt-[3.313rem] text-center">
                  <h3 className="text-heading-3">{title}</h3>
                </header>
                <ul className="mt-6 text-center text-body-medium">
                  {body &&
                    body.map(({ id, prefix, contents }) => (
                      <li key={id} className="mb-1">
                        <span className="text-orange-400">{prefix}</span>
                        {contents}
                      </li>
                    ))}
                </ul>
                <Input
                  className="mt-4 w-full py-5"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                  }
                  placeholder="예) 01012341234"
                  value={value}
                />
                <p className="mb-4 mt-1 px-2.5 text-left text-caption text-alarm-red">
                  {errorMessage}
                </p>
                <div className="mb-5 mt-1 flex justify-center gap-2">
                  <img alt="알림 아이콘" src={AlarmIcon} />
                  <p className="text-solo-small text-gray-4">
                    <span className="font-bold">한 번 더</span> 핸드폰 번호를
                    확인해주세요!
                  </p>
                </div>
                <Button className="mb-5" onClick={() => registerPhoneNumber()}>
                  등록하기
                </Button>
                <div className="w-full">
                  <button
                    className="mx-auto mb-6 block text-caption text-gray-1 underline"
                    onClick={() => {
                      closeDuringDate();
                      dispatch(modalActions.openModal('COMPLETE'));
                    }}
                    type="button"
                  >
                    7일 동안 보지 않기
                  </button>
                </div>
                <button
                  className="absolute right-4 top-4"
                  onClick={() => dispatch(modalActions.openModal('COMPLETE'))}
                  type="button"
                >
                  <img alt="cancel" src={CancelImage} />
                </button>
              </div>
            );
          case 'COMPLETE':
            return (
              <div className="w-full pb-11 pt-[3.313rem]">
                <header className="flex flex-col items-center justify-center rounded-[0.938rem] bg-orange-50 py-6 text-center">
                  <img
                    alt="편지지"
                    className="h-[1.125rem] w-[1.625rem]"
                    src={WritingPad}
                  />
                  <h3 className="mt-2 text-heading-3">{title}</h3>
                  <span className="mt-2">{body[0].contents}</span>
                </header>
                <p className="mb-4 mt-[1.625rem] text-gray-1 underline">AD</p>
                <div className="flex flex-col gap-4">
                  <DonateContentsItem />
                  {MODAL_AD_CONTENTS_ITEMS.map((item) => (
                    <ContentsItem
                      key={item.id}
                      className={item?.className}
                      item={item}
                    />
                  ))}
                </div>
                <button
                  className="absolute right-4 top-4"
                  onClick={() => {
                    dispatch(modalActions.closeModal());
                    navigate('/letter-box');
                  }}
                  type="button"
                >
                  <img alt="cancel" src={CancelImage} />
                </button>
              </div>
            );
          case 'SAVING':
            return (
              <div className="w-full px-[1.562rem] py-10">
                <header className="flex flex-col items-center justify-center text-center">
                  <img alt="편지지" src={ErrorIcon} />
                  <h3 className="mt-5 whitespace-pre-wrap text-heading-3 font-bold">
                    {title}
                  </h3>
                  <span className="mt-3">{body[0].contents}</span>
                </header>
                <div className="mt-7 flex gap-3">
                  <button
                    className="rounded-[8px] border-none bg-gray-4 px-7 py-2.5 text-[16px] font-bold text-gray-5"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                      navigate('/');
                    }}
                    type="button"
                  >
                    홈으로
                  </button>
                  <button
                    className="rounded-[8px] border-none bg-orange-400 px-7 py-2.5 text-[16px] font-bold text-white"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                      const autoSaveID = String(Date.now());
                      setSessionAutoSaveID(autoSaveID);
                      window.location.reload();
                    }}
                    type="button"
                  >
                    편지 불러오기
                  </button>
                </div>
              </div>
            );
          case 'EXIST':
            return (
              <div className="w-full px-[1.562rem] py-10">
                <header className="flex flex-col items-center justify-center text-center">
                  <img alt="편지지" src={ErrorIcon} />
                  <h3 className="mt-5 whitespace-pre-wrap text-heading-3 font-bold">
                    {title}
                  </h3>
                  <span className="mt-3">{body[0].contents}</span>
                </header>
                <div className="mt-7 flex gap-3">
                  <button
                    className="rounded-[8px] border-none bg-gray-4 px-7 py-2.5 text-[16px] font-bold text-gray-5"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                      navigate('/');
                    }}
                    type="button"
                  >
                    홈으로
                  </button>
                  <button
                    className="rounded-[8px] border-none bg-orange-400 px-7 py-2.5 text-[16px] font-bold text-white"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                    }}
                    type="button"
                  >
                    편지 불러오기
                  </button>
                </div>
              </div>
            );
          case 'IMAGE':
            return (
              <div className="top-[10%] w-full px-[1.562rem] py-[1.875rem]">
                <header className="mt-1.5 flex flex-col justify-center text-left">
                  <h3 className="whitespace-pre-wrap text-heading-3">
                    {title}
                  </h3>
                  <span className="mt-2.5 text-caption">
                    {body[0].contents}
                  </span>
                </header>
                <div>
                  <RadioGroup className="mb-5 mt-6 flex flex-col gap-[1.125rem]">
                    <Radio
                      defaultChecked
                      name="saveImage"
                      onClick={setSelectRadio}
                      selectRadio={selectRadio}
                      value="image_letter"
                    >
                      내가 쓴 편지
                    </Radio>
                    <Radio
                      name="saveImage"
                      onClick={setSelectRadio}
                      selectRadio={selectRadio}
                      value="image_reply"
                    >
                      아이가 쓴 편지
                    </Radio>
                  </RadioGroup>
                </div>
                <div className="grid justify-items-end">
                  <button
                    className="rounded-[6px] border-none bg-orange-400 px-8 py-2 text-[0.875rem] font-bold text-white"
                    onClick={onClickSaveButton}
                    type="button"
                  >
                    저장하기
                  </button>
                </div>
                <button
                  className="absolute right-4 top-4"
                  onClick={() => dispatch(modalActions.closeModal())}
                  type="button"
                >
                  <img alt="cancel" src={CancelImage} />
                </button>
              </div>
            );
          case 'SAVECOMPLETE':
            return (
              <div className="w-full px-[1.125rem] pb-7 pt-9">
                <header className="flex flex-col items-center justify-center text-center">
                  <img alt="편지지" src={SaveComplete} />
                  <h3 className="mt-[15px] whitespace-pre-wrap text-heading-3">
                    {title}
                  </h3>
                </header>
                <div className="mt-6 flex justify-center">
                  <button
                    className="rounded-[8px] border-none bg-orange-400 px-6 py-1 text-[16px] font-bold text-white"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                    }}
                    type="button"
                  >
                    확인
                  </button>
                </div>
              </div>
            );
          default:
            return null;
        }
      })()}
    </>
  );
}
