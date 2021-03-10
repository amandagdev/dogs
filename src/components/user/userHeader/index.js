import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Nav from '../userNav'

import './styles.css'

const UserHeader = () => {
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
    <div className="user-header">
      <h1 className="title">{title}</h1>
      <Nav />
    </div>
  )
}

export default UserHeader
