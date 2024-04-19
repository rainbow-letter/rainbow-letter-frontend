import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button';
import Input from 'components/Input';
import { MODAL_MESSAGE, Modal } from 'components/Modal/constants';
import { updatePhoneNumber } from 'api/user';
import { State } from 'types/store';
import { validatePhoneNumber } from 'utils/validators';
import { setExpireModal } from 'utils/localStorage';
import { modalActions } from 'store/modal/modal-slice';
import CancelImage from '../../assets/ph_x-bold.svg';
import WritingPad from '../../assets/writing_pad.svg';
import AdPitAPat from '../../assets/ad_pitapat.svg';

export default function ModalContents() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type } = useSelector((state: State) => state.modal);
  const { title, body } = MODAL_MESSAGE.find(
    (item) => item.type === type
  ) as Modal;

  const registerPhoneNumber = async () => {
    try {
      if (!validatePhoneNumber(value)) {
        throw new Error('유효하지 않은 휴대폰 번호 형식입니다.');
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

  const handleOpenNewTab = () => {
    window.open(
      'https://forms.gle/zdHQD2gq3EUZtHJZ9',
      '_blank',
      'noopener, noreferrer'
    );
    dispatch(modalActions.closeModal());
    navigate('/letter-box');
  };

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
                  className="py-5 w-full my-4"
                />
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
                <header className="flex flex-col justify-center items-center py-6 text-center border rounded-[0.938rem]">
                  <img
                    src={WritingPad}
                    alt="편지지"
                    className="w-[1.625rem] h-[1.125rem]"
                  />
                  <h3 className="text-heading-3 mt-2">{title}</h3>
                  <span className="mt-2">{body[0].contents}</span>
                </header>
                <button
                  id="add_letter_popup"
                  type="button"
                  onClick={handleOpenNewTab}
                  className="mt-4"
                >
                  <img src={AdPitAPat} alt="핏어팻광고" />
                </button>
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
          default:
            return null;
        }
      })()}
    </>
  );
}
