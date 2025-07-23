'use client';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

// โหลด component แบบ dynamic เพื่อลด bundle size และเรนเดอร์หลัง client เท่านั้น
const Carousel = dynamic(() => import('./component/carousel'), { ssr: false, loading: () => <p>Loading carousel...</p> });
const Card = dynamic(() => import('./component/card'), { ssr: false });
const Footer = dynamic(() => import('./component/footer'));

export default function Home() {
  return (
    <>
      {/* โหลดฟอนต์ Orbitron จาก Google Fonts */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Carousel />

      <h1
        className="cyber-gold-title"
        tabIndex={0} // เพิ่ม keyboard focus
        role="button" // ให้รู้ว่าเหมือนปุ่ม
        onClick={() => {
          alert('You clicked Interesting news!');
        }}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            alert('You activated Interesting news!');
          }
        }}
      >
        Interesting news
      </h1>

      {/* Style สำหรับหัวข้อใหญ่ Learn more */}
      <style jsx>{`
        .cyber-gold-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          text-align: center;
          text-transform: uppercase;
          position: relative;
          display: block;
          margin: 3rem auto 2rem;
          padding-bottom: 1rem;
          cursor: pointer;

          background: linear-gradient(90deg, #fff8dc, #ffd700, #ffcc00, #fff8dc);
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s ease-in-out infinite;

          text-shadow:
            0 0 6px #ffd700,
            0 0 12px #ffa500,
            0 0 20px #ffea00,
            0 0 30px #ffcc00;
          user-select: none;
          transition: transform 0.15s ease;
        }

        .cyber-gold-title:active {
          transform: scale(0.95);
        }

        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @media (max-width: 768px) {
          .cyber-gold-title {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <Card />
      <Footer />
    </>
  );
}
