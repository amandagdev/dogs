import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Input from '../../components/form/input';
import Button from '../../components/form/button';
import useForm from '../../hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../services/api';

const Login = () => {
  const username = useForm();
  const password = useForm();
  
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if(token){
      getUser(token)
    }
  }, [])

  async function getUser(token) {
  const { url, options } = USER_GET(token)
   const response = await fetch(url, options)
   const json = await response.json()
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input name="username" type="text" label="Usúario" {...username} />
        <Input name="password" type="password" label="Senha" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Criar</Link>
      <Outlet />
    </section>
  );
};

export default Login;
