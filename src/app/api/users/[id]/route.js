import { NextResponse } from 'next/server';

// GET: ดึงข้อมูลผู้ใช้ 1 คนมาแสดงในฟอร์ม
export async function GET(request, { params }) {
  try {
    // สำหรับ Next.js 15 ต้อง await params ก่อนดึงค่า id
    const { id } = await params; 
    const authHeader = request.headers.get('authorization');

    // แก้ไขจุดนี้: เปลี่ยนจาก /user/ เป็น /users/ (เติม s) ให้ตรงกับ Backend
    const res = await fetch(`https://backend-mauve-iota-64.vercel.app/api/users/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': authHeader || '',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json({ error: errorData.error || 'ไม่พบผู้ใช้' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// PUT: ส่งข้อมูลที่แก้ไขแล้วกลับไปบันทึก
export async function PUT(request, { params }) {
  try {
    const { id } = await params; // await params สำหรับ Next.js 15
    const authHeader = request.headers.get('authorization');
    const body = await request.json();

    const res = await fetch(`https://backend-mauve-iota-64.vercel.app/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': authHeader || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (res.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: data.error || 'แก้ไขไม่สำเร็จ' }, { status: res.status });
    }
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}