import React from 'react';

import Button from 'components/Button';
import CancelImage from '../../assets/ph_x-bold.svg';

function AccountDeletionConfirmationModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
      <div className="w-[354px] flex flex-col p-2.5 bg-white rounded-2xl">
        <div className="flex justify-end mb-5">
          <button type="button">
            <img src={CancelImage} alt="X" />
          </button>
        </div>
        <span className="text-heading-3 text-center block">
          탈퇴가 완료됐어요
        </span>
        <Button className="mt-9" type="button">
          홈으로 가기
        </Button>
      </div>
    </div>
  );
}

export default AccountDeletionConfirmationModal;
