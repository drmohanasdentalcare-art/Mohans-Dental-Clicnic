import Link from 'next/link';
import { services } from '../data/services';
import styles from './services.module.css';
import BookCTA from '../components/BookCTA';
import Reveal from '../components/Reveal';
import ServiceImageSlider from '../components/ServiceImageSlider';

export const metadata = { title: "Services | Dr. Mohana's Dental Care" };

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div>
          <h1>Our <em>Services</em></h1>
          <p className="breadcrumb"><Link href="/">Home</Link> / Services</p>
        </div>
      </div>
      <section className={styles.services}>
        <Reveal>
          <div className="section-label"><span>What We Offer</span></div>
          <h2 className="section-title">Dental <em>Services</em></h2>
        </Reveal>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <Reveal key={i}>
              <div className={`${styles.card} ${s.special ? styles.specialCard : ''}`}>
                {s.images.length > 0 && (
                  <div className={styles.cardImage}>
                    <ServiceImageSlider images={s.images} alt={s.name} />
                  </div>
                )}
                <div className={styles.cardContent}>
                  <div className={styles.cardNum}>{s.isGeneral ? '+' : String(i + 1).padStart(2, '0')}</div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <BookCTA />
    </>
  );
}
