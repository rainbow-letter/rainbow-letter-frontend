import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updatePhoneNumber, deletePhoneNumber } from '../../store/user-actions';
import {
  USER_INFO_LABELS,
  USER_INFO_MESSAGES,
  USER_ACTIONS,
} from './constants';
import { validatePhoneNumber } from '../../utils/validators';

function PhoneNumberSection() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user.user);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  const phoneValue = user?.phoneNumber || USER_INFO_LABELS.NO_PHONE;

  const handlePhoneNumberChange = ({ target }) => {
    setNewPhoneNumber(target.value);
    setIsValidPhone(validatePhoneNumber(target.value));
  };

  const handleUpdatePhoneNumber = () => {
    setIsEditMode(false);
    return newPhoneNumber
      ? dispatch(updatePhoneNumber(newPhoneNumber))
      : dispatch(deletePhoneNumber());
  };

  const togglePhoneNumberEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div>
      <div className="p-2.5 text-solo-large">{USER_INFO_LABELS.PHONE}</div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-x-2.5 items-center text-solo-medium text-gray-1">
          {isEditMode ? (
            <input
              className={`grow bg-gray-2 p-4 rounded-2xl outline-none ${
                isValidPhone ? 'border-none' : 'border border-alarm-red'
              }`}
              type="tel"
              pattern="\d*"
              maxLength="11"
              value={newPhoneNumber}
              placeholder={USER_INFO_MESSAGES.ENTER_DIGITS_ONLY}
              onChange={handlePhoneNumberChange}
            />
          ) : (
            <div className="grow p-2.5 text-caption">
              {newPhoneNumber || phoneValue}
            </div>
          )}
          <button
            className={`px-2.5 py-[9px] text-xs font-semibold leading-3 rounded ${
              isValidPhone
                ? 'bg-orange-400 text-white'
                : 'bg-gray-1 text-gray-1'
            }`}
            type="button"
            disabled={!isValidPhone}
            onClick={
              isEditMode ? handleUpdatePhoneNumber : togglePhoneNumberEditMode
            }
          >
            {isEditMode ? USER_ACTIONS.FINISH : USER_ACTIONS.EDIT}
          </button>
        </div>
        <div>
          {!isValidPhone && (
            <p className="px-2.5 text-caption text-alarm-red">
              {USER_INFO_MESSAGES.INVALID_PHONE}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberSection;
