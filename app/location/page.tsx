import Link from 'next/link';
import { GOOGLE_MAPS_URL } from '../data/reviews';
import styles from './location.module.css';
import BookCTA from '../components/BookCTA';
import Reveal from '../components/Reveal';

export const metadata = { title: "Location | Dr. Mohana's Dental Care" };

export default function LocationPage() {
  return (
    <>
      <div className="page-hero">
        <div>
          <h1>Our <em>Location</em></h1>
          <p className="breadcrumb"><Link href="/">Home</Link> / Location</p>
        </div>
      </div>
      <section className={styles.location}>
        <Reveal>
          <div className="section-label"><span>Visit Us</span></div>
          <h2 className="section-title">Our <em>Location</em></h2>
        </Reveal>
        <div className={styles.wrapper}>
          <Reveal>
            <div className={styles.mapWrap}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.11742740868!2d80.2602368!3d13.0048895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677dabb1886b%3A0x41b6bf12fd236233!2sDr.Mohana%27s%20Dental%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" allowFullScreen loading="lazy" title="Clinic Location" />
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.info}>
              <h3>Dr. Mohana&apos;s Dental Care</h3>
              <p>📍 No. 41/5, Karpagam Gardens, 1st Main Road, Adyar, Chennai – 600 020</p>
              <p>📞 <a href="tel:9003227250">90032 27250</a></p>
              <p>⭐ Rated 4.9/5 by our lovely patients — Your smile is our priority!</p>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.reviewLink}>
                📍 View on Google Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <BookCTA />
    </>
  );
}
