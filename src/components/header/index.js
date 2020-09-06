import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../assets/images/dogs.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <Link to="/" className="header__logo">
          <Dogs />
        </Link>
        <Link to="/login" className="header__login">
          Login | Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
