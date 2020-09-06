import React from 'react'
import './styles.css'

 const Input = ({ label, type, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name}/>
    </div>
  )
}

export default Input