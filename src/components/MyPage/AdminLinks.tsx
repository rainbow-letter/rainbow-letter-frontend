import React from 'react';

import Divider from 'components/Divider';
import MenuItemLink from 'components/MyPage/MenuItemLink';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function AdminLinks() {
  const { role } = useSelector((state: RootState) => state.user.user);

  if (role !== 'ROLE_ADMIN') return null;
  return (
    <>
      <div className="text-heading-3 p-2.5">관리자 페이지</div>
      <div className="flex flex-col gap-y-[22px] mb-[22px]">
        <MenuItemLink to="/admin/letters" label="편지 리스트" />
        <Divider />
      </div>
    </>
  );
}

export default AdminLinks;
