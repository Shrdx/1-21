"use client";
import React from 'react';

export default function AmenitiesSection() {
  return (
    <section className="section" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 className="display-text" style={{ 
            marginBottom: '16px',
            textTransform: 'none',
            color: '#111827'
          }}>
            Spaces We Offer
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            fontWeight: 500,
            color: '#111827',
            marginBottom: '24px'
          }}>
            Built for high street brands, with visibility and infrastructure that scale.
          </p>
          
          <a href="#details" style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'var(--accent-primary)',
            color: '#ffffff',
            padding: '12px 24px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'opacity 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            Learn More About The Project
          </a>
        </div>

        {/* 2 Images Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '40px' 
        }}>
          {/* Retail Spaces */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontWeight: 700, fontSize: '1.25rem' }}>
              <span>01</span>
              <span>Retail Spaces</span>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#f3f4f6' }}>
               <img src="https://placehold.co/800x600/eeeeee/999999?text=Retail+Spaces" alt="Retail Spaces" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          
          {/* Office Area */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontWeight: 700, fontSize: '1.25rem' }}>
              <span>02</span>
              <span>Office Area</span>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#f3f4f6' }}>
               <img src="https://placehold.co/800x600/eeeeee/999999?text=Office+Area" alt="Office Area" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
