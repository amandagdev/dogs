import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import LoginPassword from './pages/login/loginPassword';
import LoginReset from './pages/login/loginReset';
import LoginCreate from './pages/login/loginCreate';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}>
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPassword />} />
          <Route path="resetar" element={<LoginReset />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
