import React, { useState, useEffect } from 'react';

import {
  PAGE_TITLES,
  USER_INFO_LABELS,
  USER_INFO_MESSAGES,
  USER_ACTIONS,
  FAQS,
} from './constants';
import { validatePhoneNumber } from '../../utils/validators';
import chevron from '../../assets/chevron.svg';

function MyPage() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    phone: '',
  });
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [editedPhone, setEditedPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isFAQVisible, setIsFAQVisible] = useState(false);
  const phoneConstant = userInfo.phone || USER_INFO_LABELS.NO_PHONE;

  const fetchUserInfo = async () => {
    // try {
    // TODO: 서버 요청 로직 구현 (GET)
    //   setUserInfo(data);
    // } catch (error) {
    //   console.error('Error fetching user info:', error);
    // }
  };

  const toggleEditPhone = () => {
    setIsEditingPhone(!isEditingPhone);
    setEditedPhone(userInfo.phone);
  };

  const handlePhoneChange = ({ target }) => {
    setEditedPhone(target.value);
    setIsValidPhone(validatePhoneNumber(target.value));
  };

  const savePhone = async () => {
    if (!isValidPhone) return;
    if (editedPhone === userInfo.phone) {
      setIsEditingPhone(false);
      return;
    }

    try {
      // TODO: 서버 요청 로직 구현 (POST)
      setUserInfo({ ...userInfo, phone: editedPhone });
      setIsEditingPhone(false);
    } catch (error) {
      // 서버 요청 실패 시
    }
  };

  const toggleFAQVisibility = () => {
    setIsFAQVisible(!isFAQVisible);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="px-6 pt-10">
      <section>
        <div className="text-heading-3 mb-8">{PAGE_TITLES.MY_INFO}</div>
        <div className="flex flex-col gap-6 mb-14">
          <div>
            <div className="text-solo-large">{USER_INFO_LABELS.EMAIL}</div>
            <div className="px-6 py-5 text-solo-medium text-gray-1 border-b border-b-gray-1">
              {userInfo.email}
            </div>
          </div>
          <div>
            <div className="text-solo-large">{USER_INFO_LABELS.PHONE}</div>
            <div className="flex flex-col gap-[10px] px-6 py-5 border-b border-b-gray-1">
              <div className="h-4 flex justify-between text-solo-medium text-gray-1">
                {isEditingPhone ? (
                  <input
                    className="h-4 grow text-solo-medium placeholder:text-gray-2 outline-none"
                    type="tel"
                    pattern="\d*"
                    maxLength="11"
                    value={editedPhone}
                    placeholder={USER_INFO_MESSAGES.ENTER_DIGITS_ONLY}
                    onChange={handlePhoneChange}
                  />
                ) : (
                  <div className="h-4 grow text-solo-medium">
                    {phoneConstant}
                  </div>
                )}
                <button
                  className="text-solo-small text-orange-400 underline"
                  type="button"
                  onClick={isEditingPhone ? savePhone : toggleEditPhone}
                >
                  {isEditingPhone ? USER_ACTIONS.FINISH : USER_ACTIONS.EDIT}
                </button>
              </div>
              <div>
                {!isValidPhone && (
                  <p className="text-alarm-red text-caption">
                    {USER_INFO_MESSAGES.INVALID_PHONE}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between pb-5 pr-6 border-b border-b-gray-1">
            <div className="text-solo-large">
              {USER_INFO_LABELS.CHANGE_PASSWORD}
            </div>
            <button
              className="text-solo-small text-orange-400 underline"
              type="button"
              onClick={() => {
                // TODO: 비밀번호 변경 페이지로 이동
              }}
            >
              {USER_ACTIONS.EDIT}
            </button>
          </div>
        </div>
      </section>
      <section className="bg-orange-50 rounded-[20px]">
        <button
          className="py-5 w-full h-full flex justify-between items-center px-5 text-solo-large text-gray-1"
          type="button"
          onClick={toggleFAQVisibility}
        >
          <div>{PAGE_TITLES.FAQ}</div>
          <div>
            <img src={chevron} alt="chevron" />
          </div>
        </button>
        {isFAQVisible && (
          <div className="flex flex-col gap-6 px-5 py-11 border-t border-gary-1">
            {FAQS.map((FAQ) => (
              <div className="border-b border-gary-1" key={FAQ.ID}>
                <div className="mb-6 text-heading-2 text-orange-400">
                  {FAQ.ID < 10 ? `0${FAQ.ID}` : FAQ.ID}
                </div>
                <div className="mb-3 text-solo-large">{FAQ.QUESTION}</div>
                <div
                  className="pb-6 text-body-small text-gray-1"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {FAQ.ANSWER}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default MyPage;
