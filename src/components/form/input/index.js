import React from 'react'
import './styles.css'

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input__wrapper">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      />
      <p className="input__error">Error</p>
    </div>
  )
}

export default Input
