import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e1b1c', color: 'white', padding: '40px 20px', fontFamily: 'Verdana, sans-serif' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '30px' }}>
        {/* Logo + Partner */}
        <div style={{ flex: '1 1 200px' }}>
          <img src="/ora.jpg" alt="Ora Payments" style={{ height: '60px', borderRadius: '8px', marginBottom: '10px' }} />
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>📍 In Partnership with PayProTec</p>
        </div>

        {/* Email Subscription */}
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <input
              type="email"
              placeholder="Enter your Email Address"
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '6px',
                border: 'none'
              }}
            />
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              SUBSCRIBE
            </button>
          </div>
          <p><strong>E-MAIL US</strong><br /> support@orapayments.com</p>
          <p><strong>CALL US NOW</strong><br /> (800) 817-9295</p>
        </div>

        {/* Footer Links */}
        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <a href="/" style={linkStyle}>HOME</a>
          <a href="/services" style={linkStyle}>OUR SERVICES</a>
          <a href="/about" style={linkStyle}>ABOUT US</a>
          <a href="/contact" style={linkStyle}>CONTACT</a>
        </div>
      </div>

      <hr style={{ borderColor: '#ffffff33', margin: '30px 0' }} />

      <div style={{ textAlign: 'center', fontSize: '0.85rem' }}>
        <div style={{ marginBottom: '10px' }}>
          <a href="#" style={iconStyle}><i className="fa fa-facebook" /></a>
          <a href="#" style={iconStyle}><i className="fa fa-twitter" /></a>
          <a href="#" style={iconStyle}><i className="fa fa-linkedin" /></a>
          <a href="#" style={iconStyle}><i className="fa fa-instagram" /></a>
        </div>
        <p>© 2025 ORA PAYMENTS LLC. ALL RIGHTS RESERVED</p>
        <p>ORA PAYMENTS IS A PROFESSIONAL CONSULTING COMPANY FOR SMALL BUSINESSES</p>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold'
};

const iconStyle = {
  color: 'white',
  margin: '0 10px',
  fontSize: '18px',
  textDecoration: 'none'
};

export default Footer;
