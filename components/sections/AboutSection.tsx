import React from 'react';

export default function AboutSection() {
  const features = [
    { title: "Strategic Location", desc: "Positioned in the commercial hub for unmatched accessibility." },
    { title: "Modern Amenities", desc: "Designed with contemporary facilities for enterprise needs." },
    { title: "Flexible Floorplans", desc: "Adaptable spaces suited for various operational scales." },
  ];

  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <div className="grid-12">
          {/* Split Feature: Text on left */}
          <div style={{ gridColumn: 'span 5' }} className="reveal-up">
            <h2 className="heading-text" style={{ marginBottom: 'var(--spacing-lg)' }}>
              Considered<br />
              Restraint.
            </h2>
            <p className="body-text text-secondary" style={{ marginBottom: 'var(--spacing-xl)' }}>
              Our design philosophy centers on removing the unnecessary. What remains is a highly functional, beautiful environment that empowers your business to thrive without distraction.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  style={{
                    paddingTop: 'var(--spacing-sm)',
                    borderTop: '1px solid var(--border-medium)',
                  }}
                >
                  <h3 className="label-text" style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--text-primary)' }}>
                    {feature.title}
                  </h3>
                  <p className="body-text text-muted" style={{ fontSize: '0.875rem' }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Split Feature: Media on right */}
          <div style={{ gridColumn: 'span 6', gridColumnStart: 7 }} className="reveal-up reveal-delay-1">
            <div style={{ 
              width: '100%', 
              height: '100%',
              minHeight: '500px',
              backgroundColor: 'var(--border-subtle)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)'
              }}>
                [About Video/Image Placeholder]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
