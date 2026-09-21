"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AmenitiesSection() {
  const amenities = [
    { num: "01", title: 'CENTRAL AIR CONDITIONING', desc: 'Climate-controlled environment for comfort.', img: "/images/gallery/AC.png", type: 'large' },
    { num: "02", title: 'MCD PARKING', desc: 'Ample space for tenants and visitors.', img: "/ourdelivery.png", type: 'tall' },
    { num: "03", title: 'PREMIUM SECURITY', desc: '24/7 surveillance across all zones.', img: "/herosection2.png", type: 'wide' },
    { num: "04", title: 'HIGH-SPEED ELEVATORS', desc: 'Efficient vertical movement.', img: "/images/gallery/lift.png", type: 'small' }
  ];

  const getGridSpan = (type: string) => {
    switch(type) {
      case 'large': return { gridColumn: 'span 8', gridRow: 'span 2' };
      case 'tall': return { gridColumn: 'span 4', gridRow: 'span 2' };
      case 'medium': return { gridColumn: 'span 4', gridRow: 'span 1' };
      case 'wide': return { gridColumn: 'span 8', gridRow: 'span 1' };
      case 'small': return { gridColumn: 'span 4', gridRow: 'span 1' };
      default: return { gridColumn: 'span 4', gridRow: 'span 1' };
    }
  };

  return (
    <section id="amenities" className="section bg-primary" style={{ padding: '140px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '80px', maxWidth: '700px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="heading-text" 
            style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            DESIGNED AROUND<br/>YOUR BUSINESS.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="body-text-lg" 
            style={{ color: 'var(--text-secondary)' }}
          >
            "Modern facilities designed to support the people, products and businesses that keep commerce moving."
          </motion.p>
        </div>

        {/* Asymmetric Grid */}
        <div className="amenities-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gridAutoRows: '340px',
          gap: '24px' 
        }}>
          {amenities.map((amenity, index) => {
            const spanStyle = getGridSpan(amenity.type);
            return (
              <motion.div 
                key={amenity.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * index }}
                className="amenity-card"
                style={{
                  ...spanStyle,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  backgroundColor: '#f5f5f5',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('.amenity-img') as HTMLElement;
                  if(img) img.style.transform = 'scale(1.05)';
                  const overlay = e.currentTarget.querySelector('.amenity-overlay') as HTMLElement;
                  if(overlay) overlay.style.backgroundColor = 'rgba(15,23,42,0.6)';
                  const arrow = e.currentTarget.querySelector('.amenity-arrow') as HTMLElement;
                  if(arrow) {
                    arrow.style.opacity = '1';
                    arrow.style.transform = 'translateX(0)';
                  }
                  const textContent = e.currentTarget.querySelector('.amenity-text') as HTMLElement;
                  if(textContent) textContent.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('.amenity-img') as HTMLElement;
                  if(img) img.style.transform = 'scale(1)';
                  const overlay = e.currentTarget.querySelector('.amenity-overlay') as HTMLElement;
                  if(overlay) overlay.style.backgroundColor = 'rgba(15,23,42,0.4)';
                  const arrow = e.currentTarget.querySelector('.amenity-arrow') as HTMLElement;
                  if(arrow) {
                    arrow.style.opacity = '0';
                    arrow.style.transform = 'translateX(-10px)';
                  }
                  const textContent = e.currentTarget.querySelector('.amenity-text') as HTMLElement;
                  if(textContent) textContent.style.transform = 'translateY(0)';
                }}
              >
                <div className="amenity-img" style={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
                  <Image src={amenity.img} alt={amenity.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="amenity-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.4)', transition: 'background-color 0.4s ease' }} />
                
                <div className="amenity-text" style={{ 
                  position: 'absolute', 
                  bottom: 0, left: 0, right: 0, 
                  padding: '32px',
                  display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.4s ease'
                }}>
                  <div className="label-text" style={{ color: 'var(--accent-primary)', marginBottom: '8px' }}>{amenity.num}</div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px', letterSpacing: '-0.01em' }}>{amenity.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: '80%' }}>{amenity.desc}</p>
                    <div className="amenity-arrow" style={{ color: 'var(--accent-primary)', opacity: 0, transform: 'translateX(-10px)', transition: 'all 0.4s ease' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .amenities-grid { display: flex !important; flex-direction: column !important; }
          .amenity-card { height: 400px !important; }
        }
      `}} />
    </section>
  );
}
