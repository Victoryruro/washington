import React from 'react'
import './Footer.css'

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
                        <a href="#">Home</a>
                        <a href="#biography">Early Age</a>
                        <a href="#timeline">Career</a>
                        <a href="#quotes">Presidency</a>
                        <a href="#legacy">Legacy</a>
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