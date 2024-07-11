import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import {
  USER_ACTIONS,
  ACCOUNT_DELETION,
  ACCOUNT_DELETION_GUIDELINES,
} from 'components/AccountDeletion/constants';
import { deleteUser } from 'api/user';
import { removeToken } from 'utils/localStorage';
import { clearSessionStorage } from 'utils/sessionStorage';
import check from '../../assets/check.svg';

function AccountDeletion() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleDeletion = async () => {
    try {
      await deleteUser();
      alert('탈퇴가 완료됐어요');
      removeToken();
      clearSessionStorage();
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="flex h-screen flex-col gap-40 pb-5">
      <section className="rounded-2xl bg-gray-2 p-7">
        <span className="text-solo-large">
          {ACCOUNT_DELETION.GUIDELINES_TITLE}
        </span>
        <ul className="list-disc space-y-1.5 p-2.5 text-body-small text-gray-1">
          {ACCOUNT_DELETION_GUIDELINES.map((guideline) => (
            <li key={guideline.ID}>{guideline.CONTENT}</li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-[1.375rem]">
        <button
          className="flex gap-2"
          onClick={() => {
            setIsConfirmed(!isConfirmed);
          }}
          type="button"
        >
          <div
            className={`size-6 rounded ${
              isConfirmed
                ? 'bg-orange-400'
                : 'border border-orange-400 bg-white'
            }`}
          >
            {isConfirmed && <img alt="check" src={check} />}
          </div>
          <div>
            <span className="text-body-medium font-semibold text-gray-1">
              {ACCOUNT_DELETION.CONFIRM_MESSAGE}
            </span>
          </div>
        </button>
        <Button disabled={!isConfirmed} onClick={handleDeletion}>
          {USER_ACTIONS.LEAVE}
        </Button>
      </section>
    </div>
  );
}

export default AccountDeletion;
