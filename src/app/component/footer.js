'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* เพิ่ม CDN ของ Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />

      <footer className="py-5 mt-5 bg-light shadow-sm" style={{ borderRadius: '1rem' }}>
        <div className="container">
          <div className="row">

            {/* Logo */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 text-center text-md-start">
              <Link href="/" className="d-inline-block mb-3">
                <Image
                  src="/images/logo_rov.png"
                  alt="Logo"
                  width={120}
                  height={120}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Link>
              <p className="text-muted">ARENA OF VALOR</p>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 text-center text-md-start">
              <h5 className="text-uppercase fw-bold mb-3">Links</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><Link href="/" className="text-muted text-decoration-none">Home</Link></li>
                <li className="mb-2"><Link href="/about" className="text-muted text-decoration-none">About</Link></li>
                <li className="mb-2"><Link href="/service" className="text-muted text-decoration-none">Service</Link></li>
                <li className="mb-2"><Link href="/contact" className="text-muted text-decoration-none">Contact</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 text-center text-md-start">
              <h5 className="text-uppercase fw-bold mb-3">Follow Us</h5>
              <div>
                <Link href="https://www.facebook.com/ROVTH/" className="text-muted me-3 fs-4">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link href="https://www.instagram.com/garena_rov_official/" className="text-muted me-3 fs-4">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link href="https://www.youtube.com/channel/UCy19QXxbCHh8qVVCbuGk-ig" className="text-muted fs-4">
                  <i className="bi bi-youtube"></i>
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6 text-center text-md-start">
              <h5 className="text-uppercase fw-bold mb-3">Newsletter</h5>
              <p className="text-muted">Subscribe to get our latest updates.</p>
              <form>
                <div className="input-group">
                  <input type="email" placeholder="Your email" aria-label="Your email" className="form-control" />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </form>
            </div>

          </div>

          <div className="border-top pt-4 mt-5 text-center">
            <p className="text-muted mb-0">© 2015 TencenT Games Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
