'use client';
import { Geist, Geist_Mono } from "next/font/google";
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './component/navigation';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-12 p-2">
              <Navigation />
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
