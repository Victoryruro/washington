import React, { useState } from 'react'

import './Nav.css'
import { Link } from 'react-router';
import EarlyLife from '../EarlyLife/EarlyLife';

const Nav = () => {
  const [open, setOpen] = useState(false)


  const toggleMenu = () => setOpen((prev) => !prev)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#">Washington</a>
      </div>
      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/EarlyLife" onClick={closeMenu}>Early Life</Link>
        </li>
        <li>
          <Link to='/Career'  onClick={closeMenu}>Career</Link>
        </li>
        <li>
          <Link  onClick={closeMenu}>Presidency</Link>
        </li>
        <li>
          <Link  onClick={closeMenu}>Legacy</Link>
        </li>
        <li className="nav-cta-container" hidden>
          <button className="nav-cta" onClick={closeMenu}>Explore His Legacy</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav