import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button';
import Input from 'components/Input';
import Radio from 'components/Radio/Radio';
import RadioGroup from 'components/Radio/RadioGroup';
import ContentsItem from 'components/Home/ContentsItem';
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
import { setSessionAutoSaveID } from 'utils/sesstionStorage';
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
                <ul className="text-body-small text-center my-6">
                  {body &&
                    body.map(({ id, prefix, contents }) => (
                      <li key={id} className="mb-2">
                        <span className="text-orange-400">{prefix}</span>
                        {contents}
                      </li>
                    ))}
                </ul>
                <button
                  type="button"
                  onClick={() => dispatch(modalActions.closeModal())}
                  className="absolute top-4 right-4"
                >
                  <img src={CancelImage} alt="cancel" />
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
                  placeholder="예) 01012341234"
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                  }
                  className="w-full mt-4 py-5"
                />
                <p className="text-caption text-left text-alarm-red px-2.5 mt-1 mb-4">
                  {errorMessage}
                </p>
                <div className="flex gap-2 justify-center mt-1 mb-5">
                  <img src={AlarmIcon} alt="알림 아이콘" />
                  <p className="text-solo-small text-gray-4">
                    <span className="font-bold">한 번 더</span> 핸드폰 번호를
                    확인해주세요!
                  </p>
                </div>
                <Button onClick={() => registerPhoneNumber()} className="mb-5">
                  등록하기
                </Button>
                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => {
                      closeDuringDate();
                      dispatch(modalActions.openModal('COMPLETE'));
                    }}
                    className="underline text-caption text-gray-1 mb-6 block mx-auto"
                  >
                    7일 동안 보지 않기
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => dispatch(modalActions.openModal('COMPLETE'))}
                  className="absolute top-4 right-4"
                >
                  <img src={CancelImage} alt="cancel" />
                </button>
              </div>
            );
          case 'COMPLETE':
            return (
              <div className="w-full pt-[3.313rem] pb-[2.75rem]">
                <header className="flex flex-col justify-center items-center py-6 text-center rounded-[0.938rem] bg-orange-50">
                  <img
                    src={WritingPad}
                    alt="편지지"
                    className="w-[1.625rem] h-[1.125rem]"
                  />
                  <h3 className="text-heading-3 mt-2">{title}</h3>
                  <span className="mt-2">{body[0].contents}</span>
                </header>
                <p className="mt-[1.625rem] mb-4 underline text-gray-1">AD</p>
                <div className="flex flex-col gap-4">
                  {MODAL_AD_CONTENTS_ITEMS.map((item) => (
                    <ContentsItem
                      item={item}
                      className={`${item.id === 1 ? 'bg-gray-2' : ''} shadow-modal`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(modalActions.closeModal());
                    navigate('/letter-box');
                  }}
                  className="absolute top-4 right-4"
                >
                  <img src={CancelImage} alt="cancel" />
                </button>
              </div>
            );
          case 'SAVING':
            return (
              <div className="w-full py-10 px-[1.562rem]">
                <header className="flex flex-col justify-center items-center text-center">
                  <img src={ErrorIcon} alt="편지지" />
                  <h3 className="text-heading-3 mt-5 font-bold whitespace-pre-wrap">
                    {title}
                  </h3>
                  <span className="mt-3">{body[0].contents}</span>
                </header>
                <div className="gap-3 flex mt-7">
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                      navigate('/');
                    }}
                    className="py-2.5 px-7 text-[16px] bg-gray-4 border-none rounded-[8px] text-gray-5 font-bold"
                  >
                    홈으로
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                      const autoSaveID = String(Date.now());
                      setSessionAutoSaveID(autoSaveID);
                      window.location.reload();
                    }}
                    className="py-2.5 px-7 text-[16px] bg-orange-400 border-none rounded-[8px] text-white font-bold"
                  >
                    편지 불러오기
                  </button>
                </div>
              </div>
            );
          case 'EXIST':
            return (
              <div className="w-full py-10 px-[1.562rem]">
                <header className="flex flex-col justify-center items-center text-center">
                  <img src={ErrorIcon} alt="편지지" />
                  <h3 className="text-heading-3 mt-5 font-bold whitespace-pre-wrap">
                    {title}
                  </h3>
                  <span className="mt-3">{body[0].contents}</span>
                </header>
                <div className="gap-3 flex mt-7">
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                      navigate('/');
                    }}
                    className="py-2.5 px-7 text-[16px] bg-gray-4 border-none rounded-[8px] text-gray-5 font-bold"
                  >
                    홈으로
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                    }}
                    className="py-2.5 px-7 text-[16px] bg-orange-400 border-none rounded-[8px] text-white font-bold"
                  >
                    편지 불러오기
                  </button>
                </div>
              </div>
            );
          case 'IMAGE':
            return (
              <div className="w-full py-[1.875rem] px-[1.562rem] top-[10%]">
                <header className="flex flex-col mt-[0.375rem] justify-center text-left">
                  <h3 className="text-heading-3 whitespace-pre-wrap">
                    {title}
                  </h3>
                  <span className="mt-[0.625rem] text-caption">
                    {body[0].contents}
                  </span>
                </header>
                <div>
                  <RadioGroup className="flex flex-col mt-6 mb-5 gap-[1.125rem]">
                    <Radio
                      onClick={setSelectRadio}
                      selectRadio={selectRadio}
                      name="saveImage"
                      value="image_letter"
                      defaultChecked
                    >
                      내가 쓴 편지
                    </Radio>
                    <Radio
                      onClick={setSelectRadio}
                      selectRadio={selectRadio}
                      name="saveImage"
                      value="image_reply"
                    >
                      아이가 쓴 편지
                    </Radio>
                  </RadioGroup>
                </div>
                <div className="grid justify-items-end">
                  <button
                    type="button"
                    onClick={onClickSaveButton}
                    className="py-2 px-8 text-[0.875rem] bg-orange-400 border-none rounded-[6px] text-white font-bold"
                  >
                    저장하기
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => dispatch(modalActions.closeModal())}
                  className="absolute top-4 right-4"
                >
                  <img src={CancelImage} alt="cancel" />
                </button>
              </div>
            );
          case 'SAVECOMPLETE':
            return (
              <div className="w-full pt-9 pb-7 px-[1.125rem] ">
                <header className="flex flex-col justify-center items-center text-center">
                  <img src={SaveComplete} alt="편지지" />
                  <h3 className="text-heading-3 whitespace-pre-wrap mt-[15px]">
                    {title}
                  </h3>
                </header>
                <div className="flex mt-6 justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(modalActions.closeModal());
                    }}
                    className="py-1 px-6 text-[16px] bg-orange-400 border-none rounded-[8px] text-white font-bold"
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
