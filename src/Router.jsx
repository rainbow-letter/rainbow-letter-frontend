/* eslint-disable */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import React from 'react';
import Home from './view/Home';
import Login from './view/Login';
import Join from './view/Join';
import Email from './view/Email';
import Password from './view/Password';
import Auth from './components/Login/Auth';
import Layout from './components/Layout';
import ProtectedLayout from './components/Layout/ProtectedLayout';
import MyPage from './components/MyPage';
import PasswordChange from './components/PasswordChange';
import FAQs from './components/MyPage/FAQs';
import AccountDeactivation from './components/MyPage/AccountDeactivation';
import MyPets from './components/MyPets';
import PetRegistration from './components/MyPets/PetRegistration';
import PetEdit from './components/MyPets/PetEdit';
import WriteLetter from './view/WriteLetter';
import LetterBox from './view/LetterBox';
import Modal from './components/Modal';

function Router() {
  const user = useSelector((state) => state.user);
  const { isOpen } = useSelector((state) => state.modal);
  const isLoggedIn = !!user.token;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
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
            <Route path="/my-page/password" element={<PasswordChange />} />
            <Route path="/my-page/leave" element={<AccountDeactivation />} />
            <Route path="/my-pets" element={<MyPets />} />
            <Route path="/my-pets/register" element={<PetRegistration />} />
            <Route path="/my-pets/edit" element={<PetEdit />} />
            <Route path="/letter/write" element={<WriteLetter />} />
            <Route path="/letter" element={<LetterBox />} />
          </Route>
        </Routes>
      </Layout>
      {isOpen && <Modal />}
    </BrowserRouter>
  );
}

export default Router;
