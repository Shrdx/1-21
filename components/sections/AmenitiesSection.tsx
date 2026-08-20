"use client";
import React from 'react';

export default function AmenitiesSection() {
  const spaces = [
    { num: '01', title: 'Shops', src: '/images/spaces/shopsHP.png' },
    { num: '02', title: 'Offices', src: '/images/spaces/office.jpg' },
    { num: '03', title: 'Godown Space', src: '/images/spaces/godownHP.png' },
    { num: '04', title: 'Law Firm', src: '/images/spaces/law_firm.jpg' },
  ];

  return (
    <section className="section" style={{ backgroundColor: '#ffffff', padding: '120px 0' }}>
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
            color: '#4b5563',
            marginBottom: '32px'
          }}>
            Built for high street brands, with visibility and infrastructure that scale.
          </p>
          
          <a href="#details" style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'var(--accent-primary)',
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: '4px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 14px 0 rgba(249, 115, 22, 0.39)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.23)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(249, 115, 22, 0.39)';
          }}
          >
            Learn More About The Project
          </a>
        </div>

        {/* Spaces Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '48px' 
        }}>
          {spaces.map((space, index) => (
            <div 
              key={index} 
              className={`reveal-up reveal-delay-${index % 2}`}
              style={{ 
                cursor: 'pointer',
                position: 'relative', 
                width: '100%', 
                height: '500px', 
                backgroundColor: '#f3f4f6',
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              onMouseOver={(e) => {
                const img = e.currentTarget.querySelector('.space-img') as HTMLElement;
                const title = e.currentTarget.querySelector('.space-title') as HTMLElement;
                if (img) img.style.transform = 'scale(1.05)';
                if (title) title.style.color = '#f97316';
              }}
              onMouseOut={(e) => {
                const img = e.currentTarget.querySelector('.space-img') as HTMLElement;
                const title = e.currentTarget.querySelector('.space-title') as HTMLElement;
                if (img) img.style.transform = 'scale(1)';
                if (title) title.style.color = '#ffffff';
              }}
            >
              {/* Image */}
              <img 
                className="space-img" 
                src={space.src} 
                alt={space.title} 
                style={{ 
                  position: 'absolute',
                  inset: 0,
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 1
                }} 
              />
              
              {/* Dark Gradient Overlay for Readability */}
              <div style={{
                position: 'absolute',
                bottom: 0, 
                left: 0, 
                right: 0,
                height: '60%',
                background: 'linear-gradient(to top, rgba(10, 25, 47, 0.95) 0%, transparent 100%)',
                zIndex: 2,
                pointerEvents: 'none'
              }} />

              {/* Text on Image */}
              <div 
                className="space-title"
                style={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '40px', 
                  fontWeight: 800, 
                  fontSize: '1.75rem',
                  color: '#ffffff',
                  transition: 'color 0.3s ease',
                  letterSpacing: '-0.02em',
                  zIndex: 3,
                  pointerEvents: 'none'
                }}
              >
                <span>{space.num}</span>
                <span>{space.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
