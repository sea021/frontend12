'use client';

import React from 'react';

export default function Register() {
  return (
    <>
      <div className="register-wrapper">
        <h1 className="register-title">Create Your Account</h1>

        <form className="register-form">
          <select required>
            <option value="">-- คำนำหน้า --</option>
            <option value="mr">นาย</option>
            <option value="mrs">นาง</option>
            <option value="ms">นางสาว</option>
          </select>

          <input type="text" placeholder="ชื่อ" required />
          <input type="text" placeholder="นามสกุล" required />
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <textarea placeholder="ที่อยู่" rows={3} required />

          <div className="gender-date-row">
            <select required>
              <option value="">-- เพศ --</option>
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
              <option value="other">อื่น ๆ</option>
            </select>
            <input type="date" required />
          </div>

          <div className="checkbox-row">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">ฉันยอมรับเงื่อนไขและข้อตกลง</label>
          </div>

          <button type="submit">Register</button>
        </form>

        <p className="note">* กรุณากรอกข้อมูลให้ครบถ้วนเพื่อเข้าสู่โลกแห่งการต่อสู้!</p>
      </div>

      <style jsx>{`
        .register-wrapper {
          max-width: 540px;
          margin: 5rem auto;
          padding: 3rem 2rem;
          background: #0c0c0f; /* สีดำเข้ม */
          border-radius: 16px;
          box-shadow: 0 0 30px #9900ff, inset 0 0 20px #330033;
          font-family: 'Audiowide', sans-serif;
          color: #fff;
          text-align: center;
          animation: fadeIn 1.5s ease;
        }

        .register-title {
          font-size: 2.2rem;
          color: #ff66cc;
          margin-bottom: 2rem;
          text-shadow: 0 0 10px #ff66cc, 0 0 20px #cc33ff;
          animation: glowPulse 2.5s infinite alternate;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .register-form input,
        .register-form textarea,
        .register-form select {
          padding: 0.8rem;
          border-radius: 8px;
          border: none;
          outline: none;
          font-size: 1rem;
          background: #1a1a1a;
          color: #f0e0ff;
          box-shadow: 0 0 8px #330033;
          transition: box-shadow 0.3s, background 0.3s;
        }

        .register-form input:focus,
        .register-form textarea:focus,
        .register-form select:focus {
          background: #1f1f1f;
          box-shadow: 0 0 16px #cc33ff;
        }

        .gender-date-row {
          display: flex;
          gap: 1rem;
        }

        .gender-date-row select,
        .gender-date-row input[type="date"] {
          flex: 1;
        }

        .checkbox-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }

        .register-form button {
          padding: 0.8rem;
          border: none;
          border-radius: 8px;
          background: linear-gradient(90deg, #cc33ff, #6600ff);
          color: #fff;
          font-weight: bold;
          letter-spacing: 1px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.3s;
        }

        .register-form button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px #ff66ff;
        }

        .note {
          margin-top: 1.5rem;
          font-size: 0.95rem;
          color: #d9b3ff;
          text-shadow: 0 0 5px #cc66ff;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glowPulse {
          0% { text-shadow: 0 0 10px #ff66cc, 0 0 20px #9933ff; }
          100% { text-shadow: 0 0 25px #ff66ff, 0 0 40px #cc33ff; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
