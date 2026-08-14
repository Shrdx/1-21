"use client";
import React from 'react';

export default function GallerySection() {
  const items = [
    { id: 1, title: 'Lobby Design', category: 'Interior' },
    { id: 2, title: 'Exterior Facade', category: 'Architecture' },
    { id: 3, title: 'Office Layout', category: 'Workspace' },
    { id: 4, title: 'Meeting Rooms', category: 'Interior' },
  ];

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-xl)' }}>
          <h2 className="heading-text">Curated<br />Spaces.</h2>
          <p className="body-text text-secondary" style={{ maxWidth: '400px' }}>
            A glimpse into the refined environment at 1/21 Asaf Ali Road.
          </p>
        </div>

        <div className="grid-12" style={{ gap: 'var(--spacing-md)' }}>
          {items.map((item, i) => (
            <div 
              key={item.id} 
              style={{ gridColumn: 'span 6' }} 
              className={`reveal-up reveal-delay-${i % 2 + 1}`}
            >
              {/* Card Container */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/3',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  const img = e.currentTarget.querySelector('.gallery-img') as HTMLElement;
                  if (img) {
                    img.style.filter = 'grayscale(0%)';
                    img.style.transform = 'scale(1.03)';
                  }
                }}
                onMouseOut={(e) => {
                  const img = e.currentTarget.querySelector('.gallery-img') as HTMLElement;
                  if (img) {
                    img.style.filter = 'grayscale(100%)';
                    img.style.transform = 'scale(1)';
                  }
                }}
              >
                {/* Image Placeholder */}
                <div 
                  className="gallery-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'var(--border-subtle)',
                    filter: 'grayscale(100%)',
                    transition: 'all 700ms cubic-bezier(.16,1,.3,1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)'
                  }}
                >
                  [Image {item.id}]
                </div>

                {/* Overlay Text */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 'var(--spacing-md)',
                  background: 'linear-gradient(to top, rgba(255,255,255,0.9), transparent)'
                }}>
                  <p className="label-text accent-color" style={{ marginBottom: 'var(--spacing-xs)' }}>{item.category}</p>
                  <h3 className="heading-text" style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
