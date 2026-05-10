import Image from 'next/image';
import Link from 'next/link';
import styles from './clinic.module.css';
import BookCTA from '../components/BookCTA';
import Reveal from '../components/Reveal';

export const metadata = { title: "Clinic | Dr. Mohana's Dental Care" };

const images = [
  { src: '/asset/infra.jpeg', caption: 'Modern Treatment Room' },
  { src: '/asset/pate.jpeg', caption: 'Patient Area' },
  { src: '/asset/rece.jpeg', caption: 'Reception' },
  { src: '/asset/drsit.jpeg', caption: 'Consultation Room' },
  { src: '/asset/outer.jpeg', caption: 'Clinic Exterior' },
];

const features = [
  { icon: '🦷', title: 'Digital X-Ray', desc: 'Instant, low-radiation imaging for precise diagnostics.' },
  { icon: '🔬', title: 'Sterilisation', desc: 'Class B autoclave sterilisation following international protocols.' },
  { icon: '💺', title: 'Comfortable Chairs', desc: 'Ergonomic dental chairs with built-in patient entertainment.' },
  { icon: '🌡️', title: 'Climate Controlled', desc: 'Fully air-conditioned clinic for a comfortable experience.' },
  { icon: '♿', title: 'Accessible', desc: 'Ground-floor access and wheelchair-friendly design.' },
  { icon: '🅿️', title: 'Parking', desc: 'Dedicated parking space available for patients.' },
];

export default function ClinicPage() {
  return (
    <>
      <div className="page-hero">
        <div>
          <h1>Our <em>Clinic</em></h1>
          <p className="breadcrumb"><Link href="/">Home</Link> / Clinic</p>
        </div>
      </div>
      <section className={styles.clinic}>
        <Reveal>
          <div className="section-label"><span>Infrastructure</span></div>
          <h2 className="section-title">World-Class <em>Facilities</em></h2>
        </Reveal>
        <div className={styles.gallery}>
          {images.map((img, i) => (
            <Reveal key={i}>
              <div className={styles.galleryItem}>
                <Image src={img.src} alt={img.caption} fill style={{ objectFit: 'cover' }} />
                <div className={styles.galleryCaption}><span>{img.caption}</span></div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className={styles.features}>
          {features.map((f, i) => (
            <Reveal key={i}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div><h4>{f.title}</h4><p>{f.desc}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <BookCTA />
    </>
  );
}
