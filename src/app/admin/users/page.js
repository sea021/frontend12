'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function UserPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // ✅ ตรวจสอบ token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login');
      return;
    }

    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 3000);
    return () => clearInterval(interval);
  }, [router]);

  // ✅ ลบผู้ใช้พร้อม Swal ยืนยัน
  async function handleDelete(id) {
    const result = await Swal.fire({
      title: 'คุณแน่ใจหรือไม่?',
      text: 'คุณต้องการลบผู้ใช้นี้ใช่หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7b3fe4',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่ ลบเลย!',
      cancelButtonText: 'ยกเลิก',
      background: '#1b0033',
      color: '#f0e6ff',
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setItems(items.filter((u) => u.id !== id));
        Swal.fire({
          icon: 'success',
          title: 'ลบสำเร็จ!',
          text: 'ผู้ใช้ถูกลบเรียบร้อยแล้ว.',
          background: '#1b0033',
          color: '#f0e6ff',
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire('ลบไม่สำเร็จ', 'เกิดข้อผิดพลาดในการลบข้อมูล', 'error');
      }
    } catch (error) {
      Swal.fire('ลบไม่สำเร็จ', 'เกิดข้อผิดพลาดในการลบข้อมูล', 'error');
    }
  }

  // ✅ แสดง loading ระหว่างโหลดข้อมูล
  if (loading) {
    return (
      <div className="text-center py-5">
        <h1 style={{ color: '#7b3fe4' }}>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          font-family: 'Orbitron', sans-serif;
        }

        .card {
          width: 100%;
          max-width: 1200px;
          background: linear-gradient(145deg, #220044, #110022);
          border-radius: 20px;
          box-shadow: 0 0 20px #7b3fe4aa, 0 0 30px #220033 inset;
          padding: 24px;
          color: #d3bfff;
          border: 2px solid #7b3fe4;
        }

        .card-header {
          font-size: 1.8rem;
          font-weight: 700;
          color: #f9e8ff;
          padding-bottom: 14px;
          margin-bottom: 20px;
          border-bottom: 2px solid #a66fff;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 12px;
          color: #e0c9ff;
        }

        thead tr {
          background-color: #330066;
        }

        thead th {
          padding: 14px 12px;
          text-align: center;
          font-weight: 600;
          letter-spacing: 1px;
        }

        tbody tr {
          background: #1c0033;
          border-radius: 12px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        tbody tr:hover {
          transform: scale(1.01);
          box-shadow: 0 0 15px #9c6cffaa;
        }

        tbody td {
          padding: 14px 12px;
          vertical-align: middle;
          text-align: center;
          font-weight: 500;
        }

        tbody td:nth-child(2),
        tbody td:nth-child(3),
        tbody td:nth-child(4) {
          text-align: left;
          padding-left: 20px;
          font-weight: 600;
        }

        .btn-purple,
        .btn-danger {
          padding: 6px 14px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }

        .btn-purple {
          background-color: #7b3fe4;
          color: white;
        }

        .btn-purple:hover {
          background-color: #9c6cff;
          transform: translateY(-2px);
        }

        .btn-danger {
          background-color: #cc3399;
          color: white;
        }

        .btn-danger:hover {
          background-color: #ff66cc;
          transform: translateY(-2px);
        }

        .no-data {
          text-align: center;
          padding: 24px 0;
          font-style: italic;
          color: #a68aff99;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <div className="card-header">
            <i className="bi bi-people-fill"></i> รายชื่อผู้ใช้งาน
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Fullname</th>
                    <th>Lastname</th>
                    <th>Username</th>
                    <th>Address</th>
                    <th>Sex</th>
                    <th>Birthday</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0 ? (
                    items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstname}</td>
                        <td>{item.fullname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.username}</td>
                        <td>{item.address}</td>
                        <td>{item.sex}</td>
                        <td>{item.birthday}</td>
                        <td>
                          <Link href={`/admin/users/edit/${item.id}`}>
                            <button className="btn-purple" type="button">
                              <i className="bi bi-pencil-fill"></i> Edit
                            </button>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn-danger"
                            onClick={() => handleDelete(item.id)}
                            type="button"
                          >
                            <i className="bi bi-trash-fill"></i> Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="no-data">
                        ไม่พบข้อมูลผู้ใช้งาน
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
