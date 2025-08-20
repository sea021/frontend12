import { NextResponse } from 'next/server';

// GET: ดึงรายชื่อผู้ใช้
export async function GET() {
  try {
    const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users');
    const data = await res.json();
    if (res.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: data.message || 'Failed to fetch users' }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// DELETE: ลบผู้ใช้ตาม id
export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id'); // รับ id จาก query string

    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

    const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      return NextResponse.json({ message: 'Deleted successfully' });
    } else {
      return NextResponse.json({ error: 'Failed to delete user' }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
