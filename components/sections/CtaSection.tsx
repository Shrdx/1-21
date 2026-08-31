"use client";

import React, { useState } from 'react';
import BrochureModal from '../layout/BrochureModal';

export default function CtaSection() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section className="section bg-secondary" style={{ padding: '160px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="display-text reveal-up" style={{ marginBottom: 'var(--spacing-md)' }}>
          Available Spaces.
        </h2>
        <p className="body-text text-secondary reveal-up reveal-delay-1" style={{ maxWidth: '600px', marginBottom: 'var(--spacing-xl)', fontSize: '1.25rem' }}>
          Discover floor plans tailored for modern enterprises. Ranging from 2,000 sq ft to full-floor options.
        </p>
        
        <div className="reveal-up reveal-delay-2">
          {/* Custom large primary button triggering the brochure modal */}
          <button 
            onClick={() => setBrochureOpen(true)}
            className="sm-btn sm-btn-primary" 
            style={{
              height: '64px',
              padding: '0 48px',
              fontSize: '1rem',
              cursor: 'pointer',
              border: 'none',
              fontFamily: 'inherit'
            }}
          >
            View Floorplans
          </button>
        </div>
      </div>
      
      <BrochureModal 
        isOpen={brochureOpen} 
        onClose={() => setBrochureOpen(false)} 
      />
    </section>
  );
}
