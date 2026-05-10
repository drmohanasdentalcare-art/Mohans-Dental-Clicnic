import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { services } from './data/services';
import { reviews, GOOGLE_MAPS_URL } from './data/reviews';
import BookCTA from './components/BookCTA';
import Reveal from './components/Reveal';
import ServiceImageSlider from './components/ServiceImageSlider';

const featuredReviews = reviews.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroDecor} />
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <div className={styles.dot} />
            <span>Specialist Dental Care in Adyar</span>
          </div>
          <h1>Every tooth<br /><em>counts.</em></h1>
          <p className={styles.heroSub}>Comprehensive dental treatments tailored to your unique needs — from routine care to advanced implant surgery — all under one roof.</p>
          <div className={styles.heroDoctor}>
            <strong>Dr. D. Mohanalakshmi, M.D.S</strong>
            <span>Prosthodontist &amp; Implantologist</span>
          </div>
          <div className={styles.heroActions}>
            <a href="tel:9003227250" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
              Book Appointment
            </a>
            <Link href="/services" className="btn-outline">Our Services</Link>
          </div>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}><div className={styles.statNumber}>15+</div><div className={styles.statLabel}>Years Experience</div></div>
          <div className={styles.stat}><div className={styles.statNumber}>4.9</div><div className={styles.statLabel}>Google Rating</div></div>
        </div>
      </section>

      {/* ABOUT */}
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
              <p>Our practice covers the full spectrum of dental treatment — from routine cleanings and root canals to full-mouth rehabilitations, implant-supported prostheses, and cosmetic smile design.</p>
              <div className={styles.highlights}>
                <div className={styles.highlight}><div className={styles.highlightNum}>15+</div><div className={styles.highlightLabel}>Years</div></div>
                <div className={styles.highlight}><div className={styles.highlightNum}>4.9★</div><div className={styles.highlightLabel}>Google</div></div>
                <div className={styles.highlight}><div className={styles.highlightNum}>10k+</div><div className={styles.highlightLabel}>Patients</div></div>
              </div>
              <div className={styles.quote}>
                &ldquo;Every tooth has a story. I believe in listening — to the patient and to the tooth — before I treat.&rdquo;
                <span className={styles.quoteAuthor}>— Dr. D. Mohanalakshmi</span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link href="/about" className="btn-outline">Learn More About Us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <div className={styles.servicesBg}>
          <div className={styles.servicesOrb1} />
          <div className={styles.servicesOrb2} />
          <div className={styles.servicesOrb3} />
        </div>
        <Reveal>
          <div className="section-label"><span>What We Offer</span></div>
          <h2 className="section-title">Dental <em>Services</em></h2>
          <p className={styles.servicesSub}>From routine check-ups to advanced restorations — everything your smile needs, under one roof.</p>
        </Reveal>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <Reveal key={i}>
              <div className={`${styles.serviceCard} ${s.special ? styles.serviceCardSpecial : ''}`}>
                {s.images.length > 0 && (
                  <div className={styles.serviceCardImage}>
                    <ServiceImageSlider images={s.images} alt={s.name} />
                  </div>
                )}
                <div className={styles.serviceCardBody}>
                  <div className={styles.serviceCardNum}>{s.isGeneral ? '+' : String(i + 1).padStart(2, '0')}</div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/services" className="btn-primary">View All Services</Link>
          </div>
        </Reveal>
      </section>

      {/* CLINIC GLIMPSE */}
      <section className={styles.clinicGlimpse}>
        <Reveal>
          <div className="section-label"><span>Infrastructure</span></div>
          <h2 className="section-title">Our <em>Clinic</em></h2>
        </Reveal>

        {/* Big hero image */}
        <Reveal>
          <div className={styles.clinicHero}>
            <Image src="/asset/infra.jpeg" alt="Our modern dental clinic" fill style={{ objectFit: 'cover' }} sizes="100vw" />
            <div className={styles.clinicHeroOverlay}>
              <h3>World-class Infrastructure</h3>
              <p>Step into a modern, hygienic and welcoming clinic designed for your comfort. From the reception to the treatment chair, every element is crafted to make your dental visit a pleasant experience.</p>
            </div>
          </div>
        </Reveal>

        {/* Small gallery strip */}
        <div className={styles.clinicGallery}>
          {[
            { src: '/asset/rece.jpeg', cap: 'Reception' },
            { src: '/asset/drsit.jpeg', cap: 'Consultation' },
            { src: '/asset/outer.jpeg', cap: 'Exterior' },
            { src: '/asset/pate.jpeg', cap: 'Patient Area' },
          ].map((img, i) => (
            <Reveal key={i}>
              <div className={styles.clinicImg}>
                <Image src={img.src} alt={img.cap} fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, 25vw" />
                <div className={styles.clinicCaption}><span>{img.cap}</span></div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Feature cards */}
        <Reveal>
          <div className={styles.clinicFeatures}>
            {[
              { icon: '🛡️', title: 'Sterilised Equipment', desc: 'All instruments follow strict sterilisation protocols for maximum safety.' },
              { icon: '📷', title: 'Digital X-Rays', desc: 'Low-radiation digital imaging for precise, fast diagnosis.' },
              { icon: '🏡', title: 'Comfortable Ambience', desc: 'A calm, welcoming space that eases dental anxiety.' },
              { icon: '💺', title: 'Modern Dental Chair', desc: 'Ergonomic, fully adjustable chair for patient comfort.' },
              { icon: '💡', title: 'Advanced Technology', desc: 'Latest dental technology for accurate, efficient treatments.' },
              { icon: '👩‍⚕️', title: 'Friendly Staff', desc: 'Caring, trained staff to assist and guide you through every visit.' },
            ].map((f, i) => (
              <div className={styles.featureCard} key={i}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <strong>{f.title}</strong>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/clinic" className="btn-outline">Explore Our Clinic</Link>
          </div>
        </Reveal>
      </section>

      {/* EXCELLENCE */}
      <section className={styles.excellence}>
        <div className={styles.excellenceGrid}>
          <Reveal>
            <div className={styles.excellenceVideo}>
              <video autoPlay muted loop playsInline>
                <source src="/asset/background videos landing apge .mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.excellenceContent}>
              <h2 className={styles.excellenceTitle}>Excellence in<br />every <em>smile.</em></h2>
              <p className={styles.excellenceDesc}>We combine advanced dental technology with compassionate care. Every patient receives personalized treatment in a comfortable, modern environment.</p>
              <div className={styles.excellenceFeatures}>
                <div className={styles.excellenceFeature}>
                  <div className={styles.excellenceIcon}>👩‍⚕️</div>
                  <strong>Certified Dentists</strong>
                  <p>Team of highly qualified professionals</p>
                </div>
                <div className={styles.excellenceFeature}>
                  <div className={styles.excellenceIcon}>🔬</div>
                  <strong>Latest Technology</strong>
                  <p>State-of-the-art dental equipment</p>
                </div>
                <div className={styles.excellenceFeature}>
                  <div className={styles.excellenceIcon}>🤝</div>
                  <strong>Patient Care</strong>
                  <p>Personalized treatment for each patient</p>
                </div>
                <div className={styles.excellenceFeature}>
                  <div className={styles.excellenceIcon}>⚡</div>
                  <strong>Fast Results</strong>
                  <p>Advanced techniques for quick healing</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <Reveal>
          <div className="section-label"><span>Testimonials</span></div>
          <h2 className="section-title">What Our <em>Patients Say</em></h2>
        </Reveal>
        <div className={styles.reviewGrid}>
          {featuredReviews.map((r, i) => (
            <Reveal key={i}>
              <div className={styles.reviewCard}>
                <div className={styles.reviewStars}>★★★★★</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className={styles.reviewAuthor}>
                  <div className={styles.reviewAvatar}>{r.initials}</div>
                  <div><strong>{r.name}</strong><span>{r.timeAgo} · Google Review</span></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/testimonials" className="btn-outline">View All {reviews.length} Testimonials</Link>
          </div>
        </Reveal>
      </section>

      {/* LOCATION */}
      <section className={styles.locationPreview}>
        <Reveal>
          <div className="section-label"><span>Visit Us</span></div>
          <h2 className="section-title">Our <em>Location</em></h2>
        </Reveal>
        <div className={styles.locationWrap}>
          <Reveal>
            <div className={styles.mapContainer}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.11742740868!2d80.2602368!3d13.0048895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677dabb1886b%3A0x41b6bf12fd236233!2sDr.Mohana%27s%20Dental%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" allowFullScreen loading="lazy" title="Clinic Location" />
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.locationInfo}>
              <h3>Dr. Mohana&apos;s Dental Care</h3>
              <p>📍 No. 41/5, Karpagam Gardens, 1st Main Road, Adyar, Chennai – 600 020</p>
              <p>📞 <a href="tel:9003227250" style={{ color: 'var(--sage)', textDecoration: 'none' }}>90032 27250</a></p>
              <p>⭐ Rated 4.9/5 by our lovely patients</p>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>View on Maps</a>
            </div>
          </Reveal>
        </div>
      </section>

      <BookCTA />
    </>
  );
}
