import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className={`header ${theme}`}>
      <div className="logo">My Portfolio</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
      </button>
    </header>
  );
}
