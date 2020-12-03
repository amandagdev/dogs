import React from 'react';
import './styles/main.css';
import './styles/colours.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AppRoutes from './routes';
import { UserStorage } from './Context';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <AppRoutes />
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
