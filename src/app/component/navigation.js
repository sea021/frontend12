'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      {/* 🔹 วิดีโอพื้นหลัง */}
      <div className="video-bg-wrapper">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/video/Violet.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      {/* 🔸 Navbar */}
      <nav className="navbar navbar-expand-lg cyber-navbar shadow px-3 py-2 rounded-4">
        <div className="container-fluid">
          {/* โลโก้ + แบรนด์ */}
          <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
            <div className="logo-wrapper">
              <Image
                src="/images/logo_rov.png"
                alt="Logo"
                fill
                sizes="80px"
                className="rounded-circle"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="brand-text-glow d-none d-md-inline">ARENA OF VALOR</span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-3">
              <li className="nav-item">
                <Link className="nav-link cyber-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cyber-link" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cyber-link" href="/service">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cyber-link" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🎨 Style */}
      <style jsx>{`
        .video-bg-wrapper {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
        }

        .video-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.35) contrast(1.4) saturate(1.8);
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .cyber-navbar {
          background-color: rgba(0, 25, 75, 0.8);
          backdrop-filter: blur(10px);
          font-family: 'Audiowide', sans-serif;
          z-index: 10;
        }

        .logo-wrapper {
          position: relative;
          width: 64px;
          height: 64px;
        }

        @media (min-width: 768px) {
          .logo-wrapper {
            width: 80px;
            height: 80px;
          }
        }

        .brand-text-glow {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ff66cc;
          text-shadow:
            0 0 6px #ff66cc,
            0 0 12px #cc33ff,
            0 0 20px #9933ff;
        }

        .cyber-link {
          position: relative;
          color: #ffffff !important;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 1.4rem;
          font-weight: 700;
          padding: 0.4rem 0.8rem;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .cyber-link::before {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0;
          height: 3px;
          background: #00ffff;
          border-radius: 2px;
          transition: width 0.4s ease, left 0.4s ease;
          filter: drop-shadow(0 0 6px #00ffff);
          transform: translateX(-50%);
        }

        .cyber-link:hover {
          color: #00ffff !important;
          text-shadow:
            0 0 8px #00ffff,
            0 0 12px #33ccff,
            0 0 20px #66ffff;
          animation: glowPulse 1.5s infinite alternate;
        }

        .cyber-link:hover::before {
          width: 100%;
          left: 0;
        }

        @keyframes glowPulse {
          0%, 100% {
            text-shadow:
              0 0 6px #00ffff,
              0 0 12px #33ccff,
              0 0 20px #66ffff;
          }
          50% {
            text-shadow:
              0 0 12px #00ffff,
              0 0 24px #33ccff,
              0 0 40px #66ffff;
          }
        }
      `}</style>

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
