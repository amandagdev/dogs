import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import LoginPassword from './Pages/Login/LoginPassword';
import LoginReset from './Pages/Login/LoginReset';
import LoginCreate from './Pages/Login/LoginCreate';
import { useUser } from './Context';

const AppRoutes = () => {
  const { login } = useUser();

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
