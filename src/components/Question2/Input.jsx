import React from 'react';

const Input = (props) => {
  let {label,type,placeholder} = props
  return (
    <div>
      <label htmlFor="">{label}</label><br />
      <input type={type}  placeholder={placeholder}/> <br />
    </div>
  )
}

export default Input
