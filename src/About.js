import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

function About() {
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
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          padding: '40px 20px',
          flexWrap: 'wrap',
          boxSizing: 'border-box'
        }}
      >
        {/* Text Section */}
        <div style={{ maxWidth: '600px', color: '#00bfff', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '10px', animation: 'fadeInDown 1s ease-out' }}>
            Who We Are
          </h1>
          <h3 style={{ fontWeight: 'normal', marginBottom: '20px', color: '#ccc' }}>
            Expertise – Integrity – Excellence
          </h3>
          <p style={{ lineHeight: '1.6', fontSize: '1.05rem', animation: 'fadeInUp 1.2s ease-out' }}>
            Welcome to Ora Payments, a premier payment technology company headquartered in New York.
            Our mission is simple: to provide modern, secure, and cost-effective payment solutions that empower businesses.
            Backed by over 30 years of experience in credit card processing, our leadership understands the real challenges merchants face.
          </p>
          <p style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>
            From smart POS systems to seamless online checkout, our tools are engineered for businesses of all sizes and industries.
            We're committed to helping you reduce costs, enhance efficiency, and serve your customers better — all while maintaining complete peace of mind.
          </p>
          <p style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>
            Thank you for considering Ora Payments as your partner. We don’t take your trust lightly — and we’re ready to exceed expectations.
          </p>

          <div style={{ marginTop: '30px', animation: 'fadeInUp 1.5s ease-out' }}>
            <a
              href="/contact"
              style={{
                padding: '12px 24px',
                backgroundColor: '#00bfff',
                color: '#000',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'background 0.3s'
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0099cc')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#00bfff')}
            >
              Get Started with Ora Payments
            </a>
          </div>
        </div>

        {/* Image Section */}
        <img
          src="/about.png" // You can replace this with your new image file
          alt="About Us"
          style={{
            width: '400px',
            maxWidth: '90%',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0,191,255,0.4)',
            animation: 'fadeIn 2s ease-in'
          }}
        />
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

        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
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

export default About;
