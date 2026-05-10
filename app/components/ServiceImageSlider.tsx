'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './ServiceImageSlider.module.css';

interface Props {
  images: string[];
  alt: string;
}

export default function ServiceImageSlider({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [images.length, next]);

  if (images.length === 0) return null;

  return (
    <div className={styles.slider}>
      {images.map((src, i) => (
        <div key={src} className={`${styles.slide} ${i === current ? styles.active : ''}`}>
          <Image src={src} alt={`${alt} ${i + 1}`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, 400px" />
        </div>
      ))}
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => setCurrent(i)} aria-label={`Image ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}
