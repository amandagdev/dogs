import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Input from '../../components/form/input'
import Button from '../../components/form/button'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    e.praventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
      <Input name="username" type="text" label="Usúario" />
      <Input name="password" type="email" label="Senha" />
      <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Criar</Link>
      <Outlet/>
    </section>
  );
};

export default Login;
