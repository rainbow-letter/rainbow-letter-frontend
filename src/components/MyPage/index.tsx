import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'store';

import Divider from 'components/Divider';
import AdminLinks from 'components/MyPage/AdminLinks';
import MenuItemLink from 'components/MyPage/MenuItemLink';
import PhoneNumberSection from 'components/MyPage/PhoneNumberSection';
import {
  PAGE_TITLES,
  USER_INFO_LABELS,
  USER_ACTIONS,
} from 'components/MyPage/constants';
import { fetchUserInfo } from 'store/user-actions';
import { removeToken } from 'utils/localStorage';
import { saveToSessionStorage } from 'utils/sessionStorage';

function MyPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);

  const isAdmin = user?.role === 'ROLE_ADMIN';

  const handleLogout = () => {
    removeToken();
    navigate('/home');
  };

  useEffect(() => {
    dispatch(fetchUserInfo());
    if (isAdmin) saveToSessionStorage('admin', true);
  }, [dispatch]);

  return (
    <>
      {isAdmin && <AdminLinks />}
      <div className="text-heading-3 p-2.5">{PAGE_TITLES.MY_INFO}</div>
      <div className="flex flex-col gap-y-[22px]">
        <div>
          <div className="text-solo-large p-2.5">{USER_INFO_LABELS.EMAIL}</div>
          <div className="p-2.5 text-solo-medium text-gray-1">
            {user?.email}
          </div>
        </div>
        <PhoneNumberSection />
        <MenuItemLink
          to="/my-page/password"
          label={USER_ACTIONS.CHANGE_PASSWORD}
        />
        <Divider />
        <MenuItemLink to="faqs" label={PAGE_TITLES.FAQ} />
        <MenuItemLink to="leave" label={USER_ACTIONS.LEAVE} />
        <button
          className="flex justify-between items-center"
          type="button"
          onClick={() => handleLogout()}
        >
          <div className="p-2.5 text-solo-large text-alarm-red">
            {USER_ACTIONS.LOG_OUT}
          </div>
        </button>
      </div>
    </>
  );
}

export default MyPage;
