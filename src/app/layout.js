// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './component/navigation'; // ใช้ชื่อไฟล์ navigation.js ตามจริง

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Your Project Title",
  description: "Your project description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* preload video ให้ตรงกับ Navbar */}
        <link rel="preload" as="video" href="/video/Violet2.mp4" type="video/mp4" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ minHeight: '100vh' }}>
        {/* Navbar Cyberpunk */}
        <Navigation />
        
        {/* หน้า content ของแต่ละหน้า */}
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
