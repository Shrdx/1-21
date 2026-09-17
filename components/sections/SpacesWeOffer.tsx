"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SpacesWeOffer() {
  const spaces = [
    { title: "SHOPS", num: "01", img: "/shopsHP.png" },
    { title: "OFFICES", num: "02", img: "/office.jpg" },
    { title: "GODOWN SPACE", num: "03", img: "/godownHP.png" }
  ];

  return (
    <section className="section bg-secondary" style={{ padding: '140px 0' }} id="spaces">
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '80px', maxWidth: '700px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="label-text" 
            style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent-primary)' }}></span>
            FIND YOUR SPACE / 04
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="heading-text" 
            style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            SPACE FOR<br/>WHAT'S NEXT.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="body-text-lg" 
            style={{ color: 'var(--text-secondary)' }}
          >
            "From high-street shops to offices and godown spaces, choose a commercial environment built around the way your business operates."
          </motion.p>
        </div>

        {/* Space Cards */}
        <div className="grid-12" style={{ gap: '24px' }}>
          {spaces.map((space, index) => (
            <motion.div
              key={space.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              style={{ gridColumn: 'span 4' }}
              className="space-card-wrapper"
            >
              <Link href="#available" style={{ 
                display: 'block', 
                height: '600px', 
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('.space-img') as HTMLElement;
                if(img) img.style.transform = 'scale(1.05)';
                const title = e.currentTarget.querySelector('.space-title') as HTMLElement;
                if(title) title.style.transform = 'translateY(-8px)';
                const arrow = e.currentTarget.querySelector('.space-arrow') as HTMLElement;
                if(arrow) arrow.style.transform = 'translateX(5px)';
                const overlay = e.currentTarget.querySelector('.space-overlay') as HTMLElement;
                if(overlay) overlay.style.background = 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.2) 100%)';
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('.space-img') as HTMLElement;
                if(img) img.style.transform = 'scale(1)';
                const title = e.currentTarget.querySelector('.space-title') as HTMLElement;
                if(title) title.style.transform = 'translateY(0)';
                const arrow = e.currentTarget.querySelector('.space-arrow') as HTMLElement;
                if(arrow) arrow.style.transform = 'translateX(0)';
                const overlay = e.currentTarget.querySelector('.space-overlay') as HTMLElement;
                if(overlay) overlay.style.background = 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0) 100%)';
              }}
              >
                <div className="space-img" style={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
                  <Image src={space.img} alt={space.title} fill style={{ objectFit: 'cover' }} />
                </div>
                
                {/* Gradient overlay for text */}
                <div className="space-overlay" style={{ 
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0) 100%)',
                  transition: 'background 0.4s ease'
                }} />

                <div style={{ position: 'absolute', top: '32px', right: '32px', color: 'var(--accent-primary)', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '2px' }}>
                  {space.num}
                </div>
                
                <div style={{ position: 'absolute', bottom: '32px', left: '32px', right: '32px' }}>
                  <h3 className="space-title" style={{ color: '#fff', fontSize: '2rem', fontWeight: 700, marginBottom: '24px', letterSpacing: '-0.01em', transition: 'transform 0.4s ease' }}>
                    {space.title}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px' }}>
                    <span className="label-text" style={{ flex: 1 }}>EXPLORE</span>
                    <div className="space-arrow" style={{ color: 'var(--accent-primary)', transition: 'transform 0.3s ease' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .space-card-wrapper { grid-column: span 12 !important; }
        }
      `}} />
    </section>
  );
}
