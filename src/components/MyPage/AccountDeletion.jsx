/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  USER_ACTIONS,
  ACCOUNT_DELETION,
  ACCOUNT_DELETION_GUIDELINES,
} from './constants';
import { deleteUser } from '../../api/user';
import { removeToken } from '../../store/user';
import check from '../../assets/check.svg';
import Button from '../Button';
import AccountDeletionConfirmationModal from './AccountDeletionConfirmationModal';

function AccountDeletion() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeletion = async () => {
    try {
      await deleteUser();
      dispatch(removeToken());
      setIsDeleted(true);
    } catch (error) {
      setIsDeleted(false);
    }
  };

  const handleModalClose = () => {
    setIsDeleted(false);
    navigate('/');
  };

  return (
    <div className="h-screen flex flex-col gap-[159px] pb-5">
      <section className="p-7 bg-gray-2 rounded-2xl">
        <span className="text-solo-large">
          {ACCOUNT_DELETION.GUIDELINES_TITLE}
        </span>
        <ul className="p-2.5 list-disc text-body-small text-gray-1 space-y-[6px]">
          {ACCOUNT_DELETION_GUIDELINES.map((guideline) => (
            <li key={guideline.ID}>{guideline.CONTENT}</li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-[22px]">
        <button
          className="flex gap-2"
          type="button"
          onClick={() => {
            setIsConfirmed(!isConfirmed);
          }}
        >
          <div
            className={`w-6 h-6 rounded ${
              isConfirmed
                ? 'bg-orange-400'
                : 'bg-white border border-orange-400'
            }`}
          >
            {isConfirmed && <img src={check} alt="check" />}
          </div>
          <div>
            <span className="font-semibold text-body-medium text-gray-1">
              {ACCOUNT_DELETION.CONFIRM_MESSAGE}
            </span>
          </div>
        </button>
        <Button disabled={!isConfirmed} onClick={handleDeletion}>
          {USER_ACTIONS.LEAVE}
        </Button>
        {isDeleted && (
          <AccountDeletionConfirmationModal onClose={handleModalClose} />
        )}
      </section>
    </div>
  );
}

export default AccountDeletion;
