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
import FAQs from './components/MyPage/FAQs';
import AccountDeactivation from './components/MyPage/AccountDeactivation';

function Router() {
  const user = useSelector((state) => state.user);
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
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/leave" element={<AccountDeactivation />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
