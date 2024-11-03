import AdminConfig from 'components/admin/Config';
import Divider from 'components/Divider';
import MenuItemLink from 'components/MyPageTemplate/MenuItemLink';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function AdminLinks() {
  const { role } = useSelector((state: RootState) => state.user.user);

  if (role !== 'ROLE_ADMIN') return null;
  return (
    <>
      <div className="p-2.5 text-heading-3">관리자 페이지</div>
      <div className="mb-[1.375rem] flex flex-col gap-y-[1.375rem]">
        <MenuItemLink to="/admin/letters" label="편지 리스트" />
        <AdminConfig />
        <Divider />
      </div>
    </>
  );
}

export default AdminLinks;
