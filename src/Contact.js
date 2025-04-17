import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

function Contact() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 500,
          minWidth: 500,
          scale: 1.0,
          color: 0x00bfff,
          backgroundColor: 0x000000
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        minHeight: '100vh',
        fontFamily: 'Verdana, sans-serif',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          width: '100%',
          padding: '40px 20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h1
          style={{
            fontSize: '2.8rem',
            color: '#00bfff',
            textAlign: 'center',
            marginBottom: '40px',
            animation: 'fadeInDown 1s ease-out'
          }}
        >
          Contact Us
        </h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            width: '100%',
            maxWidth: '1100px'
          }}
        >
          {/* === Contact Cards === */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={cardStyle('/office.jpg')}>
              <h2 style={cardTitle}>office</h2>
              <p style={cardText}>For more information, Please mail to info@orapayments.com </p>
            </div>

            <div style={cardStyle('/hours.jpg')}>
              <h2 style={cardTitle}>Working Hours</h2>
              <p style={cardText}>Monday to Friday : 9 am – 6 pm</p>
            </div>
          </div>

          {/* === Contact Form === */}
          <form
            style={{
              backgroundColor: '#111',
              padding: '30px',
              borderRadius: '16px',
              boxShadow: '0 0 20px #00bfff',
              color: '#fff',
              minWidth: '300px',
              maxWidth: '500px',
              flex: '1 1 400px',
              animation: 'fadeInUp 1.5s ease-out'
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted!');
            }}
          >
            <label style={labelStyle}>Name</label>
            <input style={inputStyle} type="text" required />

            <label style={labelStyle}>Email</label>
            <input style={inputStyle} type="email" required />

            <label style={labelStyle}>Mobile</label>
            <input style={inputStyle} type="text" required />


            <label style={labelStyle}>Message For Us</label>
            <textarea style={{ ...inputStyle, height: '100px' }} required />

            <button
              type="submit"
              style={{
                marginTop: '20px',
                padding: '12px 20px',
                backgroundColor: '#00bfff',
                color: '#000',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* CSS Animations & Responsive */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          form {
            width: 90% !important;
          }
        }
      `}</style>
    </div>
  );
}

// === Styles ===
const cardStyle = (bg) => ({
  width: '320px',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 0 20px #00bfff',
  backgroundColor: '#111',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  animation: 'fadeInDown 1.5s ease-out',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'left'
});

const cardTitle = {
  backgroundColor: 'rgba(0,0,0,0.6)',
  padding: '16px',
  margin: 0,
  fontSize: '1.5rem'
};

const cardText = {
  backgroundColor: '#f4f4f4',
  color: '#111',
  padding: '16px',
  margin: 0,
  fontSize: '1rem',
  fontWeight: 'bold'
};

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  marginTop: '15px',
  fontWeight: 'bold',
  color: '#00bfff'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #00bfff',
  backgroundColor: '#222',
  color: '#fff'
};

export default Contact;
