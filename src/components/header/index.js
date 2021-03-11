import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Dogs from '../../assets/images/dogs.svg'
import { useUser } from '../../Context'

const Header = () => {
  const { data, userLogout } = useUser()

  return (
    <header className="header">
      <nav className="header__nav container">
        <Link to="/" className="header__logo">
          <img src={Dogs} alt="logo" />
        </Link>
        {data ? (
          <Link to="/conta" className="header__login">
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className="header__login">
            Login | Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
