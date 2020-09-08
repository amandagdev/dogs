import React, { createContext, useContext, useState, useEffect } from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from './services/api';

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
    setLoading(true);
    setLogin(true)
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setLoading(true);
          setError(null);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Token inválido');
          }
         await getUser(token);
        } catch (error) {
          setError(true);
          userLogout()
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const response = await fetch(url, options);
    const { token } = await response.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  async function userLogout() {
    setData(null);
    setLogin(false)
    setLoading(false)
    setError(null)
    window.localStorage.removeItem('token')
  }

  return (
    <Context.Provider value={{ userLogin, data, userLogout }}>{children}</Context.Provider>
  );
};

const useUser = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useUser must be used within an UserStorage');
  }
  return context;
};

export { UserStorage, useUser, Context };
