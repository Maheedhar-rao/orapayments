import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import content from './content.json';

function Services() {
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
          {content.services.title}
        </h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px'
          }}
        >
          {content.services.items.map((service, index) => (
            <div
              key={index}
              style={{
                width: '280px',
                height: '160px',
                borderRadius: '12px',
                backgroundColor: '#111',
                color: '#00bfff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textAlign: 'center',
                padding: '20px',
                boxShadow: '0 0 15px #00bfff',
                animation: 'fadeInUp 1.2s ease-out'
              }}
            >
              {service}
            </div>
          ))}
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
          div[style*="width: '280px'"] {
            width: 90% !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Services;
