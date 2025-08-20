'use client';

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useParams, useRouter } from 'next/navigation';

export default function EditUserPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [formData, setFormData] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    username: '',
    password: ''
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`);
        if (!res.ok) throw new Error('Failed to fetch user data');

        const data = await res.json();
        if (data.length > 0) {
          setFormData({
            firstname: data[0].firstname,
            fullname: data[0].fullname,
            lastname: data[0].lastname,
            username: data[0].username,
            password: data[0].password
          });
          setLoaded(true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    getUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'PUT',
        headers: { Accept: 'application/json' },
        body: JSON.stringify({ id, ...formData })
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000
        }).then(() => router.push('/admin/users'));
      } else {
        Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด!', confirmButtonText: 'ตกลง' });
      }
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'ข้อผิดพลาดเครือข่าย', text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้' });
    }
  };

  if (!loaded) return <div className="text-center text-pink-500 mt-10">กำลังโหลดข้อมูล...</div>;

  return (
    <div className="register-wrapper">
      <h1 className="register-title">แก้ไขข้อมูลผู้ใช้</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <select name="firstname" value={formData.firstname} onChange={handleChange} required>
          <option value="">-- คำนำหน้า --</option>
          <option value="นาย">นาย</option>
          <option value="นาง">นาง</option>
          <option value="นางสาว">นางสาว</option>
        </select>

        <input
          type="text"
          name="fullname"
          placeholder="ชื่อเต็ม"
          value={formData.fullname}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="นามสกุล"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">บันทึกการแก้ไข</button>
      </form>

      <p className="note">* ตรวจสอบข้อมูลให้ถูกต้องก่อนบันทึก</p>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
        .register-wrapper {
          max-width: 540px;
          margin: 5rem auto;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #1a001a, #2b003d);
          border-radius: 20px;
          box-shadow: 0 0 15px #ff33cc, inset 0 0 40px #660066, inset 0 0 80px #cc33ff;
          font-family: 'Audiowide', monospace;
          color: #ff66cc;
          text-align: center;
          position: relative;
        }
        .register-title {
          font-size: 2.4rem;
          margin-bottom: 2rem;
          color: #ff33cc;
          text-shadow: 0 0 8px #ff33cc, 0 0 20px #ff66ff;
        }
        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .register-form input,
        .register-form select {
          padding: 0.85rem 1rem;
          border-radius: 10px;
          background: #200020;
          color: #f8caff;
          border: none;
          box-shadow: 0 0 6px #a200a6, inset 0 0 8px #ff33cc;
        }
        .register-form button {
          padding: 0.85rem;
          background: linear-gradient(90deg, #ff33cc, #6600ff);
          border-radius: 12px;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .register-form button:hover {
          transform: scale(1.05);
        }
        .note {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #d9b3ff;
        }
      `}</style>
    </div>
  );
}

