import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { State } from 'types/store';

import Login from 'view/account/Login';
import Join from 'view/account/Join';
import Email from 'view/account/Email';
import Password from 'view/account/Password';
import LandingPage from 'view/home/LandingPage';
import PWALanding from 'view/home/PWALanding';
import Home from 'view/home/Home';
import Donate from 'view/home/Donate';
import Auth from 'view/account/Auth';
import LetterBox from 'view/letter/LetterBox';
import DetailLetter from 'view/letter/DetailLetter';
import ShareLetter from 'view/letter/ShareLetter';
import WriteLetter from 'view/letter/WriteLetter';
import MyPage from 'view/account/MyPage';
import MyPets from 'view/pet/MyPets';
import SavedImage from 'view/letter/SavedImage';
import Layout from 'components/Layout';
import ProtectedLayout from 'components/Layout/ProtectedLayout';
import AdminLayout from 'components/Layout/AdminLayout';
import Modal from 'components/Modal';
import AccountDeletion from 'components/AccountDeletion';
import FAQs from 'components/FAQs';
import PasswordReset from 'components/PasswordReset';
import ScrollToTop from 'hooks/useScrollTop';
import LetterDetail from 'components/admin/Letters/LetterDetail';
import PetRegistration from './components/MyPetsTemplate/PetRegistration';
import PetEdit from './components/MyPetsTemplate/PetEdit';

import Letters from './components/admin/Letters';

function Router() {
  const { isOpen } = useSelector((state: State) => state.modal);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
            <Route element={<Donate />} path="/donate" />
            <Route element={<LandingPage />} path="/landing" />
            <Route element={<PWALanding />} path="/pwa_landing" />
            <Route element={<Login />} path="/login" />
            <Route element={<Join />} path="/sign-up" />
            <Route element={<Email />} path="/auth/email" />
            <Route element={<Password />} path="/members/password/reset" />
            <Route element={<Auth />} path="/oauth/success" />
            <Route element={<ShareLetter />} path="/share/:shareLink" />
            <Route element={<ProtectedLayout />}>
              {/* NOTE: 사용자 권한(로그인)이 필요한 페이지 */}
              <Route element={<MyPage />} path="/my-page" />
              <Route element={<FAQs />} path="/my-page/faqs" />
              <Route element={<PasswordReset />} path="/my-page/password" />
              <Route element={<AccountDeletion />} path="/my-page/leave" />
              <Route element={<MyPets />} path="/my-pets" />
              <Route element={<PetRegistration />} path="/my-pets/register" />
              <Route element={<PetEdit />} path="/my-pets/edit" />
              <Route element={<WriteLetter />} path="/write-letter" />
              <Route element={<LetterBox />} path="/letter-box" />
              <Route element={<DetailLetter />} path="/letter-box/:letterId" />
              <Route element={<SavedImage />} path="/saved-image" />
            </Route>
          </Route>
          {/* NOTE: 관리자 권한이 필요한 페이지 */}
          <Route element={<AdminLayout />}>
            <Route element={<Letters />} path="/admin/letters" />
            <Route element={<LetterDetail />} path="/admin/letters/:letterId" />
          </Route>
        </Routes>
        {isOpen && <Modal />}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Router;
