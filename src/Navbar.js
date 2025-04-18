import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#000', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {/* Logo on the left */}
      <div>
        <img src="/ora.jpg" alt="Ora Payments" style={{ height: '120px',  borderRadius: '12px' }} />
      </div>
        
      <div style={styles.hamburger} onClick={toggleMenu}>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>

      {/* Nav links on the right */}
      <ul style={{ listStyle: 'none', display: 'flex', gap: '60px', margin: 0, padding: 0 }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: '#00bfff',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default Navbar;
