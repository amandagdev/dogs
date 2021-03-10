import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from './pages/user'
import Feed from './pages/feed'
import Home from './pages/home'
import Login from './pages/login'
import LoginCreate from './pages/login/loginCreate'
import LoginForm from './pages/login/loginForm'
import LoginPassword from './pages/login/loginPassword'
import LoginReset from './pages/login/loginReset'
import ProtectedRoute from './helper/protectedRoute'
import UserPhoto from './pages/user/userPhoto'
import UserStats from './pages/user/userStats'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPassword />} />
          <Route path="resetar" element={<LoginReset />} />
        </Route>
        <ProtectedRoute path="conta" element={<User />}>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/postar" element={<UserPhoto />}></Route>
          <Route path="/estatisticas" element={<UserStats />}></Route>
        </ProtectedRoute>
      </Routes>
    </div>
  )
}

export default AppRoutes
