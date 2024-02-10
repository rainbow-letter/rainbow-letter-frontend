import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button';
import { MODAL_MESSAGE, Modal } from 'components/Modal/constants';
import { updatePhoneNumber } from 'api/user';
import { State } from 'types/store';
import { validatePhoneNumber } from 'utils/validators';
import Input from '../Input';
import { modalActions } from '../../store/modal-slice';
import CancelImage from '../../assets/ph_x-bold.svg';

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
                <header className="mt-[53px] text-center">
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
                      dispatch(modalActions.doNotOpenAgain());
                      dispatch(modalActions.openModal('COMPLETE'));
                    }}
                    className="underline text-caption text-gray-1 mb-6 block mx-auto"
                  >
                    다시 보지 않기
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
              <div className="w-full">
                <header className="mt-[53px] text-center">
                  <h3 className="text-heading-3">{title}</h3>
                </header>
                <ul className="mt-6 mb-7 text-center text-body-medium">
                  {body &&
                    body.map(({ id, prefix, contents }) => (
                      <li key={id} className="mb-1">
                        <span className="text-orange-400">{prefix}</span>
                        {contents}
                      </li>
                    ))}
                </ul>
                <Button
                  onClick={() => {
                    dispatch(modalActions.closeModal());
                    navigate('/letter-box');
                  }}
                  className="mb-5"
                >
                  편지함 가기
                </Button>
              </div>
            );
          default:
            return null;
        }
      })()}
    </>
  );
}
