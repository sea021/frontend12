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
      <nav className="navbar navbar-expand-lg cyber-navbar shadow px-3 py-2 rounded-4 border border-cyber">
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
                style={{ objectFit: 'contain', maxWidth: '100%' }}
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
                <Link className="nav-link cyber-link" href="/service">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cyber-link" href="/contact">Services</Link>
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
        /* 🔹 วิดีโอพื้นหลัง */
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
          filter: brightness(0.4) contrast(1.2) saturate(1.5);
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.0);
        }

        /* 🔸 Navbar */
        .cyber-navbar {
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          font-family: 'Orbitron', sans-serif;
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
          color: #FFD700; /* สีทองสด */
          text-shadow:
            0 0 5px #FFD700,
            0 0 10px #FFA500,
            0 0 15px #FFD700,
            0 0 20px #FFA500,
            0 0 30px #FFD700;
        }

        .cyber-link {
          color: #FFF8DC !important; /* สีขาวอมทอง */
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .cyber-link:hover {
          color: #FFD700 !important; /* สีทองสด */
          text-shadow: 0 0 8px #FFD700, 0 0 12px #FFA500;
        }

        .neon-dropdown {
          background-color: #1a1a1a;
          border: 1px solid #8a2be2;
        }

        .dropdown-item:hover {
          background-color: #ff00cc;
          color: #000;
        }
      `}</style>
    </>
  );
}
