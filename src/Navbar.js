import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav style={styles.navbar}>
      {/* Logo on the left */}
      <div>
        <img src="/ora.jpg" alt="Ora Payments" style={styles.logo} />
      </div>

      {/* Hamburger icon for mobile */}
      {isMobile && (
        <div style={styles.hamburger} onClick={toggleMenu}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      )}

      {/* Nav links */}
      <ul
        style={{
          ...styles.navLinks,
          ...(isMobile ? (isOpen ? styles.navLinksMobileOpen : styles.navLinksMobileClosed) : {}),
        }}
      >
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#000',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  logo: {
    height: '100px',
    borderRadius: '12px',
  },
  link: {
    color: '#00bfff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '60px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  navLinksMobileOpen: {
    flexDirection: 'column',
    width: '100%',
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  },
  navLinksMobileClosed: {
    display: 'none',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: '#00bfff',
    margin: '4px 0',
  },
};

export default Navbar;
