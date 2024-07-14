import React from 'react';
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
import LetterBoxRenew from 'view/letter/LetterBoxRenew';
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
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/pwa_landing" element={<PWALanding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Join />} />
            <Route path="/auth/email" element={<Email />} />
            <Route path="/members/password/reset" element={<Password />} />
            <Route path="/oauth/success" element={<Auth />} />
            <Route path="/share/:shareLink" element={<ShareLetter />} />
            <Route element={<ProtectedLayout />}>
              {/* NOTE: 사용자 권한(로그인)이 필요한 페이지 */}
              <Route path="/my-page" element={<MyPage />} />
              <Route path="/my-page/faqs" element={<FAQs />} />
              <Route path="/my-page/password" element={<PasswordReset />} />
              <Route path="/my-page/leave" element={<AccountDeletion />} />
              <Route path="/my-pets" element={<MyPets />} />
              <Route path="/my-pets/register" element={<PetRegistration />} />
              <Route path="/my-pets/edit" element={<PetEdit />} />
              <Route path="/write-letter" element={<WriteLetter />} />
              <Route path="/letter-box" element={<LetterBox />} />
              <Route path="/letter-box-renew" element={<LetterBoxRenew />} />
              <Route path="/letter-box/:letterId" element={<DetailLetter />} />
              <Route path="/saved-image" element={<SavedImage />} />
            </Route>
          </Route>
          {/* NOTE: 관리자 권한이 필요한 페이지 */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/letters" element={<Letters />} />
            <Route path="/admin/letters/:letterId" element={<LetterDetail />} />
          </Route>
        </Routes>
        {isOpen && <Modal />}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Router;
