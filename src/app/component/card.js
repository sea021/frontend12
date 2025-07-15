'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Card.css'; // 👉 อย่าลืมสร้างไฟล์นี้ด้านล่าง

export default function Card() {
  return (
    <div className="row justify-content-center">

      {/* การ์ดใบที่ 1 */}
      <div className="col-md-2 mb-4">
        <div className="card shadow-sm h-100 rounded-4">
          <Image className="card-img-top" src="/images/imgcard1.png" alt="..." width={200} height={200} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-primary">Give away the cat warp code</h5>
            <p className="card-text">รวมช่องคนดัง แจกโค้ดท่าวาร์ปแมวปั่นฟรี!</p>
            <Link href="https://rov.in.th/articles/cat-warp-effect" className="btn btn-warning mt-auto fw-bold custom-btn">
              Learn more!!
            </Link>
          </div>
        </div>
      </div>

      {/* การ์ดใบที่ 2 */}
      <div className="col-md-2 mb-4">
        <div className="card shadow-sm h-100 rounded-4">
          <Image className="card-img-top" src="/images/imgcard2.jpg" alt="..." width={200} height={200}/>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-success">Hero balance adjustments</h5>
            <p className="card-text">ปรับสมดุลฮีโร่ ประจำวันที่ 5 มิถุนายน 2568</p>
            <Link href="https://rov.in.th/patch-notes/balance06052025" className="btn btn-warning mt-auto fw-bold custom-btn">
              Learn more!!
            </Link>
          </div>
        </div>
      </div>

      {/* การ์ดใบที่ 3 */}
      <div className="col-md-2 mb-4">
        <div className="card shadow-sm h-100 rounded-4">
          <Image className="card-img-top" src="/images/imgcard3.jpg" alt="..." width={200} height={200}/>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-warning">RoV Comic Season 2</h5>
            <p className="card-text">RoV Comic Season 2 | ตอนที่ 13 การตัดสินใจ</p>
            <Link href="https://rov.in.th/articles/comicss2-ch13" className="btn btn-warning mt-auto fw-bold custom-btn">
              Learn more!!
            </Link>
          </div>
        </div>
      </div>

      {/* การ์ดใบที่ 4 */}
      <div className="col-md-2 mb-4">
        <div className="card shadow-sm h-100 rounded-4">
          <Image className="card-img-top" src="/images/imgcard4.jpg" alt="..." width={200} height={200}/>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-danger">Announcing the lucky winner</h5>
            <p className="card-text">ประกาศผู้โชคดี ร้านหมูกระทะกายหงิด</p>
            <Link href="https://rov.in.th/announcements/mookrata" className="btn btn-warning mt-auto fw-bold custom-btn">
              Learn more!!
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
