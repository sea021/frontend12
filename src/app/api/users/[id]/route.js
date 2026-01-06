import { NextResponse } from 'next/server';

// GET: ดึงข้อมูลผู้ใช้ 1 คนมาแสดงในฟอร์ม
export async function GET(request, { params }) {
  try {
    const { id } = params; 
    const authHeader = request.headers.get('authorization');

    const res = await fetch(`https://backend-mauve-iota-64.vercel.app/api/user/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': authHeader || '',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'ไม่พบผู้ใช้' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// PUT: ส่งข้อมูลที่แก้ไขแล้วกลับไปบันทึก
export async function PUT(request, { params }) {
  try {
    const { id } = params;
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
      return NextResponse.json({ error: 'แก้ไขไม่สำเร็จ' }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}