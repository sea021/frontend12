'use client';

import React from 'react';

export default function Login() {
  return (
    <>
      <div className="login-wrapper">
        <form className="login-form">
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit" className="btn-login">Sign In</button>

          <div className="login-links">
            <a href="/forgot-password" className="link">ลืมรหัสผ่าน?</a>
            <span> | </span>
            <a href="/register" className="link">สมัครสมาชิก</a>
          </div>
        </form>
      </div>

      <style jsx>{`
        .login-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(20, 0, 40, 0.9);
          backdrop-filter: blur(8px);
          font-family: 'Audiowide', sans-serif;
        }

        .login-form {
          background: rgba(40, 0, 70, 0.85);
          padding: 2.5rem 3rem;
          border-radius: 12px;
          box-shadow:
            0 0 10px #cc33ff,
            0 0 30px #9933ff,
            inset 0 0 15px #ff66ff;
          width: 320px;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          text-align: center;
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
          user-select: none;
        }

        input[type="email"],
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
        input[type="email"]:focus,
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

        .login-links {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #d9b3ff;
          user-select: none;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          align-items: center;
        }

        .login-links .link {
          color: #cc33ff;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s;
        }
        .login-links .link:hover {
          color: #ff66ff;
          text-decoration: underline;
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
