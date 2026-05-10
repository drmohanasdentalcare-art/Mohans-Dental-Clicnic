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
            <li><a href="tel:9003227250">90032 27250</a></li>
            <li><a href="tel:7550089819">7550089819</a></li>
            <li><a href="mailto:drmohanasdentalcare@gmail.com">Email Us</a></li>
            <li><span className={styles.address}>No. 41/5, Karpagam Gardens,<br/>1st Main Road, Adyar, Chennai</span></li>
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
