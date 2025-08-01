// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './component/navigation';

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
        <link rel="preload" as="video" href="/video/Violet.mp4" type="video/mp4" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
