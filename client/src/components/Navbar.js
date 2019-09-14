import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

function Navbar() {

  const [ darkMode, setDarkMode ] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <nav className="navbar">
      <h2>Women's World Cup June-July 2019</h2>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
}

export default Navbar;
