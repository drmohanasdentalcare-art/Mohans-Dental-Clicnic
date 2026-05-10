import Link from 'next/link';
import { reviews, GOOGLE_MAPS_URL } from '../data/reviews';
import styles from './testimonials.module.css';
import BookCTA from '../components/BookCTA';
import Reveal from '../components/Reveal';

export const metadata = { title: "Testimonials | Dr. Mohana's Dental Care" };

export default function TestimonialsPage() {
  return (
    <>
      {/* Full-page video background wrapper */}
      <div className={styles.pageWrapper}>
        <div className={styles.videoBg}>
          <video autoPlay muted loop playsInline className={styles.bgVideo}>
            <source src="/asset/background videos -1.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
          <div className={styles.videoFadeTop} />
          <div className={styles.videoFadeBottom} />
          <div className={styles.videoFadeLeft} />
          <div className={styles.videoFadeRight} />
        </div>

        {/* Hero */}
        <div className={styles.hero}>
          <div style={{ position: 'relative', zIndex: 3 }}>
            <h1>Patient <em>Stories</em></h1>
            <p className="breadcrumb"><Link href="/">Home</Link> / Testimonials</p>
          </div>
        </div>

        {/* Testimonials content */}
        <section className={styles.testimonials}>
          <Reveal>
            <div style={{ position: 'relative', zIndex: 3 }}>
              <div className="section-label"><span>Testimonials</span></div>
              <h2 className="section-title">What Our <em>Patients Say</em></h2>
              <p className={styles.reviewCount}>{reviews.length} verified Google reviews · ⭐ 4.9/5 rating</p>
            </div>
          </Reveal>
          <div className={styles.grid}>
            {reviews.map((r, i) => (
              <Reveal key={i}>
                <div className={styles.card}>
                  <div className={styles.stars}>★★★★★</div>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <div className={styles.author}>
                    <div className={styles.avatar}>{r.initials}</div>
                    <div className={styles.authorInfo}>
                      <strong>{r.name}</strong>
                      <span>{r.timeAgo} · Google Review</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.reviewLink}>
                ⭐ Read All Reviews on Google Maps →
              </a>
            </div>
          </Reveal>
        </section>
      </div>
      <BookCTA />
    </>
  );
}
