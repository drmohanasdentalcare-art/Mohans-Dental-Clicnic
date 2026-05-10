import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export const metadata: Metadata = {
  title: "Dr. Mohana's Dental Care | Every Tooth Counts",
  description: 'Comprehensive dental treatments by a specialist in Adyar, Chennai — from routine care to advanced implants and cosmetic procedures.',
  icons: {
    icon: '/asset/logo.jpeg',
    apple: '/asset/logo.jpeg',
  },
  openGraph: {
    title: "Dr. Mohana's Dental Care",
    description: 'Specialist dental clinic in Adyar, Chennai — Prosthodontics, Implants & Cosmetic Dentistry by Dr. D. Mohanalakshmi, M.D.S',
    images: [{ url: '/asset/logo.jpeg', width: 512, height: 512, alt: "Dr. Mohana's Dental Care Logo" }],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
