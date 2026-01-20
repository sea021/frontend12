'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [step, setStep] = useState(1); // 1=กรอกเมล, 2=ตั้งรหัสใหม่, 3=สำเร็จ
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  // ⚠️ แก้ไข URL นี้ให้ตรงกับ Port ของ Backend คุณ (เช่น 3000, 3001, 5000)
  const API_URL = 'https://backend-mauve-iota-64.vercel.app/api/users';

  // STEP 1: ฟังก์ชันเช็คอีเมล
  const handleCheckEmail = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/check-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();

      if (res.ok && data.found) {
        setStep(2); // เจออีเมล -> ไปหน้าถัดไป
        setMessage({ text: '', type: '' });
      } else {
        setMessage({ text: 'ไม่พบอีเมลนี้ในระบบ', type: 'error' });
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: ฟังก์ชันเปลี่ยนรหัสผ่าน
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage({ text: 'รหัสผ่านไม่ตรงกัน', type: 'error' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, newPassword })
      });

      const data = await res.json();

      if (res.ok) {
        setStep(3); // สำเร็จ -> ไปหน้าจบ
      } else {
        setMessage({ text: data.error || 'เปลี่ยนรหัสผ่านไม่สำเร็จ', type: 'error' });
      }
    } catch (err) {
      setMessage({ text: 'เกิดข้อผิดพลาด', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="card p-5 shadow-lg text-white" style={{ maxWidth: '450px', width: '100%', borderRadius: '20px' }}>
        
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#bc00dd', letterSpacing: '2px' }}>
          {step === 3 ? 'SUCCESS!' : 'FORGOT PASSWORD'}
        </h2>

        {/* แสดง Error Message */}
        {message.text && message.type === 'error' && (
          <div className="alert alert-danger text-center p-2 mb-3 small" style={{ borderRadius: '10px' }}>
            {message.text}
          </div>
        )}

        {/* --- STEP 1: กรอกอีเมล --- */}
        {step === 1 && (
          <form onSubmit={handleCheckEmail}>
            <div className="mb-4 text-start">
              <label className="form-label small fw-bold" style={{ color: '#bc00dd' }}>EMAIL ADDRESS</label>
              <input
                type="email"
                className="form-control bg-transparent text-dark border-secondary p-3"
                style={{ borderRadius: '10px' }}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="btn w-100 fw-bold text-white py-3" 
              style={{ 
                background: 'linear-gradient(90deg, #bc00dd, #7000ff)', 
                borderRadius: '10px', border: 'none', boxShadow: '0 0 15px rgba(188, 0, 221, 0.4)'
              }}
            >
              {loading ? 'CHECKING...' : 'VERIFY EMAIL'}
            </button>
          </form>
        )}

        {/* --- STEP 2: ตั้งรหัสผ่านใหม่ --- */}
        {step === 2 && (
          <form onSubmit={handleResetPassword}>
            <div className="text-center mb-4">
              <span className="badge bg-secondary">Account: {email}</span>
            </div>
            
            <div className="mb-3 text-start">
              <label className="form-label small fw-bold" style={{ color: '#bc00dd' }}>NEW PASSWORD</label>
              <input
                type="password"
                className="form-control bg-transparent text-dark border-secondary p-3"
                style={{ borderRadius: '10px' }}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 text-start">
              <label className="form-label small fw-bold" style={{ color: '#bc00dd' }}>CONFIRM PASSWORD</label>
              <input
                type="password"
                className="form-control bg-transparent text-dark border-secondary p-3"
                style={{ borderRadius: '10px' }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="btn w-100 fw-bold text-white py-3" 
              style={{ 
                background: 'linear-gradient(90deg, #bc00dd, #7000ff)', 
                borderRadius: '10px', border: 'none', boxShadow: '0 0 15px rgba(188, 0, 221, 0.4)'
              }}
            >
              {loading ? 'UPDATING...' : 'UPDATE PASSWORD'}
            </button>
          </form>
        )}

        {/* --- STEP 3: สำเร็จ --- */}
        {step === 3 && (
          <div className="text-center">
            <div className="mb-4">
               <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '3rem' }}></i>
            </div>
            <h5 className="text-success mb-3">Password Changed!</h5>
            <p className="text-secondary small mb-4">รหัสผ่านของคุณถูกเปลี่ยนเรียบร้อยแล้ว สามารถเข้าสู่ระบบได้ทันที</p>
            <Link href="/Login" className="btn btn-outline-info w-100 py-2" style={{ borderRadius: '10px' }}>
              Back to Login
            </Link>
          </div>
        )}

        {step !== 3 && (
          <div className="text-center mt-4">
            <Link href="/Login" className="text-decoration-none small" style={{ color: '#0dcaf0' }}>
              Back to Login
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}