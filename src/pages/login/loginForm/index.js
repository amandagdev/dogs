import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Input from '../../../Components/Form/Input';
import Button from '../../../Components/Form/Button';
import useForm from '../../../Hooks/useForm';
import { useUser } from '../../../Context';
import Error from '../../../Components/Error';

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
    <section className="anime-left">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" type="text" label="Usúario" {...username} />
        <Input name="password" type="password" label="Senha" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className="login__forgot" to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className="form__register">
        <h2 className="form__subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
