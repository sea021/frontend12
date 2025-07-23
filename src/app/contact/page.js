'use client';

import React from 'react';

export default function Contact() {
  return (
    <>  
      <div className="contact-wrapper container py-5 fade-up">
        <div className="row text-center pb-4">
          <div className="col-lg-8 mx-auto">
            <h1 className="contact-title">Contact Us</h1>
            <p className="text-desc">
              We&apos;d love to hear from you! Fill out the form below to get in touch.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form className="contact-form fade-up delay-1">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control custom-input" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control custom-input" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control custom-input" id="message" rows={5} required />
              </div>
              <button type="submit" className="btn-submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="row text-center pt-5 fade-up delay-2">
          <div className="col-lg-8 mx-auto">
            <h5 className="text-muted text-white">You can also reach us at:</h5>
            <p className="text-muted text-white">rov.in.th</p>
          </div>
        </div>
      </div>

      {/* 🎨 Style */}
      <style jsx>{`
        .contact-wrapper {
          background: rgba(15, 0, 30, 0.95);
          border-radius: 16px;
          padding: 3rem 2rem;
          box-shadow: 0 0 30px #cc33ff;
          color: #fff;
          font-family: 'Audiowide', sans-serif;
          margin-top: 3rem;
          margin-bottom: 3rem;
        }

        .contact-title {
          font-size: 2.5rem;
          color: #ff66cc;
          text-shadow: 0 0 10px #ff66cc, 0 0 20px #9933ff;
          animation: glowPulse 2s infinite alternate;
        }

        .text-desc {
          color: #d9b3ff;
          font-size: 1.1rem;
        }

        .form-label {
          color: #ffccff;
        }

        .custom-input {
          background-color: #1a1a1a;
          color: #fff;
          border: none;
          border-radius: 8px;
          box-shadow: 0 0 10px #6600cc;
          padding: 0.75rem;
        }

        .custom-input:focus {
          box-shadow: 0 0 20px #cc33ff;
          background-color: #222;
        }

        .btn-submit {
          background: linear-gradient(90deg, #cc33ff, #6600ff);
          color: #fff;
          padding: 0.8rem 1.6rem;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .btn-submit:hover {
          background: linear-gradient(90deg, #ff33cc, #9933ff);
          transform: scale(1.05);
          box-shadow: 0 0 25px #ff66ff;
        }

        @keyframes glowPulse {
          0% { text-shadow: 0 0 10px #ff66cc, 0 0 20px #9933ff; }
          100% { text-shadow: 0 0 25px #ff66ff, 0 0 35px #cc33ff; }
        }

        /* ✅ Smooth fade-up animation */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 1s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.4s;
        }

        .delay-2 {
          animation-delay: 0.8s;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
