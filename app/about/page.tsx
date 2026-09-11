"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Zap, ShieldCheck, Wind, Truck, Wifi, ParkingSquare,
  ArrowRight, Train, TrainFront, MapPin
} from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import styles from './about.module.css';

/* ── Animated counter ─────────────────────────────────── */
function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 80;
    const inc = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* ── Fade-up motion wrapper ───────────────────────────── */
const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

/* ── Page ────────────────────────────────────────────── */
export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '25%']);

  return (
    <>
      <Navbar />
      <div className={styles.page}>

        {/* ══════════════════ 1. HERO ══════════════════ */}
        <section className={styles.hero} ref={heroRef}>
          <motion.div className={styles.heroBg} style={{ y: heroY }}>
            <Image
              src="/herosection2.png"
              alt="HP Market Central Delhi"
              fill
              priority
              sizes="100vw"
            />
          </motion.div>
          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <motion.span
              className={styles.heroBadge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              ✦ &nbsp; Central Delhi's Premier Commercial Hub
            </motion.span>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              The Heart of<br />Old Delhi,<br /><span>Reimagined.</span>
            </motion.h1>

            <motion.p
              className={styles.heroPara}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              HP Market is more than a commercial building. It's a purpose-built
              ecosystem that brings modern infrastructure to the beating heart of
              Old Delhi's legendary trade district.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Link href="/contact" className={styles.heroLink}>
                Book a Site Visit <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className={styles.scrollDown}>
            <span>Scroll</span>
            <div className={styles.scrollLine} />
          </div>
        </section>

        {/* ══════════════════ 2. STORY ══════════════════ */}
        <section className={styles.storySection}>
          <div className={styles.storyInner}>
            <FadeUp>
              <span className={styles.eyebrow}>Our Story / 01</span>
              <h2 className={styles.storyTitle}>
                Old Delhi Has Always Been About Business.
              </h2>
              <p className={styles.storyPara}>
                For centuries, the lanes of Old Delhi have hummed with the energy
                of trade. From spice merchants to textile wholesalers, this is
                where India's commercial DNA was written. Chandni Chowk, Asaf Ali
                Road, Ajmeri Gate — these aren't just streets, they are institutions.
              </p>
              <p className={styles.storyPara}>
                But as the scale of business grew, the infrastructure around it
                stagnated. Congested lanes, limited parking, outdated loading
                facilities — the old ways were holding modern businesses back.
                HP Market was built to solve exactly that.
              </p>
              <p className={styles.storyPara}>
                Our philosophy was never to move commerce away from its roots.
                Instead, we asked a simpler question: what if we gave Old Delhi
                the infrastructure it deserves? The result is HP Market — a
                landmark commercial complex at <strong style={{ color: '#FF6A00' }}>1/21 Asaf Ali Road</strong>,
                designed from the ground up for how business actually operates today.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className={styles.storyImageStack}>
                <div className={styles.storyImgMain}>
                  <Image
                    src="/herosection2.png"
                    alt="HP Market Exterior"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.storyImgFloat}>
                  <Image
                    src="/images/challenge/chandni-chowk.jpg"
                    alt="Old Delhi Market"
                    fill
                    sizes="300px"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ══════════════════ 3. STATS ══════════════════ */}
        <section className={styles.statsSection}>
          <div className={styles.sectionHeader}>
            <FadeUp>
              <span className={styles.eyebrow}>By The Numbers</span>
              <h2 className={styles.sectionTitle}>Designed for Scale.</h2>
              <p className={styles.sectionSub}>
                Every number reflects a commitment to delivering the best commercial
                environment in Central Delhi.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <div className={styles.statNumber}><Counter target={2000} suffix="+" /></div>
                <div className={styles.statDesc}>Sq. Ft. Premium Space</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}><Counter target={100} suffix="%" /></div>
                <div className={styles.statDesc}>Power Backup</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statDesc}>Security & Access</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}><Counter target={250} suffix="M" /></div>
                <div className={styles.statDesc}>To Metro & Railway</div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ══════════════════ 4. PILLARS ══════════════════ */}
        <section className={styles.pillarsSection}>
          {/* Ambient glow orbs */}
          <div className={styles.bentoOrb1} />
          <div className={styles.bentoOrb2} />
          <div className={styles.bentoOrb3} />

          <div className={styles.pillarsInner}>
            <FadeUp className={styles.pillarsHeader}>
              <span className={styles.eyebrowLight}>Our Philosophy / 02</span>
              <h2 className={styles.pillarsSectionTitle}>
                Every Detail<br />Has a Purpose.
              </h2>
              <p className={styles.pillarsIntroDesc}>
                HP Market was built around six core pillars — each one addressing
                a real challenge that businesses in Old Delhi face every single day.
              </p>
            </FadeUp>

            <div className={styles.bentoGrid}>
              {[
                {
                  num: '01',
                  icon: <Zap size={32} />,
                  title: 'Uninterrupted Power',
                  tag: '100% Backup',
                  desc: 'Full power backup means your operations never pause — trading floor, showroom, or warehouse.',
                  wide: true,
                  accent: '#FF6A00',
                },
                {
                  num: '02',
                  icon: <Wind size={32} />,
                  title: 'Comfort-First Climate',
                  tag: 'Central AC',
                  desc: 'Central air conditioning creates a professional environment that improves productivity year-round.',
                  wide: false,
                  accent: '#FF8C42',
                },
                {
                  num: '03',
                  icon: <ShieldCheck size={32} />,
                  title: 'Round-the-Clock Security',
                  tag: '24 / 7',
                  desc: '24/7 teams, CCTV, and secure access points protect your assets at every hour.',
                  wide: false,
                  accent: '#FFB347',
                },
                {
                  num: '04',
                  icon: <Truck size={32} />,
                  title: 'Logistics-Ready Infrastructure',
                  tag: 'Dedicated Zone',
                  desc: 'Dedicated loading zone keeps goods moving without disrupting foot traffic, with heavy-capacity elevators.',
                  wide: false,
                  accent: '#FF6A00',
                },
                {
                  num: '05',
                  icon: <ParkingSquare size={32} />,
                  title: 'MCD Parking Access',
                  tag: 'Direct Access',
                  desc: 'Direct access to dedicated MCD parking — effortless for customers and suppliers to reach you.',
                  wide: false,
                  accent: '#FF8C42',
                },
                {
                  num: '06',
                  icon: <Wifi size={32} />,
                  title: 'Connected Workspaces',
                  tag: 'High-Speed Wi-Fi',
                  desc: 'High-speed Wi-Fi across all common areas — payments, inventory, video calls, always connected.',
                  wide: true,
                  accent: '#FFB347',
                },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className={`${styles.bentoCard} ${p.wide ? styles.bentoCardWide : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  style={{ '--card-accent': p.accent } as React.CSSProperties}
                >
                  {/* Top row */}
                  <div className={styles.bentoCardTop}>
                    <div className={styles.bentoIconWrap}>{p.icon}</div>
                    <span className={styles.bentoNum}>{p.num}</span>
                  </div>

                  {/* Content */}
                  <div className={styles.bentoCardBody}>
                    <span className={styles.bentoTag}>{p.tag}</span>
                    <h3 className={styles.bentoTitle}>{p.title}</h3>
                    <p className={styles.bentoDesc}>{p.desc}</p>
                  </div>

                  {/* Glow corner */}
                  <div className={styles.bentoGlow} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ 5. PARALLAX QUOTE ══════════════════ */}
        <section className={styles.featureSection}>
          <div className={styles.featureBg}>
            <Image
              src="/images/gallery/interior_corridor.jpg"
              alt="HP Market Interior"
              fill
              sizes="100vw"
            />
          </div>
          <FadeUp className={styles.featureContent}>
            <blockquote className={styles.featureQuote}>
              "Don't move the business away from Old Delhi.<br />
              Move the <span>standard forward</span>."
            </blockquote>
          </FadeUp>
        </section>

        {/* ══════════════════ 6. GALLERY STRIP ══════════════════ */}
        <section className={styles.galleryStrip}>
          <div className={styles.sectionHeader}>
            <FadeUp>
              <span className={styles.eyebrow}>Inside HP Market / 03</span>
              <h2 className={styles.sectionTitle}>Built for the Modern Business.</h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryThumb}>
                  <Image src="/images/gallery/hall_e.png" alt="Trading Hall" fill sizes="(max-width: 1024px) 50vw, 40vw" />
                </div>
                <div className={styles.galleryCaption}>Trading Hall</div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryThumb}>
                  <Image src="/images/gallery/interior2.jpg" alt="Interior Spaces" fill sizes="(max-width: 1024px) 50vw, 30vw" />
                </div>
                <div className={styles.galleryCaption}>Interior Spaces</div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryThumb}>
                  <Image src="/images/gallery/lift.png" alt="Heavy-Capacity Elevators" fill sizes="(max-width: 1024px) 50vw, 30vw" />
                </div>
                <div className={styles.galleryCaption}>Heavy-Duty Elevators</div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryThumb}>
                  <Image src="/images/gallery/AC.png" alt="Central AC" fill sizes="(max-width: 1024px) 50vw, 30vw" />
                </div>
                <div className={styles.galleryCaption}>Central Air Conditioning</div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryThumb}>
                  <Image src="/images/gallery/terr_e.png" alt="Terrace" fill sizes="(max-width: 1024px) 50vw, 30vw" />
                </div>
                <div className={styles.galleryCaption}>Open Terrace</div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ══════════════════ 7. LOCATION ══════════════════ */}
        <section className={styles.locationSection}>
          <div className={styles.locationInner}>
            <FadeUp>
              <span className={styles.eyebrow}>Location / 04</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                In the Centre<br />of Everything.
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.8, fontWeight: 400, marginBottom: '48px' }}>
                Situated at <strong style={{ color: '#FF6A00' }}>1/21 Asaf Ali Road, New Delhi 110002</strong>,
                HP Market places you at the intersection of India's most
                powerful trade networks. Railway stations, metro lines, national
                highways, and the historic wholesale markets of Old Delhi —
                everything is within walking distance.
              </p>

              <div className={styles.locationList}>
                {[
                  { icon: <Train size={18} />, name: 'New Delhi Railway Station', dist: '250M' },
                  { icon: <TrainFront size={18} />, name: 'New Delhi Metro Station', dist: '200M' },
                  { icon: <MapPin size={18} />, name: 'Ajmeri Gate Chowk', dist: '150M' },
                  { icon: <ParkingSquare size={18} />, name: 'MCD Dedicated Parking', dist: '0M' },
                  { icon: <MapPin size={18} />, name: 'Chandni Chowk Market', dist: '1.2 KM' },
                ].map((loc, i) => (
                  <div key={i} className={styles.locationRow}>
                    <span className={styles.locationName} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: '#FF6A00', opacity: 0.7 }}>{loc.icon}</span>
                      {loc.name}
                    </span>
                    <span className={styles.locationDist}>{loc.dist}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className={styles.mapWrap}>
                <Image
                  src="/new delhi metro.jpg"
                  alt="New Delhi Metro Map Area"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={styles.mapOverlay} />
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ══════════════════ 8. CLOSING CTA ══════════════════ */}
        <section className={styles.cta}>
          <div className={styles.ctaBg}>
            <Image src="/herosection2.png" alt="HP Market" fill sizes="100vw" />
          </div>
          <div className={styles.ctaContent}>
            <FadeUp>
              <h2 className={styles.ctaTitle}>
                Not Just a Space.<br /><span>A Better Way</span><br />to Do Business.
              </h2>
              <p className={styles.ctaSub}>
                Prime location. Modern infrastructure. Purpose-built for the businesses
                that are shaping tomorrow's Old Delhi.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/#spaces" className={styles.btnPrimary}>
                  Explore Spaces <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className={styles.btnOutline}>
                  Book a Site Visit
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
