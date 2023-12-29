/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';
import Input from '../Input';
import { closeModal } from '../../store/modal';

import MODAL_MESSAGE from './constants';

export default function ModalContents() {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.modal);
  const { title, body } = MODAL_MESSAGE.find((item) => item.type === type);

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
                  placeholder={'예) 01012341234'}
                  className="py-5 w-full my-4"
                />
                <Button value={'등록하기'} className="mb-5" />
                <div className="w-full">
                  <button
                    type="button"
                    // TODO: 일정 기간 안보이도록 하게 구현.
                    onClick={() => dispatch(closeModal())}
                    className="underline text-caption text-gray-1 mb-6 block mx-auto"
                  >
                    다시 보지 않기
                  </button>
                </div>
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
                  value={'편지함 가기'}
                  // TODO: 편지함 페이지 생기면 구현
                  onClick={() => alert('편지함으로 이동')}
                  className="mb-5"
                />
              </div>
            );
          default:
            return null;
        }
      })()}
    </>
  );
}
