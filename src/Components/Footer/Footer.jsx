import React from 'react'
import './Footer.css'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
        <footer >
            <div className="footer-container">
                <div className="footer-content">
                
                    <div className="footer-left">
                        <h3>George Washington</h3>
                        <p>Father of His Country • 1732 — 1799</p>
                    </div>

                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/EarlyLife">Early Life</Link>
                        <Link to="./Career">Career</Link>
                        <Link to="">Presidency</Link>
                        <Link to="">Legacy</Link>
                    </div>

                    <div className="footer-right">
                        <p>Designed with respect for America's Founding Father</p>
                        <p className="copyright">
                        © 2026 VicRuro • Educational Project
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    </>
  )
}

export default Footer