/* eslint-disable import/no-cycle */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './view/Home';
import Login from './view/Login';
import Join from './view/Join';
import Email from './view/Email';
import Password from './view/Password';
import Auth from './view/Auth';
import Layout from './components/Layout';
import ProtectedLayout from './components/Layout/ProtectedLayout';
import MyPage from './components/MyPage';
import PasswordReset from './components/PasswordReset';
import FAQs from './components/MyPage/FAQs';
import AccountDeactivation from './components/MyPage/AccountDeactivation';
import MyPets from './components/MyPets';
import PetRegistration from './components/MyPets/PetRegistration';
import PetEdit from './components/MyPets/PetEdit';
import WriteLetter from './view/WriteLetter';
import LetterBox from './view/LetterBox';
import Modal from './components/Modal';
import DetailLetter from './view/DetailLetter';
import ShareLetter from './view/ShareLetter';

import ScrollToTop from './hooks/useScrollTop';
import Letters from './components/admin/Letters';
import AdminLayout from './components/Layout/AdminLayout';

function Router() {
  const { token } = useSelector((state) => state.user);
  const { isOpen } = useSelector((state) => state.modal);

  const isLoggedIn = !!token;

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Join />} />
            <Route path="/auth/email" element={<Email />} />
            <Route path="/members/password/reset" element={<Password />} />
            <Route path="/oauth/success" element={<Auth />} />

            <Route element={<ProtectedLayout isLoggedIn={isLoggedIn} />}>
              {/* NOTE: 사용자 권한(로그인)이 필요한 페이지 */}
              <Route path="/my-page" element={<MyPage />} />
              <Route path="/my-page/faqs" element={<FAQs />} />
              <Route path="/my-page/password" element={<PasswordReset />} />
              <Route path="/my-page/leave" element={<AccountDeactivation />} />
              <Route path="/my-pets" element={<MyPets />} />
              <Route path="/my-pets/register" element={<PetRegistration />} />
              <Route path="/my-pets/edit" element={<PetEdit />} />
              <Route path="/write-letter" element={<WriteLetter />} />
              <Route path="/letter-box" element={<LetterBox />} />
              <Route path="/letter-box/:letterId" element={<DetailLetter />} />
            </Route>
            <Route path="/share/:shareLink" element={<ShareLetter />} />
          </Route>
          {/* NOTE: 관리자 권한이 필요한 페이지 */}
          <Route element={<AdminLayout isLoggedIn={isLoggedIn} />}>
            <Route path="/admin/letters" element={<Letters />} />
          </Route>
        </Routes>
        {isOpen && <Modal />}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Router;
