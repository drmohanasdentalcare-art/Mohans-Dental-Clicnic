'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/clinic', label: 'Clinic' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/location', label: 'Location' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.navLogo}>
          <div className={styles.logoIcon}><Image src="/asset/logo.jpeg" alt="Logo" width={44} height={44} style={{ borderRadius: '50%', objectFit: 'cover' }} /></div>
          <div className={styles.logoText}>
            <strong>Dr. Mohana&apos;s Dental Care</strong>
            <span>Every Tooth Counts</span>
          </div>
        </Link>
        <ul className={styles.navLinks}>
          {links.map(l => (
            <li key={l.href}><Link href={l.href} className={pathname === l.href ? styles.active : ''}>{l.label}</Link></li>
          ))}
          <li><a href="tel:9003227250" className={styles.navCta}>Book Now</a></li>
        </ul>
        <button className={styles.hamburger} onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.mobileClose} onClick={() => setMenuOpen(false)}>✕</button>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <a href="tel:9003227250" className={styles.navCta} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20 }}>📞 Book Appointment</a>
        </div>
      )}
    </>
  );
}
