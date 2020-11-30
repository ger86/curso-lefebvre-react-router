import React from 'react';
import {NavLink} from 'react-router-dom';
import {HOME, ABOUT_ME, CONTACT} from 'config/router/paths';
import useMode from 'hooks/useMode';

function Nav() {
  const {mode, toggleMode} = useMode();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={HOME} activeClassName="nav-active" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to={ABOUT_ME} activeClassName="nav-active">About me</NavLink>
        </li>
        <li>
          <NavLink to={CONTACT} activeClassName="nav-active">Contact</NavLink>
        </li>
      </ul>
      <button onClick={toggleMode}>{mode}</button>
    </nav>
  );
}

export default Nav;
