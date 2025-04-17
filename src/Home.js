import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

function Home() {
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
        height: '100vh',
        fontFamily: 'Verdana, sans-serif',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          padding: '20px',
          flexWrap: 'wrap',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ maxWidth: '500px', color: '#00bfff', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px', animation: 'fadeInDown 1s ease-out' }}>
            Welcome to Ora Payments
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', animation: 'fadeInUp 1.2s ease-out' }}>
            Moving Payments Forward
          </p>
          <a
            href="/contact"
            style={{
              padding: '12px 24px',
              backgroundColor: '#00bfff',
              color: '#000',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background 0.3s',
              animation: 'fadeInUp 1.4s ease-out'
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0099cc')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#00bfff')}
          >
            Get Started
          </a>
        </div>

        <img
          src="/bar.png"
          alt="Bar"
          style={{
            width: '400px',
            maxWidth: '90%',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0,191,255,0.4)',
            animation: 'fadeIn 2s ease-in'
          }}
        />
      </div>

      {/* CSS Animations and Responsive Fixes */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          div[style*="flexDirection: 'row'"] {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
