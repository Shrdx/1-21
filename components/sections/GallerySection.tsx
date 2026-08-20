"use client";
import React from 'react';

export default function GallerySection() {
  const items = [
    { id: 1, title: 'Main Facade', category: 'Exterior', src: '/images/gallery/exterior.jpg' },
    { id: 2, title: 'Spacious Corridors', category: 'Interior', src: '/images/gallery/corridors.jpg' },
    { id: 3, title: 'Grand Entrance', category: 'Infrastructure', src: '/images/gallery/entrance.jpg' },
  ];

  return (
    <section id="gallery" style={{ 
      backgroundColor: '#0A192F', 
      padding: '120px 0',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Area */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          marginBottom: '60px',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div style={{ 
              width: '60px', 
              height: '4px', 
              backgroundColor: '#f97316', 
              marginBottom: '24px' 
            }} />
            <h2 style={{ 
              fontSize: '4rem', 
              fontWeight: 800, 
              color: '#ffffff', 
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              Curated<br />Spaces.
            </h2>
          </div>
          <p style={{ 
            maxWidth: '400px', 
            color: '#94a3b8', 
            fontSize: '1.125rem', 
            lineHeight: 1.6,
            marginBottom: '12px'
          }}>
            A glimpse into the refined environment at 1/21 Asaf Ali Road. Designed for the modern business.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gridAutoRows: 'minmax(300px, auto)',
          gap: '24px',
          width: '100%'
        }}>
          {items.map((item, i) => (
            <div 
              key={item.id}
              className={`reveal-up reveal-delay-${i}`}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
                gridRow: i === 0 ? 'span 2' : 'span 1',
                height: i === 0 ? '100%' : '320px',
                minHeight: '320px',
                cursor: 'pointer',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              onMouseOver={(e) => {
                const img = e.currentTarget.querySelector('.gallery-img') as HTMLElement;
                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
                const content = e.currentTarget.querySelector('.gallery-content') as HTMLElement;
                if (img) img.style.transform = 'scale(1.05)';
                if (overlay) overlay.style.backgroundColor = 'rgba(10, 25, 47, 0.7)';
                if (content) {
                  content.style.opacity = '1';
                  content.style.transform = 'translateY(0)';
                }
              }}
              onMouseOut={(e) => {
                const img = e.currentTarget.querySelector('.gallery-img') as HTMLElement;
                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
                const content = e.currentTarget.querySelector('.gallery-content') as HTMLElement;
                if (img) img.style.transform = 'scale(1)';
                if (overlay) overlay.style.backgroundColor = 'rgba(10, 25, 47, 0.2)';
                if (content) {
                  content.style.opacity = '0';
                  content.style.transform = 'translateY(20px)';
                }
              }}
            >
              {/* Image */}
              <img 
                className="gallery-img"
                src={item.src} 
                alt={item.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              
              {/* Dark Overlay */}
              <div 
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(10, 25, 47, 0.2)',
                  transition: 'background-color 0.4s ease'
                }}
              />

              {/* Hover Content */}
              <div 
                className="gallery-content"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '40px',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'all 0.4s ease'
                }}
              >
                <span style={{ 
                  color: '#f97316', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  fontSize: '0.875rem',
                  marginBottom: '8px'
                }}>
                  {item.category}
                </span>
                <h3 style={{ 
                  color: '#ffffff', 
                  fontSize: i === 0 ? '3rem' : '2rem', 
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: '-0.02em'
                }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
