import React from 'react'
import Input from './Input'
const MainForm = () => {
  let fields = [
    {
      id: 1,
      label: "Name",
      type: "text",
      placeholder: "Type your name",
    },

    { id: 2, label: "Mobile No", type: "number", placeholder: "Type your number" },
    { id: 3, label: "Password", type: "password", placeholder: "Type your password" },
  ]
  return (
    <div>
      {fields.map((elem, id) => { return <Input key={id} label={elem.label} type={elem.type} placeholder={elem.placeholder}  /> })}

    </div>
  )
}

export default MainForm
