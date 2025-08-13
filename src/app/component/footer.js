'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-5 mt-5 bg-light shadow-sm" style={{ borderRadius: '1rem' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <Link href="/" className="d-inline-block mb-3">
                <Image src="/images/logo_rov.png" alt="Logo" width={160} height={160} />
            </Link>
            <p className="text-muted">
            
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase fw-bold mb-4">Links</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link href="/" className="text-muted text-decoration-none">Home</Link>
              </li>
               <li className="mb-2">
                <Link href="/about" className="text-muted text-decoration-none">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/service" className="text-muted text-decoration-none">Service</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-muted text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase fw-bold mb-4">Follow Us</h5>
            <div>
              <a href="https://www.facebook.com/ROVTH/" className="text-muted me-3 text-decoration-none fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/garena_rov_official/" className="text-muted me-3 text-decoration-none fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCy19QXxbCHh8qVVCbuGk-ig" className="text-muted text-decoration-none fs-4">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase fw-bold mb-4">Newsletter</h5>
            <p className="text-muted">Subscribe to get our latest updates.</p>
            <form action="#">
              <div className="input-group">
                <input type="email" placeholder="Your email" aria-label="Your email" className="form-control" />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-top pt-4 mt-5">
          <p className="text-center text-muted mb-0">© 2015 TencenT Games Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
