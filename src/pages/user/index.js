import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router'
import UserHeader from '../../components/user/userHeader'

const User = () => {
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location

    switch (pathname) {
      case '/conta/postar':
        setTitle('Postar')
        break
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      default:
        setTitle('Minha Conta')
    }
  }, [location])

  return (
    <div className="container">
      <UserHeader title={title} />
      <Outlet />
    </div>
  )
}

export default User
