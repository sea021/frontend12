'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const pathname = usePathname();

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
      <nav className="navbar navbar-expand-lg cyber-navbar animated-navbar shadow px-3 py-2 rounded-4">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
            <div className="logo-wrapper">
              <Image
                src="/images/logo_rov.png"
                alt="Logo"
                fill
                sizes="80px"
                className="rounded-circle logo-image"
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
                <Link className="btn btn-cyber text-white" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-cyber text-white" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-cyber text-white" href="/service">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-cyber text-white" href="/contact">Contact</Link>
              </li>
              {pathname === '/' && (
                <li className="nav-item">
                  <Link href="/Login" className="btn btn-login-glow text-white">Login</Link>
                </li>
              )}
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
          background-color: rgba(20, 0, 40, 0.85);
          backdrop-filter: blur(10px);
          font-family: 'Audiowide', sans-serif;
          border-bottom: 2px solid #cc66ff;
          box-shadow: 0 0 25px #cc66ff;
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .logo-wrapper {
          position: relative;
          width: 64px;
          height: 64px;
        }

        .logo-image {
          transition: transform 0.6s ease;
        }

        .logo-image:hover {
          transform: rotate(360deg) scale(1.1);
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
          animation: glowPulse 2.5s infinite alternate;
          text-shadow: 0 0 8px #ff66cc, 0 0 16px #cc33ff;
        }

        @keyframes glowPulse {
          0% { text-shadow: 0 0 8px #ff66cc, 0 0 16px #cc33ff; }
          100% { text-shadow: 0 0 20px #ff66ff, 0 0 30px #cc33ff; }
        }

        .btn-cyber {
          background: linear-gradient(90deg, #cc33ff, #6600ff);
          color: #fff !important;
          font-weight: bold;
          padding: 0.4rem 1.2rem;
          border: none;
          border-radius: 8px;
          box-shadow: 0 0 10px #cc33ff;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 1rem;
        }

        .btn-cyber:hover {
          background: linear-gradient(90deg, #ff33cc, #9933ff);
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 0 25px #ff66ff, 0 0 35px #cc33ff;
          color: #fff;
        }

        .btn-login-glow {
          position: relative;
          background: transparent;
          color: #ff66cc !important;
          font-weight: 700;
          padding: 0.4rem 1.2rem;
          border: 2px solid #ff66cc;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 1rem;
          overflow: hidden;
          z-index: 1;
          box-shadow: 0 0 12px #ff66ff;
        }

        .btn-login-glow::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, #ff66cc, #cc33ff, #9933ff, #ff66cc);
          animation: rotateGlow 5s linear infinite;
          z-index: -1;
          filter: blur(12px);
          opacity: 0.5;
        }

        .btn-login-glow:hover {
          background: #ff66cc;
          color: #fff !important;
          transform: scale(1.1);
          box-shadow: 0 0 25px #ff99ff, 0 0 40px #cc33ff, 0 0 60px #ff66cc;
        }

        @keyframes rotateGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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
