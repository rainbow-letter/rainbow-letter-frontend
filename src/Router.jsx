import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from './view/Home';
import Login from './view/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
