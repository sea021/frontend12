'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const Carousel = dynamic(() => import('./component/carousel'), {
  ssr: false,
  loading: () => (
    <div style={{
      fontFamily: "'Orbitron', sans-serif",
      color: '#ffcc00',
      textAlign: 'center',
      margin: '2rem 0',
      fontSize: '1.5rem',
      animation: 'shimmer 2s linear infinite'
    }}>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  )
});

const Card = dynamic(() => import('./component/card'), { ssr: false });
const Footer = dynamic(() => import('./component/footer'));

export default function Home() {
  return (
    <>
      <Carousel />

      <h1
        className="cyber-gold-title"
        tabIndex={0}
        role="button"
        onClick={() => alert('You clicked Interesting news!')}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') alert('You activated Interesting news!'); }}
      >
        Interesting news
      </h1>

      <Card />
      <Footer />

      <style jsx>{`
        .cyber-gold-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          text-align: center;
          text-transform: uppercase;
          margin: 3rem auto 2rem;
          padding-bottom: 1rem;
          cursor: pointer;
          background: linear-gradient(90deg, #fff8dc, #ffd700, #ffcc00, #fff8dc);
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s ease-in-out infinite;
          text-shadow: 0 0 6px #ffd700, 0 0 12px #ffa500, 0 0 20px #ffea00, 0 0 30px #ffcc00;
          transition: transform 0.15s ease;
        }
        .cyber-gold-title:active { transform: scale(0.95); }
        .cyber-gold-title:focus { outline: 2px solid #ffcc00; outline-offset: 4px; }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @media (max-width: 768px) {
          .cyber-gold-title { font-size: 2.2rem; }
        }
      `}</style>
    </>
  );
}
