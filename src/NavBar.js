import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header className='NavBar'>
      <nav className='NavBar-nav'>
        <div className='NavBar-logo'>ReactWeatherApi</div>
        <div className='NavBar-listWrapper'>
          <ul className='NavBar-list'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/weather'>Weather</NavLink>
            </li>
            <li>
              <NavLink to='#'>About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
