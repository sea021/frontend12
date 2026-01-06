'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://backend-mauve-iota-64.vercel.app/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);

        Swal.fire({
          title: 'Login Successfully!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          background: '#1a002b',
          color: '#ff66cc',
          iconColor: '#ff33cc',
          showClass: { popup: 'swal2-show-cyberpunk' },
          hideClass: { popup: 'swal2-hide-cyberpunk' },
        });

        setAnimateOut(true);
        setTimeout(() => {
          // Redirect ด้วย window.location.href
          window.location.href = '/admin/users';
        }, 600);

      } else {
        Swal.fire({
          title: 'Login Failed!',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
          background: '#1a002b',
          color: '#ff66cc',
          iconColor: '#ff3333',
          showClass: { popup: 'swal2-show-cyberpunk' },
          hideClass: { popup: 'swal2-hide-cyberpunk' },
        }).then(() => setLoading(false));
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '<h3>Error!</h3>',
        text: 'Server not responding',
        confirmButtonText: 'OK',
        background: '#1a002b',
        color: '#ff66cc',
        iconColor: '#ff3333',
        showClass: { popup: 'swal2-show-cyberpunk' },
        hideClass: { popup: 'swal2-hide-cyberpunk' },
      });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <form
          className={`login-form ${animateOut ? 'fade-float-out' : ''}`}
          onSubmit={handleSubmit}
        >
          <h2>Login</h2>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

          <div className="login-links">
            <Link href="/forgot-password" className="link-cyberpunk">
              ลืมรหัสผ่าน?
            </Link>
            <span className="divider"> | </span>
            <Link href="/register" className="link-cyberpunk">
              สมัครสมาชิก
            </Link>
          </div>
        </form>
      </div>

      <footer className="footer">
        © 2015 TencenT Games Inc. All rights reserved.
      </footer>

      <style jsx>{`
        .login-wrapper {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          
          font-family: 'Audiowide', sans-serif;
          padding: 2rem;
          box-sizing: border-box;
          flex-direction: column;
        }

        .login-form {
          background: rgba(40, 0, 70, 0.85);
          padding: 3.5rem 4rem;
          border-radius: 16px;
          box-shadow:
            0 0 15px #cc33ff,
            0 0 40px #9933ff,
            inset 0 0 20px #ff66ff;
          width: 400px;
          max-width: 100%;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
          transition: opacity 0.6s ease, transform 0.6s ease;
          margin-bottom: 2rem;
        }

        .fade-float-out {
          opacity: 0;
          transform: translateY(-30px);
        }

        .login-form h2 {
          margin-bottom: 1rem;
          color: #ff66cc;
          text-shadow:
            0 0 8px #ff66cc,
            0 0 12px #cc33ff;
        }

        label {
          font-size: 0.9rem;
          text-align: left;
          color: #d9b3ff;
          margin-bottom: 0.3rem;
        }

        input[type="text"],
        input[type="password"] {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          border: 2px solid #cc33ff;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1rem;
          transition: border-color 0.3s;
          outline: none;
        }

        input[type="text"]:focus,
        input[type="password"]:focus {
          border-color: #ff66ff;
          box-shadow: 0 0 8px #ff66ff;
          background: rgba(255, 255, 255, 0.15);
        }

        .btn-login {
          margin-top: 1rem;
          background: linear-gradient(90deg, #cc33ff, #6600ff);
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: bold;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 0 12px #cc33ff;
          transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
        }

        .btn-login:hover {
          background: linear-gradient(90deg, #ff33cc, #9933ff);
          box-shadow: 0 0 20px #ff33cc;
          transform: scale(1.05);
        }

        .btn-login:disabled {
          background: #888;
          cursor: not-allowed;
          box-shadow: none;
        }

        .login-links {
          margin-top: 1rem;
          font-size: 0.95rem;
          display: flex;
          justify-content: center;
          gap: 0.8rem;
        }

        .link-cyberpunk {
          position: relative;
          color: #ff33cc;
          text-decoration: none;
          font-weight: bold;
          text-shadow: 0 0 6px #ff33cc, 0 0 12px #cc33ff;
          transition: 0.3s;
        }

        .link-cyberpunk::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background: #ff66ff;
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        .link-cyberpunk:hover {
          color: #ff66ff;
          text-shadow: 0 0 12px #ff66ff, 0 0 24px #cc33ff;
        }

        .link-cyberpunk:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .divider {
          color: #d9b3ff;
          text-shadow: 0 0 6px #cc33ff;
        }

        .footer {
          text-align: center;
          padding: 1.5rem 1rem;
          color: #fff;
          font-family: 'Audiowide', monospace;
          font-size: 0.9rem;
          text-shadow: 0 0 8px #cc33ff, 0 0 20px #9933ff;
          user-select: none;
          letter-spacing: 0.05em;
          margin-top: 3rem;
          border-radius: 0 0 12px 12px;
        }

        .swal2-show-cyberpunk {
          animation: glowPulse 1.2s ease-in-out infinite alternate !important;
          border: 2px solid #ff33cc !important;
          box-shadow: 0 0 30px #ff66ff, inset 0 0 20px #cc33ff !important;
          color: #ff66cc !important;
          font-family: 'Audiowide', monospace !important;
        }

        .swal2-hide-cyberpunk {
          opacity: 0 !important;
        }

        @keyframes glowPulse {
          0% { text-shadow: 0 0 8px #ff66cc, 0 0 16px #cc33ff; }
          50% { text-shadow: 0 0 16px #ff66ff, 0 0 32px #cc33ff; }
          100% { text-shadow: 0 0 24px #ff33cc, 0 0 48px #ff66ff; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
