//Header.jsx
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src="./logo.jpg" alt="logo" width='20'  height='20'/>
      <nav className="nav">
        <a href="#post">Post</a>
        <a href="#login">Login</a>
      </nav>
    </div>
  );
}

export default Header;
