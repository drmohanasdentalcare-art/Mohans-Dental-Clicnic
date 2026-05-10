import Link from 'next/link';
import styles from './contact.module.css';
import BookCTA from '../components/BookCTA';
import Reveal from '../components/Reveal';

export const metadata = { title: "Contact | Dr. Mohana's Dental Care" };

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div>
          <h1>Hours &amp; <em>Contact</em></h1>
          <p className="breadcrumb"><Link href="/">Home</Link> / Contact</p>
        </div>
      </div>
      <section className={styles.contact}>
        <Reveal>
          <div className="section-label"><span>Find Us</span></div>
          <h2 className="section-title">Hours &amp; <em>Contact</em></h2>
        </Reveal>
        <div className={styles.grid}>
          <Reveal>
            <div className={styles.block}>
              <h3>Consulting Hours</h3>
              <div className={styles.hoursRow}><span className={styles.hoursDay}>Monday – Saturday</span><div><div className={styles.hoursTime}>10:00 AM – 1:00 PM</div><div className={styles.hoursTime}>5:30 PM – 8:30 PM</div></div></div>
              <div className={styles.hoursRow}><span className={styles.hoursDay}>Sunday</span><span className={styles.hoursClosed}>Holiday</span></div>
              <div style={{ marginTop: 32 }}>
                <a href="tel:9003227250" className="btn-primary" style={{ display: 'inline-flex' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
                  Call to Book
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.block}>
              <h3>Get in Touch</h3>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg></div>
                <div className={styles.contactInfo}><strong>Phone / Appointment</strong><a href="tel:9003227250">90032 27250</a></div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div className={styles.contactInfo}><strong>Clinic Address</strong><span>No. 41/5, Karpagam Gardens,<br/>1st Main Road, Adyar, Chennai – 600 020</span></div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                <div className={styles.contactInfo}><strong>Email</strong><a href="mailto:drmohanasdentalcare@gmail.com">drmohanasdentalcare@gmail.com</a></div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></div>
                <div className={styles.contactInfo}><strong>Instagram</strong><a href="https://www.instagram.com/dr.mohanasdentalcare" target="_blank">@dr.mohanadentalcare</a></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <BookCTA />
    </>
  );
}
