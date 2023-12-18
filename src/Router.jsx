import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from './view/Home';
import Login from './view/Login';
import Join from './view/Join';
import Layout from './components/Layout';
import ProtectedLayout from './components/Layout/ProtectedLayout';
// import MyPage from './components/MyPage';

function Router() {
  // TODO: 로그인 확인 로직 작성
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Join />} />
          <Route element={<ProtectedLayout isLoggedIn={isLoggedIn} />}>
            {/* NOTE: 사용자 권한(로그인)이 필요한 페이지 */}
            {/* <Route path="/my-page" element={<MyPage />} /> */}
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
