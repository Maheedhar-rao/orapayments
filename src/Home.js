import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

function Home() {
  const vantaRef = useRef(null);
  const ctaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Vanta Background
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

  // Scroll-trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCtaVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

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
      {/* HERO Section */}
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
            href="#contact"
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

      {/* CTA Section */}
      <section
        ref={ctaRef}
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: '#00bfff',
          padding: '60px 30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px',
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease'
        }}
      >
        {/* Image Left */}
        <img
          src="/office.png"
          alt="Office"
          style={{
            width: '400px',
            maxWidth: '90%',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0,191,255,0.4)'
          }}
        />

        {/* Content Right */}
        <div style={{ maxWidth: '500px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>
            We drive success to your everyday business
          </h2>
          <p style={{ fontSize: '1rem', marginBottom: '20px', lineHeight: '1.5', color: '#ccc' }}>
            We understand that managing your business is your top priority, which is why we offer exceptional service, reliable solutions, and complete transparency to ensure that your processing needs are met without any unexpected challenges.
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', fontWeight: 'bold' }}>
            <li>Receive your funds as quickly as same day</li>
            <li>Access to the best POS Solutions</li>
            <li>No long-term processing agreement</li>
          </ul>
        </div>
      </section>

      {/* CSS Animations */}
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
