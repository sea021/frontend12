'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function EditUserPage() {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState({ 
    firstname: '', lastname: '', fullname: '', username: '', password: '' 
  });
  const [loaded, setLoaded] = useState(false);

  // 1. ดึงข้อมูลเก่ามาแสดง (ส่วนนี้ของคุณทำงานได้แล้ว ผมคงไว้เหมือนเดิม)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login');
      return;
    }

    async function getUser() {
      try {
        // ใช้ URL เดิมสำหรับการดึงข้อมูล (เพราะดูเหมือน GET จะทำงานได้ปกติ)
       const res = await fetch(`/api/users?id=${id}`, { // ✅ ถูกต้อง ตรงกับ Backend ใหม่
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!res.ok) throw new Error('Failed to fetch user');
        
        const data = await res.json();
        const user = Array.isArray(data) ? data[0] : data;
        
        if (!user) throw new Error('User not found');

        setFormData({ 
            firstname: user.firstname || '',
            lastname: user.lastname || '',
            fullname: user.fullname || '',
            username: user.username || '',
            password: '' // เว้นว่างไว้เสมอเพื่อความปลอดภัย
        });
        setLoaded(true);
      } catch (error) {
        console.error("Fetch error:", error);
        Swal.fire({
          icon: 'error',
          title: 'ไม่พบข้อมูลผู้ใช้',
          text: 'ข้อมูลอาจถูกลบไปแล้วหรือ ID ไม่ถูกต้อง',
          background: '#1a001a',
          color: '#ff66cc'
        });
        router.push('/admin/users');
      }
    }
    getUser();
  }, [id, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. ฟังก์ชันบันทึกข้อมูล (จุดที่แก้ไข)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    // เช็คความปลอดภัยเบื้องต้น
    if (!token) {
        Swal.fire('Error', 'Session หมดอายุ กรุณา Login ใหม่', 'error');
        router.push('/Login');
        return;
    }
    
    Swal.showLoading();

    try {
      // ⚠️ แก้ไข URL: เปลี่ยนเป็น Query Param (?id=) เพื่อแก้ปัญหา 401/405
      // ระบบน่าจะรองรับ PUT ที่ URL เดียวกับ DELETE
      const res = await fetch(`/api/users?id=${id}`, { 
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` // ✅ ส่ง Token ยืนยันตัวตน
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success', 
          title: 'อัปเดตข้อมูลสำเร็จ',
          background: '#1a001a', 
          color: '#ff66cc', 
          timer: 2000,
          showConfirmButton: false
        }).then(() => router.push('/admin/users'));
      } else {
        // พยายามอ่าน Error จาก Server
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Update failed (Status: ${res.status})`);
      }
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire({
        icon: 'error',
        title: 'บันทึกไม่สำเร็จ',
        text: 'เกิดข้อผิดพลาดในการเชื่อมต่อหรือคุณไม่มีสิทธิ์แก้ไข',
        background: '#1a001a', 
        color: '#ff66cc'
      });
    }
  };

  if (!loaded) return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>กำลังดึงข้อมูลฮีโร่...</p>
      <style jsx>{`
        .loader-container { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; color: #ff66cc; background: #000; }
        .loader { border: 4px solid #1a001a; border-top: 4px solid #ff33cc; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; margin-bottom: 1rem; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );

  return (
    <div className="register-wrapper">
      <h1 className="register-title">แก้ไขข้อมูลผู้ใช้</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>คำนำหน้า</label>
          <select name="firstname" value={formData.firstname} onChange={handleChange} required>
            <option value="">-- เลือก --</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
        </div>

        <div className="input-group">
          <label>ชื่อจริง</label>
          <input type="text" name="fullname" placeholder="Fullname" value={formData.fullname} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>นามสกุล</label>
          <input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Password (ระบุหากต้องการเปลี่ยน)</label>
          <input type="password" name="password" placeholder="********" value={formData.password} onChange={handleChange} />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-save">บันทึกการแก้ไข</button>
          <button type="button" className="btn-cancel" onClick={() => router.push('/admin/users')}>ยกเลิก</button>
        </div>
      </form>

      <style jsx>{`
        .register-wrapper {
          max-width: 550px; margin: 3rem auto; padding: 2.5rem;
          background: linear-gradient(135deg, #1a001a 0%, #2b003d 100%);
          border-radius: 20px; box-shadow: 0 0 25px rgba(255, 51, 204, 0.3);
          text-align: center; color: #ff66cc; border: 1px solid rgba(255, 102, 204, 0.2);
        }
        .register-title { font-size: 2.2rem; margin-bottom: 2rem; text-shadow: 0 0 10px #ff33cc; font-weight: bold; }
        .register-form { display: flex; flex-direction: column; gap: 1.2rem; }
        
        .input-group { text-align: left; display: flex; flex-direction: column; gap: 0.4rem; }
        .input-group label { font-size: 0.9rem; color: #ff99dd; margin-left: 5px; }
        
        .register-form input, .register-form select {
          padding: 0.9rem; border-radius: 10px; background: #120012; color: #fff; 
          border: 1px solid #ff33cc; transition: all 0.3s;
        }
        .register-form input:focus { outline: none; box-shadow: 0 0 10px #ff33cc; background: #1a001a; }
        
        .button-group { display: flex; gap: 1rem; margin-top: 1rem; }
        
        .btn-save {
          flex: 2; padding: 1rem; background: linear-gradient(90deg, #ff33cc, #6600ff);
          border: none; border-radius: 10px; color: #fff; font-weight: bold; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-save:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255, 51, 204, 0.5); }
        
        .btn-cancel {
          flex: 1; padding: 1rem; background: #333; border: 1px solid #666;
          border-radius: 10px; color: #ccc; cursor: pointer; transition: background 0.3s;
        }
        .btn-cancel:hover { background: #444; color: #fff; }
      `}</style>
    </div>
  );
}