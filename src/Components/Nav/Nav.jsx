import React, { useState } from 'react'
import './Nav.css'

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
          <a href="#" onClick={closeMenu}>Home</a>
        </li>
        <li>
          <a href="#Early-Age" onClick={closeMenu}>Early Age</a>
        </li>
        <li>
          <a href="#Career" onClick={closeMenu}>Career</a>
        </li>
        <li>
          <a href="#Presidency" onClick={closeMenu}>Presidency</a>
        </li>
        <li>
          <a href="#Legacy" onClick={closeMenu}>Legacy</a>
        </li>
        <li className="nav-cta-container" hidden>
          <button className="nav-cta" onClick={closeMenu}>Explore His Legacy</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav