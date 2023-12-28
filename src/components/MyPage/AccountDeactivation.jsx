import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  USER_ACTIONS,
  ACCOUNT_DEACTIVATION,
  ACCOUNT_DEACTIVATION_GUIDELINES,
} from './constants';
// eslint-disable-next-line import/no-cycle
import { deactivateUser } from '../../api/user';
import { removeToken } from '../../store/user';
import check from '../../assets/check.svg';
import Button from '../Button';

function AccountDeactivation() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeactivation = async () => {
    try {
      await deactivateUser();
      dispatch(removeToken());
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-[159px] pb-5">
      <section className="p-7 bg-gray-2 rounded-2xl">
        <span className="text-solo-large">
          {ACCOUNT_DEACTIVATION.GUIDELINES_TITLE}
        </span>
        <ul className="p-2.5 list-disc text-body-small text-gray-1 space-y-[6px]">
          {ACCOUNT_DEACTIVATION_GUIDELINES.map((guideline) => (
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
              {ACCOUNT_DEACTIVATION.CONFIRM_MESSAGE}
            </span>
          </div>
        </button>
        <Button
          disabled={!isConfirmed}
          value={USER_ACTIONS.LEAVE}
          onClick={handleDeactivation}
        />
      </section>
    </div>
  );
}

export default AccountDeactivation;
