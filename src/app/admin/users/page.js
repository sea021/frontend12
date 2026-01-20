'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function UserPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State สำหรับเก็บ ID และ Status ของคนที่ Login อยู่
  const [currentUserId, setCurrentUserId] = useState(null); 
  const [currentUserStatus, setCurrentUserStatus] = useState(null); 
  
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const loggedInUsername = localStorage.getItem('username'); 

    if (!token) {
      router.push('/Login');
      return;
    }

    async function fetchData() {
      try {
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };

        const res = await fetch('/api/users', { 
          method: 'GET', 
          headers: headers 
        });

        if (res.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          router.push('/Login');
          return;
        }

        if (!res.ok) throw new Error('Failed to fetch users');
        
        const data = await res.json();
        setItems(data);

        // หาตัวตนของคนที่ Login เข้ามาเพื่อเก็บ ID และ Status
        if (loggedInUsername) {
          const me = data.find(user => user.username === loggedInUsername);
          if (me) {
            setCurrentUserId(me.id.toString());
            setCurrentUserStatus(me.status); // เก็บ Status (admin/user)
          }
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    // Refresh ข้อมูลทุก 5 วินาที
    const interval = setInterval(fetchData, 5000); 
    return () => clearInterval(interval);
  }, [router]);

  async function handleDelete(id) {
    // 1. เช็คสิทธิ์: เป็นตัวเอง หรือ เป็น Admin ถึงจะลบได้
    const isMe = currentUserId?.toString() === id.toString();
    const isAdmin = currentUserStatus === 'admin';

    if (!isMe && !isAdmin) {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'คุณไม่มีสิทธิ์ลบข้อมูลของผู้อื่น',
        background: '#1b0033',
        color: '#ff66cc'
      });
      return;
    }

    const token = localStorage.getItem('token');
    
    // ข้อความแจ้งเตือนที่แตกต่างกัน
    const warningText = isMe 
      ? 'บัญชีของคุณจะถูกลบออกจากระบบอย่างถาวร และคุณจะถูก Log out'
      : `คุณต้องการลบผู้ใช้ ID: ${id} ใช่หรือไม่?`;

    const result = await Swal.fire({
      title: 'ยืนยันการลบ?',
      text: warningText,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7b3fe4',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน, ลบเลย!',
      cancelButtonText: 'ยกเลิก',
      background: '#1b0033',
      color: '#f0e6ff',
    });

    if (!result.isConfirmed) return;

    try {
      // ✅ แก้ไข URL ตรงนี้: ใช้ ?id= แทน /id เพื่อแก้ปัญหา 405 Method Not Allowed
      const res = await fetch(`/api/users?id=${id}`, { 
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'ลบสำเร็จ!',
          text: 'ดำเนินการเรียบร้อยแล้ว',
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          // ถ้าลบตัวเอง ให้ Logout
          if (isMe) {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            router.push('/Login');
          } else {
            // ถ้า Admin ลบคนอื่น ให้เอาออกจาก List ทันที
            setItems(prev => prev.filter(item => item.id !== id));
          }
        });
      } else {
        // อ่าน Error message จาก backend ถ้ามี
        const errorData = await res.json().catch(() => ({}));
        Swal.fire('Error', errorData.message || 'ไม่สามารถลบข้อมูลได้', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'การเชื่อมต่อขัดข้อง', 'error');
    }
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <h1 className="glow-text">LOADING...</h1>
        <style jsx>{`
          .loading-screen { height: 100vh; display: flex; justify-content: center; align-items: center; background: #0a001a; }
          .glow-text { color: #7b3fe4; text-shadow: 0 0 20px #7b3fe4; font-family: 'Orbitron', sans-serif; }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
        .container { min-height: 100vh; display: flex; justify-content: center; padding: 60px 20px; font-family: 'Orbitron', sans-serif; background: #0a001a; }
        .card { width: 100%; max-width: 1200px; background: rgba(20, 0, 40, 0.9); border-radius: 15px; box-shadow: 0 0 25px #7b3fe4; padding: 30px; border: 1px solid #7b3fe4; }
        .card-header { font-size: 2rem; color: #fff; margin-bottom: 30px; text-shadow: 0 0 10px #ff66cc; border-bottom: 2px solid #ff66cc; }
        table { width: 100%; border-collapse: separate; border-spacing: 0 10px; }
        thead th { color: #ffcc00; padding: 15px; text-align: center; background: #220044; text-transform: uppercase; }
        tbody tr { background: rgba(50, 0, 100, 0.5); transition: 0.3s; }
        tbody tr.is-me { border-left: 5px solid #ffcc00; background: rgba(100, 0, 200, 0.4); }
        tbody td { padding: 12px; text-align: center; color: #d3bfff; font-size: 0.9rem; }
        .btn-edit { background: #ffcc00; color: #000; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer; font-weight: bold; margin-right: 8px; transition: 0.2s; }
        .btn-edit:hover { background: #fff; transform: translateY(-2px); }
        .btn-delete { background: #ff0055; color: #fff; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer; font-weight: bold; transition: 0.2s; }
        .btn-delete:hover { background: #ff66aa; transform: translateY(-2px); }
        .denied-text { color: #555; font-size: 0.8rem; font-style: italic; letter-spacing: 1px; }
        .badge-admin { background: #7b3fe4; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; margin-left: 5px; vertical-align: middle;}
      `}</style>

      <div className="container">
        <div className="card">
          <div className="card-header">
             USER DATABASE SYSTEM 
             {currentUserStatus === 'admin' && <span style={{fontSize:'1rem', marginLeft:'10px', color:'#00ff00'}}>(ADMIN MODE)</span>}
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>USERNAME</th>
                  <th>FIRSTNAME</th>
                  <th>LASTNAME</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {items.length > 0 ? (
                  items.map((item) => {
                    // ตรวจสอบเงื่อนไขการแสดงปุ่ม
                    const isMe = currentUserId && item.id.toString() === currentUserId;
                    const isAdmin = currentUserStatus === 'admin';
                    const canEdit = isMe || isAdmin;

                    return (
                      <tr key={item.id} className={isMe ? 'is-me' : ''}>
                        <td>{item.id} {isMe && "⭐"}</td>
                        <td>{item.username}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>
                          {item.status} 
                          {item.status === 'admin' && <span className="badge-admin">ADM</span>}
                        </td>
                        <td>
                          {canEdit ? (
                            <>
                              <Link href={`/admin/users/edit/${item.id}`}>
                                <button className="btn-edit">Edit</button>
                              </Link>
                              <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
                            </>
                          ) : (
                            <span className="denied-text">ACCESS DENIED</span>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr><td colSpan="6">No users found in database.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}