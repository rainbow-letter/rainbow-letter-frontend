import React from 'react';

import MenuItemLink from './MenuItemLink';
import Divider from '../Divider';

function AdminLinks() {
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
