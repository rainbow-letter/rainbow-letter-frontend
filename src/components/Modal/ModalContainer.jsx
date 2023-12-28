import React from 'react';
import { useDispatch } from 'react-redux';

import CancelImage from '../../assets/ph_x-bold.svg';
import { closeModal } from '../../store/modal';

export default function ModalContainer({ children }) {
  const dispatch = useDispatch();
  return (
    <article className="bg-white rounded-[15px] relative px-[17px] top-1/3 flex justify-center">
      <button
        type="button"
        onClick={() => dispatch(closeModal())}
        className="absolute top-4 right-4"
      >
        <img src={CancelImage} alt="cancel" />
      </button>
      {children}
    </article>
  );
}
