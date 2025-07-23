'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="about-wrapper">
        <h1 className="animated-title">About Us</h1>
        <p className="fade-in">
          ยินดีต้อนรับสู่ <strong>ARENA OF VALOR</strong> แพลตฟอร์มสำหรับผู้เล่นที่รักความมันส์ในสนามรบ!  
          ดาวน์โหลดแอปของเราเพื่อประสบการณ์ที่ดีที่สุดทั้งบน <span className="highlight">iOS</span> และ <span className="highlight">Android</span>
        </p>

        {/* 🔽 ปุ่มดาวน์โหลด App Store และ Google Play */}
        <div className="store-buttons fade-in-delay">
          <a
            href="https://apps.apple.com/th/app/garena-rov-super-rov-day/id1150337432"
            target="_blank"
            rel="noopener noreferrer"
            className="store-button"
          >
            <Image
              src="/images/ios.png"
              alt="Download on the App Store"
              width={160}
              height={50}
              className="store-img"
              priority
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.garena.game.kgth&hl=th"
            target="_blank"
            rel="noopener noreferrer"
            className="store-button"
          >
            <Image
              src="/images/android.png"
              alt="Get it on Google Play"
              width={160}
              height={50}
              className="store-img"
              priority
            />
          </a>
        </div>

        {/* 🔳 QR Code Section */}
        <div className="qr-section pulse-in">
          <p>หรือสแกน QR Code เพื่อดาวน์โหลด</p>
          <div className="qr-wrapper">
            <Image
              src="/images/qr.png"
              alt="QR Code"
              width={160}
              height={160}
              className="qr-img"
              priority
            />
            <p className="qr-text">
              สแกนด้วยกล้องมือถือของคุณ<br />
              เพื่อดาวน์โหลดแอปทันที!
            </p>
          </div>
        </div>
      </div>

      {/* 🎨 Style */}
      <style jsx>{`
        .about-wrapper {
          min-height: 100vh;
          padding: 3rem 1.5rem;
          max-width: 820px;
          margin: 3rem auto;
          color: #fff;
          font-family: 'Audiowide', sans-serif;
          background: rgba(20, 0, 40, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px #cc33ff, inset 0 0 30px #9933ff;
          border-radius: 16px;
          text-align: center;
          animation: fadeIn 1.2s ease-in-out;
        }

        h1.animated-title {
          font-size: 2.8rem;
          color: #ff66cc;
          text-shadow: 0 0 12px #ff66cc, 0 0 24px #cc33ff;
          margin-bottom: 1.5rem;
          animation: glowPulse 2.5s infinite alternate;
        }

        @keyframes glowPulse {
          0% { text-shadow: 0 0 8px #ff66cc, 0 0 16px #cc33ff; }
          100% { text-shadow: 0 0 20px #ff66ff, 0 0 30px #cc33ff; }
        }

        p {
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          color: #d9b3ff;
        }

        .highlight {
          color: #ff99ff;
          text-shadow: 0 0 6px #ff66cc;
        }

        .store-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .store-button {
          display: inline-block;
          cursor: pointer;
          user-select: none;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        .store-img {
          border-radius: 10px;
          box-shadow: 0 0 14px #cc33ff;
          transition: transform 0.3s, box-shadow 0.3s;
          display: block;
        }

        .store-img:hover {
          transform: scale(1.07);
          box-shadow: 0 0 25px #ff66ff, 0 0 35px #cc33ff;
        }

        /* Feedback ตอนกด */
        .store-button:active .store-img {
          transform: scale(0.95);
          transition: transform 0.1s;
        }

        .qr-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .qr-wrapper {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 0 20px #ff66cc;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
          max-width: 220px;
          margin: 0 auto;
        }

        .qr-img {
          border-radius: 10px;
          box-shadow: 0 0 15px #ff66cc;
          animation: pulseQR 3s ease-in-out infinite;
        }

        .qr-text {
          font-size: 1rem;
          color: #ff99ff;
          text-align: center;
          text-shadow: 0 0 6px #cc33ff;
          line-height: 1.3;
        }

        @keyframes pulseQR {
          0% { transform: scale(1); box-shadow: 0 0 15px #ff66cc; }
          50% { transform: scale(1.05); box-shadow: 0 0 25px #ff99ff; }
          100% { transform: scale(1); box-shadow: 0 0 15px #ff66cc; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 1.4s ease-out;
        }

        .fade-in-delay {
          animation: fadeIn 2s ease-out;
        }

        .pulse-in {
          animation: pulseQR 3s ease-in-out infinite;
        }
      `}</style>

      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
