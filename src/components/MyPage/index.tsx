import React, { useEffect } from 'react';
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
import LogOut from 'components/LogOut';
import { saveToSessionStorage } from 'utils/sessionStorage';

function MyPage() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  saveToSessionStorage('role', user.role);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <>
      <AdminLinks />
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
        <LogOut>
          <div className="p-2.5 text-solo-large text-alarm-red">
            {USER_ACTIONS.LOG_OUT}
          </div>
        </LogOut>
      </div>
    </>
  );
}

export default MyPage;