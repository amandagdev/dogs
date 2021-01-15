import React from 'react'
import './styles.css'
import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '../../Context'

const Login = () => {
  const { login } = useUser()

  if (login === true) return <Navigate to="/conta" />
  return (
    <>
      <section className="login">
        <div className="login__routes">
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default Login
