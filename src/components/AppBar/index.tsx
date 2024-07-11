import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import appBarConfig from 'components/AppBar/constants';
import DonateAppBar from 'components/Donate/AppBar';
import normalizePath from 'utils/normalizers';
import chevronLeft from '../../assets/chevronLeft.svg';
import autoSaving from '../../assets/autoSaving.svg';
import autoSavingSuccess from '../../assets/autoSave_success.svg';
import autoSavingFail from '../../assets/autoSave_fail.svg';

function AppBar() {
  const location = useLocation();
  const normalizedPath = normalizePath(location.pathname);
  const params = Object.keys(useParams())[0];
  const config = appBarConfig[params] || appBarConfig[normalizedPath];

  const isSaving = useSelector((state: RootState) => state.letter.isSaving);
  const isSuccess = useSelector((state: RootState) => state.letter.isSuccess);

  if (!config) {
    return null;
  }

  const navigate = useNavigate();
  const { title } = config;

  const handleBack = () => {
    navigate(-1);
  };

  const isShowSavingIcon = normalizedPath === '/write-letter';
  const isShowDonateAppBar =
    normalizedPath === '/write-letter' || normalizedPath === '/letter-box';

  return (
    <section className="sticky top-0 z-10 flex flex-col">
      {isShowDonateAppBar && <DonateAppBar />}
      <header className="flex items-center justify-between bg-white py-6">
        <section className="flex flex-1 justify-start">
          <button onClick={handleBack} type="button">
            <img alt="left" src={chevronLeft} />
          </button>
        </section>
        <section className="flex-3 text-center text-solo-large">
          {title}
        </section>
        {isShowSavingIcon && (
          <article className="absolute right-2.5 z-10">
            {isSaving ? (
              <img alt="자동 저장 중" src={autoSaving} />
            ) : (
              <img
                alt="자동 저장 결과"
                src={isSuccess ? autoSavingSuccess : autoSavingFail}
              />
            )}
          </article>
        )}
        <section className="flex flex-1 justify-end" />
      </header>
    </section>
  );
}

export default AppBar;
