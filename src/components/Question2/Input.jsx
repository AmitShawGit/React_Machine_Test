import React from 'react';

const Input = (props) => {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <input type={props.type} name="" id="" placeholder={props.placeholder}/>
    </div>
  )
}

export default Input
