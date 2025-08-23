'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Service() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
      </Head>

      <div className="cyber-container py-5">
        <div className="row text-center pb-5">
          <div className="col-lg-8 mx-auto">
            <h1 className="cyber-title">Rov Services</h1>
            <h3 className="cyber-subtitle">Report a problem</h3>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <Link href="https://support.garena.in.th/new/games/faqs/1/garena-rov#game_section" className="text-decoration-none">
              <div className="cyber-card-new cyber-card-new-dark shadow-sm h-100 text-white text-center d-flex flex-column align-items-center justify-content-center p-4">
                <Image src="/images/faq1.png" alt="FAQ" width={100} height={100} className="mb-3" />
                <h5 className="card-title-new">ปัญหาที่พบบ่อย</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4">
            <Link href="https://support.garena.in.th/new/games/report/1/garena-rov#game_section" className="text-decoration-none">
              <div className="cyber-card-new cyber-card-new-danger shadow-sm h-100 text-white text-center d-flex flex-column align-items-center justify-content-center p-4">
                <Image src="/images/report.png" alt="Report" width={100} height={100} className="mb-3" />
                <h5 className="card-title-new">แจ้งปัญหา</h5>
              </div>
            </Link>
          </div>
        </div>

        
        
      </div>

      <footer className="footer">
        © 2015 TencenT Games Inc. All rights reserved.
      </footer>

      <style jsx>{`
        .cyber-container {
          
        }

        .cyber-title {
          font-family: 'Orbitron', monospace;
          font-size: 3.5rem;
          font-weight: 900;
          text-transform: uppercase;
          margin: 3rem auto 1rem;
          color: #ff66cc;
          text-shadow: 0 0 8px #ff66cc, 0 0 16px #cc33ff;
          animation: glowPulse 2s ease-in-out infinite alternate;
        }

        .cyber-subtitle {
          font-family: 'Audiowide', monospace;
          color: #d9b3ff;
          text-shadow: 0 0 4px #cc33ff;
          letter-spacing: 0.05em;
        }

        .cyber-card-new {
          min-height: 250px;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 2px solid;
          position: relative;
          clip-path: polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%);
        }
        
        .cyber-card-new:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 0 25px, inset 0 0 15px !important;
        }

        .cyber-card-new-dark {
          background: rgba(40, 0, 70, 0.85);
          border-color: #cc33ff;
          box-shadow: 0 0 15px #cc33ff, inset 0 0 10px #ff66ff;
        }

        .cyber-card-new-dark:hover {
          background: linear-gradient(135deg, rgba(60, 0, 100, 0.9), rgba(40, 0, 70, 0.9));
          border-color: #ff66ff;
          box-shadow: 0 0 25px #ff66ff, inset 0 0 15px #cc33ff !important;
        }

        .cyber-card-new-danger {
          background: rgba(150, 0, 0, 0.85);
          border-color: #ff3333;
          box-shadow: 0 0 15px #ff3333, inset 0 0 10px #ff6666;
        }
        
        .cyber-card-new-danger:hover {
          background: linear-gradient(135deg, rgba(200, 0, 0, 0.9), rgba(150, 0, 0, 0.9));
          border-color: #ff6666;
          box-shadow: 0 0 25px #ff6666, inset 0 0 15px #ff3333 !important;
        }
        
        .card-title-new {
          font-family: 'Audiowide', monospace;
          font-size: 1.5rem;
          text-transform: uppercase;
          text-shadow: 0 0 6px #fff, 0 0 12px #ffcc00;
        }

        .btn-cyberpunk {
          display: inline-block;
          padding: 0.8rem 2.5rem;
          font-family: 'Audiowide', monospace;
          font-size: 1.2rem;
          text-transform: uppercase;
          text-decoration: none;
          color: #ffea00;
          background: transparent;
          border: 2px solid #ffea00;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 0 15px #ffea00;
          letter-spacing: 0.1em;
        }

        .btn-cyberpunk:hover {
          color: #fff;
          background: #ffea00;
          border-color: #ffea00;
          box-shadow: 0 0 25px #ffea00, 0 0 50px #ffea00;
          transform: scale(1.05);
        }

        .footer {
          text-align: center;
          padding: 1.5rem 1rem;
          color: #fff;
          font-family: 'Audiowide', monospace;
          font-size: 0.9rem;
          text-shadow: 0 0 8px #cc33ff, 0 0 20px #9933ff;
          user-select: none;
          letter-spacing: 0.05em;
          margin-top: 3rem;
          border-radius: 0 0 12px 12px;
        }

        @keyframes glowPulse {
          0% {
            text-shadow: 0 0 8px #ff66cc, 0 0 16px #cc33ff;
          }
          100% {
            text-shadow: 0 0 12px #ff66cc, 0 0 24px #cc33ff;
          }
        }
      `}</style>
    </>
  );
}