import React from 'react';

import saveImg from '../../assets/detailLetter_save.svg';

type Props = {
  onClick: () => void;
};

export default function DownLoadButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      id="save-button"
      className="not-save absolute -top-[3.75rem] right-6 z-50"
    >
      <img src={saveImg} alt="저장" className="fixed" />
    </button>
  );
}
