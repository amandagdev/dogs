import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import useForm from '../../Hooks/useForm';
import { useUser } from '../../Context';

const Login = () => {
  const username = useForm();
  const password = useForm(); 
  const { userLogin } = useUser()

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      userLogin(username.value, password.value)
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
