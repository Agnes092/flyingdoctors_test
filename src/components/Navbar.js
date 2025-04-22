import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Flying Doctors</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/contact">연락처</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 