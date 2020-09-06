import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>login</h1>
      <Link to="/login/criar">Criar</Link>
      <Outlet/>
    </div>
  );
};

export default Login;
