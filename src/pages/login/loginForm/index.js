import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../Components/Form/Input';
import Button from '../../../Components/Form/Button';
import useForm from '../../../Hooks/useForm';
import { useUser } from '../../../Context';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, login, error, loading } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      userLogin(username.value, password.value);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input name="username" type="text" label="Usúario" {...username} />
        <Input name="password" type="password" label="Senha" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Criar</Link>
    </section>
  );
};

export default LoginForm;
