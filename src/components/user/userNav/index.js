import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useUser } from '../../../Context'
import { useMedia } from '../../../hooks/useMedia'
import './styles.css'

import Feed from '../../../icons/feed.js'
import Photo from '../../../icons/photo.js'
import Statistic from '../../../icons/statistic.js'
import GetOut from '../../../icons/getOut.js'

const Nav = () => {
  const { userLogout } = useUser()

  const [active, setActive] = useState(false)

  const mobile = useMedia('(max-width: 40rem)')
  const { pathname } = useLocation()

  const navButton = `nav__button ${active && 'nav__button--active'}`
  const navMobile = `${mobile ? 'nav__mobile' : 'nav'} ${
    active && 'nav__mobile--active'
  }`

  useEffect(() => {
    setActive(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="menu-mobile"
          className={navButton}
          onClick={() => setActive((menu) => !menu)}
        ></button>
      )}
      <nav className={navMobile}>
        <NavLink to="/conta" end activeClassName="nav__active">
          <Feed />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName="nav__active">
          <Photo />
          {mobile && 'Adicionar Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName="nav__active">
          <Statistic />
          {mobile && 'Estatísticas'}
        </NavLink>
        <button onClick={userLogout}>
          <GetOut />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default Nav
