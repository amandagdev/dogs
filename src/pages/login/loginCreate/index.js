import React from 'react'
import Input from '../../../components/form/input'
import Button from '../../../components/form/button'
import useFetch from '../../../hooks/useFetch'
import { USER_POST } from '../../../services/api'
import useForm from '../../../hooks/useForm'
import { useUser } from '../../../Context'
import Error from '../../../helper/Error'

const LoginCreate = () => {
  const { request, error, loading } = useFetch()
  const username = useForm()
  const email = useForm()
  const password = useForm()
  const { userLogin } = useUser()

  const handleCreate = async (e) => {
    e.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className="anime-left">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleCreate}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate
