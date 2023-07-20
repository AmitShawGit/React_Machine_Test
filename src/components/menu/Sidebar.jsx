import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../Routes';

const Sidebar = () => {
  return (
    <div>
      <ul>
        {links.map(({ id, name, path }) => (
          <li key={id}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
