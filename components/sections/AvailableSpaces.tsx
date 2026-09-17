"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const spaceData = [
  { id: 1, type: 'SHOPS', floor: 'GROUND FLOOR', size: '2,000+ SQ FT', tag: 'High Footfall' },
  { id: 2, type: 'SHOPS', floor: 'FIRST FLOOR', size: '3,500+ SQ FT', tag: 'Premium Frontage' },
  { id: 3, type: 'OFFICES', floor: 'SECOND FLOOR', size: '5,000+ SQ FT', tag: 'Corporate Setup' },
  { id: 4, type: 'OFFICES', floor: 'THIRD FLOOR', size: '4,500+ SQ FT', tag: 'City Views' },
  { id: 5, type: 'GODOWN', floor: 'BASEMENT 1', size: '10,000+ SQ FT', tag: 'Heavy Loading' },
  { id: 6, type: 'GODOWN', floor: 'BASEMENT 2', size: '12,000+ SQ FT', tag: 'Secure Storage' },
];

export default function AvailableSpaces() {
  const [filter, setFilter] = useState('ALL');

  const filteredSpaces = filter === 'ALL' 
    ? spaceData 
    : spaceData.filter(s => s.type === filter);

  return (
    <section id="available" className="section bg-primary" style={{ padding: '140px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="heading-text" 
            style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            FIND A SPACE<br/>THAT FITS.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="body-text-lg" 
            style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}
          >
            "Explore commercial spaces ranging from approximately 2,000 sq ft to full-floor options."
          </motion.p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
          {['ALL', 'SHOPS', 'OFFICES', 'GODOWN'].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                background: filter === tab ? 'var(--text-primary)' : 'transparent',
                color: filter === tab ? '#fff' : 'var(--text-primary)',
                border: filter === tab ? '1px solid var(--text-primary)' : '1px solid var(--border-medium)',
                padding: '12px 32px',
                borderRadius: '32px',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid-12" style={{ gap: '24px' }}>
          <AnimatePresence>
            {filteredSpaces.map((space) => (
              <motion.div
                layout
                key={space.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ gridColumn: 'span 4' }}
                className="available-card-wrapper"
              >
                <div style={{
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '40px',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                    <div className="label-text" style={{ color: 'var(--text-muted)' }}>{space.type}</div>
                    <div style={{ 
                      backgroundColor: 'rgba(255, 106, 0, 0.1)', 
                      color: 'var(--accent-primary)', 
                      padding: '4px 12px', 
                      borderRadius: '16px',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      {space.tag}
                    </div>
                  </div>
                  
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.1 }}>
                    {space.floor}
                  </h3>
                  <div style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '48px', fontWeight: 500 }}>
                    {space.size}
                  </div>

                  {/* Floorplan Placeholder */}
                  <div style={{ 
                    height: '160px', 
                    backgroundColor: 'var(--bg-secondary)', 
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '32px',
                    border: '1px dashed var(--border-medium)'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--border-medium)" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <line x1="3" y1="9" x2="21" y2="9"/>
                      <line x1="9" y1="21" x2="9" y2="9"/>
                    </svg>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
                    VIEW FLOORPLAN 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .available-card-wrapper { grid-column: span 12 !important; }
        }
      `}} />
    </section>
  );
}
