import React, { createContext, useContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from './services/api';

const Context = createContext();

const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLoading(true)
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const response = await fetch(url, options);
    const { token } = await response.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }
  return <Context.Provider value={{ userLogin, data }}>{children}</Context.Provider>;
};

const useUser = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useUser must be used within an UserStorage');
  }
  return context;
};

export { UserStorage, useUser, Context };
