import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
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
