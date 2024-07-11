import { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'store';

import { updatePhoneNumber, deletePhoneNumber } from 'store/user/user-actions';
import {
  USER_INFO_LABELS,
  USER_INFO_MESSAGES,
  USER_ACTIONS,
} from 'components/MyPageTemplate/constants';
import { validatePhoneNumber } from 'utils/validators';

function PhoneNumberSection() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  const phoneValue = user?.user.phoneNumber || USER_INFO_LABELS.NO_PHONE;

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPhoneNumber(e.target.value);
    setIsValidPhone(validatePhoneNumber(e.target.value));
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
        <div className="flex items-center justify-between gap-x-2.5 text-solo-medium text-gray-1">
          {isEditMode ? (
            <input
              className={`grow rounded-2xl bg-gray-2 p-4 ${
                isValidPhone ? 'border-none' : 'border border-alarm-red'
              }`}
              maxLength={11}
              onChange={handlePhoneNumberChange}
              pattern="\d*"
              placeholder={USER_INFO_MESSAGES.ENTER_DIGITS_ONLY}
              type="tel"
              value={newPhoneNumber}
            />
          ) : (
            <div className="grow p-2.5 text-caption">
              {newPhoneNumber || phoneValue}
            </div>
          )}
          <button
            className={`rounded px-2.5 py-[0.562rem] text-xs font-semibold leading-3 ${
              isValidPhone
                ? 'bg-orange-400 text-white'
                : 'bg-gray-1 text-gray-1'
            }`}
            disabled={!isValidPhone}
            onClick={
              isEditMode ? handleUpdatePhoneNumber : togglePhoneNumberEditMode
            }
            type="button"
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
