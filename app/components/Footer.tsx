import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.navLogo}>
            <div className={styles.logoIcon}><Image src="/asset/logo.jpeg" alt="Logo" width={44} height={44} style={{ borderRadius: '50%', objectFit: 'cover' }} /></div>
            <div className={styles.logoText}><strong>Dr. Mohana&apos;s Dental Care</strong><span>Every Tooth Counts</span></div>
          </Link>
          <p>A specialist dental clinic in Adyar, Chennai providing a full range of dental treatments under the care of Dr. D. Mohanalakshmi, M.D.S — Prosthodontist &amp; Implantologist.</p>
        </div>
        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/services">Root Canal Treatment</Link></li>
            <li><Link href="/services">Crown &amp; Bridge</Link></li>
            <li><Link href="/services">Orthodontic Braces</Link></li>
            <li><Link href="/services">Dental Implants</Link></li>
            <li><Link href="/services">Invisible Aligners</Link></li>
            <li><Link href="/services">Cosmetic Dentistry</Link></li>
            <li><Link href="/services">Child Dentistry</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Contact</h4>
          <ul>
            <li className={styles.contactItem}>
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" /></svg>
              <a href="tel:9003227250">Call: 90032 27250</a>
            </li>
            <li className={styles.contactItem}>
              <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
              <a href="tel:7550089819">WhatsApp: 75500 89819</a>
            </li>
            <li className={styles.contactItem}>
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <a href="mailto:drmohanasdentalcare@gmail.com">drmohanasdentalcare@gmail.com</a>
            </li>
            <li className={styles.contactItem}>
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              <a href="https://www.instagram.com/dr.mohanasdentalcare" target="_blank">@dr.mohanasdentalcare</a>
            </li>
            <li className={styles.contactItem}>
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>No. 41/5, Karpagam Gardens,<br />1st Main Road, Adyar, Chennai</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2025 Dr. Mohana&apos;s Dental Care. All rights reserved.</p>
        <p className={styles.tagline}>Every tooth counts.</p>
      </div>
    </footer>
  );
}
