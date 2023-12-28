/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import MODAL_MESSAGE from './constants';

export default function ModalContents() {
  const { type } = useSelector((state) => state.modal);
  const { title, body } = MODAL_MESSAGE.find((item) => item.type === type);

  return (
    <>
      {(() => {
        switch (type) {
          case 'TOPIC':
            return (
              <div>
                <header className="mt-7 text-center">
                  <h3 className="text-heading-3">{title}</h3>
                </header>
                <ul className="text-body-small my-6">
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
          default:
            return null;
        }
      })()}
    </>
  );
}
