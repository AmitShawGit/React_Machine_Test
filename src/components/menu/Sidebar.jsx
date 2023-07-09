import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../Routes';

const Sidebar = () => {
  return (
    <div>
      <ul>
        {links.map(({index,name},path)=>{
            return(<>
           <li key={index}> <NavLink  to={path}>{name}</NavLink></li>
            </>)
        })}
      </ul>
    </div>
  )
}

export default Sidebar;
