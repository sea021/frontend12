import { NextResponse } from 'next/server';

// ==========================================================
// GET: ดึงข้อมูลผู้ใช้ 1 คน (เช็คสิทธิ์ก่อนแสดงหน้าแก้ไข)
// ==========================================================
export async function GET(request, { params }) {
  try {
    const { id } = await params; 
    const authHeader = request.headers.get('authorization');

    // ตรวจสอบเบื้องต้นว่ามี Token ส่งมาหรือไม่
    console.log(`[GET] Request for ID: ${id}, Auth Header: ${authHeader ? "Found" : "Missing"}`);

    const res = await fetch(`https://backend-mauve-iota-64.vercel.app/api/users/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': authHeader || '',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      if (!res.ok) {
        return NextResponse.json({ error: data.error || 'Backend Error' }, { status: res.status });
      }
      return NextResponse.json(data);
    } else {
      const text = await res.text();
      return NextResponse.json({ error: 'Backend did not return JSON', details: text }, { status: res.status });
    }

  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// ==========================================================
// PUT: แก้ไขข้อมูล (จำกัดให้แก้ได้เฉพาะตัวเองเท่านั้น)
// ==========================================================
export async function PUT(request, { params }) {
  try {
    const { id } = await params; 
    const authHeader = request.headers.get('authorization');
    const body = await request.json();

    // 1. ตรวจสอบว่ามี Token หรือไม่ก่อนส่งไป Backend
    console.log(`[PUT] Attempt to update ID: ${id}, Auth Header: ${authHeader ? "Yes" : "No"}`);
    
    if (!authHeader) {
      return NextResponse.json({ error: 'กรุณาล็อกอินก่อนทำรายการ' }, { status: 401 });
    }

    // 2. ดึงข้อมูลโปรไฟล์ของคนที่ถือ Token นี้อยู่ปัจจุบัน
    const profileRes = await fetch(`https://backend-mauve-iota-64.vercel.app/api/profile`, {
      method: 'GET',
      headers: { 'Authorization': authHeader },
    });

    if (!profileRes.ok) {
      // หาก Profile คืนค่าไม่สำเร็จ มักเกิดจาก Token หมดอายุหรือ Secret ไม่ตรงกัน
      return NextResponse.json({ error: 'ยืนยันตัวตนล้มเหลว กรุณา Login ใหม่' }, { status: 401 });
    }

    const currentUser = await profileRes.json();

    // 3. ตรวจสอบว่า ID ที่จะแก้ ตรงกับ ID ของคนที่ Login อยู่จริงไหม
    if (currentUser.id.toString() !== id.toString()) {
      return NextResponse.json(
        { error: 'คุณไม่มีสิทธิ์แก้ไขข้อมูลของผู้อื่น' }, 
        { status: 403 }
      );
    }

    // 4. ถ้าผ่านเงื่อนไข ให้ส่งคำขอไปยัง Backend
    const res = await fetch(`https://backend-mauve-iota-64.vercel.app/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      if (!res.ok) {
        return NextResponse.json({ error: data.error || 'Update Failed' }, { status: res.status });
      }
      return NextResponse.json(data);
    } else {
      const text = await res.text();
      return NextResponse.json({ error: 'Backend error', details: text }, { status: res.status });
    }
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}