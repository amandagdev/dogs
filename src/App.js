import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
