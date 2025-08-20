'use client';

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [prefix, setPrefix] = useState('');
  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password ไม่ตรงกัน',
        confirmButtonText: 'ตกลง',
      });
      return;
    }

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          prefix,
          firstname,
          fullname,
          lastname,
          username,
          email,
          password,
          address,
          gender,
          birthdate,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      console.log('Response from API:', result);

      Swal.fire({
        title: 'สมัครสมาชิกสำเร็จ!',
        icon: 'success',
        background: '#1a002b',
        color: '#ff66cc',
        timer: 1000,               // ⏳ แสดงผล 2 วิ
        showConfirmButton: false,  // ❌ ไม่ต้องกดปุ่ม
        willClose: () => {
          // ✅ ล้างค่าในฟอร์ม
          setPrefix('');
          setFirstname('');
          setFullname('');
          setLastname('');
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setAddress('');
          setGender('');
          setBirthdate('');

          // ✅ ไปหน้า login อัตโนมัติ
          router.push('/Login');
        }
      });

    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถสมัครสมาชิกได้ในขณะนี้',
        confirmButtonText: 'ตกลง',
      });
    }
  };

  return (
    <>
      <div className="register-wrapper">
        <h1 className="register-title">Create Your Account</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <select
            name="prefix"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">คำนำหน้าชื่อ</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>

          <input
            type="text"
            placeholder="ชื่อจริง (Firstname)"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="ชื่อเต็ม (Fullname)"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <input
            type="text"
            placeholder="นามสกุล"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <textarea
            placeholder="ที่อยู่"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <div className="gender-date-row">
            <select
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">-- เพศ --</option>
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
              <option value="other">อื่น ๆ</option>
            </select>

            <input
              type="date"
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>

          <div className="checkbox-row">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">ฉันยอมรับเงื่อนไขและข้อตกลง</label>
          </div>

          <button type="submit">Register</button>
        </form>

        <p className="note">
          * กรุณากรอกข้อมูลให้ครบถ้วนเพื่อเข้าสู่โลกแห่งการต่อสู้!
        </p>
      </div>

      {/* ==== Cyberpunk Style ==== */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

        .register-wrapper {
          max-width: 540px;
          margin: 5rem auto;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #1a001a, #2b003d);
          border-radius: 20px;
          box-shadow:
            0 0 15px #ff33cc,
            inset 0 0 40px #660066,
            inset 0 0 80px #cc33ff;
          font-family: 'Audiowide', monospace;
          color: #ff66cc;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: fadeIn 1.5s ease forwards;
          border: 2px solid #ff33cc;
        }

        /* Flicker Scanline */
        .register-wrapper::before {
          content: "";
          pointer-events: none;
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.05),
              rgba(255, 255, 255, 0.05) 1px,
              transparent 2px,
              transparent 4px
            );
          animation: flicker 3s linear infinite;
          z-index: 0;
          border-radius: 20px;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .register-title {
          font-size: 2.6rem;
          margin-bottom: 2rem;
          color: #ff33cc;
          text-shadow:
            0 0 8px #ff33cc,
            0 0 20px #ff66ff,
            0 0 30px #cc33ff;
          animation: glowPulse 2.5s ease-in-out infinite alternate;
          z-index: 1;
          position: relative;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .register-form input,
        .register-form textarea,
        .register-form select {
          padding: 0.85rem 1rem;
          border-radius: 10px;
          border: 2px solid transparent;
          outline: none;
          font-size: 1rem;
          background: #200020;
          color: #f8caff;
          box-shadow:
            0 0 6px #a200a6,
            inset 0 0 8px #ff33cc;
          transition: box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          font-family: 'Audiowide', monospace;
        }

        .register-form input::placeholder,
        .register-form textarea::placeholder,
        .register-form select option {
          color: #d49ade;
          opacity: 0.8;
        }

        .register-form input:focus,
        .register-form textarea:focus,
        .register-form select:focus {
          background: #330033;
          border-color: #ff66cc;
          box-shadow:
            0 0 15px #ff66cc,
            inset 0 0 25px #ff33cc;
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
          gap: 0.6rem;
          font-size: 0.95rem;
          margin-top: 0.5rem;
          color: #ff99dd;
          user-select: none;
          z-index: 1;
        }

        .checkbox-row input[type='checkbox'] {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #ff66cc;
          box-shadow:
            0 0 6px #ff33cc;
          transition: box-shadow 0.3s ease;
        }

        .checkbox-row input[type='checkbox']:hover {
          box-shadow:
            0 0 12px #ff66ff;
        }

        .register-form button {
          padding: 0.85rem;
          border: none;
          border-radius: 12px;
          background: linear-gradient(90deg, #ff33cc, #6600ff);
          color: #fff;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          box-shadow:
            0 0 12px #ff33cc,
            0 0 30px #cc33ff;
          transition: transform 0.25s ease, box-shadow 0.3s ease;
          font-family: 'Audiowide', monospace;
          user-select: none;
          z-index: 1;
          position: relative;
        }

        .register-form button:hover {
          transform: scale(1.07);
          box-shadow:
            0 0 25px #ff66ff,
            0 0 40px #ff33cc,
            0 0 60px #cc33ff;
        }

        .note {
          margin-top: 1.5rem;
          font-size: 0.95rem;
          color: #d9b3ff;
          text-shadow: 0 0 8px #cc66ff;
          user-select: none;
          z-index: 1;
          position: relative;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0% {
            text-shadow:
              0 0 10px #ff66cc,
              0 0 20px #9933ff;
          }
          100% {
            text-shadow:
              0 0 25px #ff66ff,
              0 0 40px #cc33ff;
          }
        }

        /* SweetAlert2 popup animation override */
        .swal2-show-cyberpunk {
          animation: glowPulse 1.2s ease-in-out infinite alternate !important;
          border: 2px solid #ff33cc !important;
          box-shadow: 0 0 30px #ff66ff !important;
          color: #ff66cc !important;
          background-color: #1a002b !important;
          font-family: 'Audiowide', monospace !important;
        }
        .swal2-hide-cyberpunk {
          opacity: 0 !important;
        }
      `}</style>
    </>
  );
}
