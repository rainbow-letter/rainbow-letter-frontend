import { useLocation, useNavigate, useParams } from 'react-router-dom';

import normalizePath from 'utils/normalizers';
import chevronLeft from '../../assets/chevronLeft.svg';

type AppBarConfig = {
  [key: string]: {
    title: string;
    backTo: string | number;
  };
};

const appBarConfig: AppBarConfig = {
  '/admin/letters': {
    title: '편지 리스트 관리',
    backTo: -1,
  },
  letterId: {
    title: '편지 상세 정보',
    backTo: -1,
  },
};

function AdminAppBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const normalizedPath = normalizePath(location.pathname);
  const params = Object.keys(useParams())[0];
  const config = appBarConfig[params] || appBarConfig[normalizedPath];
  const { title, backTo } = config;

  const handleNavigate = () => {
    if (typeof backTo === 'string') {
      navigate(backTo);
    } else if (typeof config.backTo === 'number') {
      navigate(backTo);
    } else {
      console.error('Invalid backTo type');
    }
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white py-6">
      <section className="flex flex-1 justify-start">
        <button onClick={() => handleNavigate()} type="button">
          <img alt="left" src={chevronLeft} />
        </button>
      </section>
      <section className="flex-3 text-center text-solo-large">{title}</section>
      <section className="flex flex-1 justify-end" />
    </header>
  );
}

export default AdminAppBar;
