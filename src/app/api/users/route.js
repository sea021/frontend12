import { NextResponse } from 'next/server';

// 1. GET: ดึงรายชื่อผู้ใช้ทั้งหมด
export async function GET(request) {
  try {
    // ดึง Authorization Header จาก Frontend
    const authHeader = request.headers.get('authorization');

    const res = await fetch('https://backend-mauve-iota-64.vercel.app/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader || '',
      },
      cache: 'no-store',
    });

    const data = await res.json();

    if (res.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json(
        { error: data.message || 'Failed to fetch users' },
        { status: res.status }
      );
    }
  } catch (error) {
    console.error('API GET Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// 2. DELETE: ลบผู้ใช้ตาม ID
export async function DELETE(request) {
  try {
    const authHeader = request.headers.get('authorization');
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
    }

    const res = await fetch(`https://backend-mauve-iota-64.vercel.app/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': authHeader || '',
      },
    });

    if (res.ok) {
      return NextResponse.json({ message: 'Deleted successfully' });
    } else {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || 'Failed to delete user' },
        { status: res.status }
      );
    }
  } catch (error) {
    console.error('API DELETE Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}