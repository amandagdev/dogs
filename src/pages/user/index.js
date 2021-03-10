import React from 'react'
import { Outlet } from 'react-router'
import UserHeader from '../../components/user/userHeader'

const User = () => {
  return (
    <div className="container">
      <UserHeader />
      <Outlet />
    </div>
  )
}

export default User
