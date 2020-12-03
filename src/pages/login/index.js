import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPassword from './loginPassword';
import LoginReset from './loginReset';
import LoginCreate from './loginCreate';
import LoginForm from './loginForm';
import { useUser } from '../../Context';

const Login = () => {
  const { login } = useUser();

  if (login === true) return <Navigate to="/conta" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPassword />} />
        <Route path="resetar" element={<LoginReset />} />
      </Routes>
    </>
  );
};

export default Login;
