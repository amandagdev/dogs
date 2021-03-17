import React from 'react'

import Nav from '../userNav'

import './styles.css'

const UserHeader = ({ title }) => {
  return (
    <div className="user-header">
      <h1 data-testid="titulo" className="title">
        {title}
      </h1>
      <Nav />
    </div>
  )
}

export default UserHeader
