import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import BookCTA from '../components/BookCTA';
import Reveal from '../components/Reveal';

export const metadata = { title: "About | Dr. Mohana's Dental Care" };

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div>
          <h1>About the <em>Practice</em></h1>
          <p className="breadcrumb"><Link href="/">Home</Link> / About</p>
        </div>
      </div>
      <section className={styles.about}>
        <Reveal>
          <div className="section-label"><span>The Practice</span></div>
          <h2 className="section-title">About <em>Our Clinic</em></h2>
        </Reveal>
        <div className={styles.aboutCard}>
          <Reveal>
            <div className={styles.aboutImg}>
              <Image src="/asset/doctorphoto.jpeg" alt="Dr. D. Mohanalakshmi" fill style={{ objectFit: 'cover' }} />
              <div className={styles.aboutOverlay}>
                <strong>Dr. D. Mohanalakshmi</strong>
                <span>M.D.S — Prosthodontist</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.aboutRight}>
              <h3>Specialist care for lasting smiles</h3>
              <p>Dr. D. Mohanalakshmi (M.D.S — Prosthodontics, Crown &amp; Bridge) is a specialist in restoring teeth and designing smiles. With over 15 years of clinical experience, she combines precision with a gentle, patient-first approach.</p>
              <p>Our practice covers the full spectrum of dental treatment — from routine cleanings and root canals to full-mouth rehabilitations, implant-supported prostheses, and cosmetic smile design — all performed in a calm, modern environment.</p>
              
              <div className={styles.achievements}>
                <div className={styles.achievement}>
                  <span className={styles.achievementYear}>2007</span>
                  <span>College topper in Endodontics and Pedodontics in Final year BDS exam</span>
                </div>
                <div className={styles.achievement}>
                  <span className={styles.achievementYear}>2016</span>
                  <span>University topper in First year MDS exam</span>
                </div>
                <div className={styles.achievement}>
                  <span className={styles.achievementYear}>2019</span>
                  <span>First class in Final year MDS exam</span>
                </div>
              </div>
              <div className={styles.highlights}>
                <div className={styles.highlight}><div className={styles.highlightNum}>15+</div><div className={styles.highlightLabel}>Years</div></div>
                <div className={styles.highlight}><div className={styles.highlightNum}>4.9★</div><div className={styles.highlightLabel}>Google</div></div>
                <div className={styles.highlight}><div className={styles.highlightNum}>10k+</div><div className={styles.highlightLabel}>Patients</div></div>
              </div>
              <div className={styles.quote}>
                &ldquo;Every tooth has a story. I believe in listening — to the patient and to the tooth — before I treat.&rdquo;
                <span className={styles.quoteAuthor}>— Dr. D. Mohanalakshmi</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <BookCTA />
    </>
  );
}
