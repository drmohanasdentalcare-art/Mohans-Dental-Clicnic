'use client';
import { useEffect, useState } from 'react';
import styles from './FloatingButtons.module.css';

export default function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={styles.wrap} style={{ opacity: show ? 1 : 0, pointerEvents: show ? 'auto' : 'none' }}>
      <a href="tel:9003227250" className={styles.btn}>
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="#fff" fill="none" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
        Call Now
      </a>
      <a href="https://wa.me/917550089819?text=Hello%20Dr.%20Mohana%2C%20I%20would%20like%20to%20book%20an%20appointment%20today." target="_blank" className={`${styles.btn} ${styles.whatsapp}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" stroke="none"><path d="M12.032 2c-5.065 0-9.177 4.112-9.178 9.176a9.12 9.12 0 001.322 4.607L2.2 21.8l5.857-1.522a9.09 9.09 0 004.472 1.218h.004c5.065 0 9.178-4.112 9.178-9.177S17.097 2 12.032 2z"/></svg>
        WhatsApp
      </a>
    </div>
  );
}
