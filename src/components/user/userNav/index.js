import React from 'react'
import { NavLink } from 'react-router-dom'

import { useUser } from '../../../Context'

import './styles.css'

import Feed from '../../../icons/feed.js'
import Photo from '../../../icons/photo.js'
import Statistic from '../../../icons/statistic.js'
import GetOut from '../../../icons/getOut.js'
import { useMedia } from '../../../hooks/useMedia'

const Nav = () => {
  const { userLogout } = useUser()

  const mobile = useMedia('(max-width: 40rem)')

  return (
    <nav className="nav">
      <NavLink to="/conta" end activeClassName="nav__active">
        <Feed />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName="nav__active">
        <Photo />
        {mobile && 'Adicionar Fotos'}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName="nav__active">
        <Statistic />
        {mobile && 'Estatísticas'}
      </NavLink>
      <button onClick={userLogout}>
        <GetOut />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default Nav
