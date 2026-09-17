"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Infrastructure() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to horizontal movement for desktop
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  const features = [
    { num: "01", title: "SECURITY", desc: "24/7 surveillance and controlled access.", img: "/challenge2.JPG" },
    { num: "02", title: "LOGISTICS", desc: "Dedicated infrastructure for loading and movement.", img: "/challenges.jpg" },
    { num: "03", title: "COMFORT", desc: "Central air conditioning across the commercial environment.", img: "/office.jpg" },
    { num: "04", title: "POWER", desc: "100% power backup for uninterrupted operations.", img: "/godownHP.png" },
    { num: "05", title: "ACCESS", desc: "High-speed elevators designed for commercial requirements.", img: "/shopsHP.png" },
    { num: "06", title: "CONNECTIVITY", desc: "Prime Central Delhi location.", img: "/kamla.webp" },
  ];

  return (
    <>
      <section className="bg-dark-slate" style={{ padding: '140px 0 60px' }} id="infrastructure">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="display-text" 
            style={{ color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}
          >
            EVERYTHING<br/>
            <span style={{ color: 'var(--accent-primary)' }}>IN PLACE.</span>
          </motion.h2>
        </div>
      </section>

      {/* Desktop Horizontal Scroll Area */}
      <div ref={targetRef} className="desktop-horizontal-scroll bg-dark-slate" style={{ height: '300vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: '100px', height: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <motion.div style={{ x, display: 'flex', gap: '40px', padding: '0 5vw', height: '65vh' }}>
            {features.map((feature, i) => (
              <div key={i} style={{ 
                minWidth: '55vw', 
                height: '100%', 
                backgroundColor: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'relative', height: '60%', width: '100%' }}>
                  <Image src={feature.img} alt={feature.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.3)' }} />
                </div>
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                  <div className="label-text" style={{ color: 'var(--accent-primary)', marginBottom: '16px', fontSize: '1.25rem' }}>{feature.num}</div>
                  <h3 style={{ color: '#fff', fontSize: '2rem', fontWeight: 600, marginBottom: '16px' }}>{feature.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Swipeable Area */}
      <div className="mobile-horizontal-swipe bg-dark-slate" style={{ padding: '0 0 100px' }}>
        <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', scrollSnapType: 'x mandatory', padding: '0 24px', paddingBottom: '24px' }}>
          {features.map((feature, i) => (
            <div key={i} style={{ 
              minWidth: '85vw', 
              scrollSnapAlign: 'center',
              backgroundColor: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', 
              flexDirection: 'column'
            }}>
              <div style={{ position: 'relative', height: '300px', width: '100%' }}>
                <Image src={feature.img} alt={feature.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '32px' }}>
                <div className="label-text" style={{ color: 'var(--accent-primary)', marginBottom: '16px' }}>{feature.num}</div>
                <h3 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .desktop-horizontal-scroll { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-horizontal-swipe { display: none !important; }
        }
        .mobile-horizontal-swipe::-webkit-scrollbar { display: none; }
      `}} />
    </>
  );
}
