"use client";
import React from 'react';

export default function BuildingHighlights() {
  const highlights = [
    { title: "Freehold", desc: "Commercial Property", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg> },
    { title: "Wi-Fi", desc: "Fast Connection", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg> },
    { title: "5 Star", desc: "Toilets", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> },
    { title: "Security", desc: "Cameras", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: "Daikin", desc: "Air Conditioning", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
    { title: "RO", desc: "Cold Water", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg> },
    { title: "MCD", desc: "Car Parking", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg> },
    { title: "KONE", desc: "Lift Facility", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="12 7 8 11 12 15"></polyline><line x1="16" y1="11" x2="8" y2="11"></line></svg> },
  ];

  return (
    <section id="highlights" style={{ 
      backgroundColor: '#0A192F', 
      padding: '120px 0',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '16px', textTransform: 'uppercase' }}>
            Building <span style={{ color: '#f97316' }}>Highlights</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Experience world-class infrastructure. Ready to move in, specialized Hardware and Powertool Market with premium 5-star amenities.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '24px' 
        }}>
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className={`reveal-up reveal-delay-${index % 4}`}
              style={{ 
                backgroundColor: '#112240',
                padding: '40px 32px',
                borderRadius: '8px',
                border: '1px solid #1e293b',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                transition: 'all 0.2s ease',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#f97316';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.5)';
                const iconDiv = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconDiv) {
                  iconDiv.style.backgroundColor = '#f97316';
                  iconDiv.style.color = '#ffffff';
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#1e293b';
                e.currentTarget.style.boxShadow = 'none';
                const iconDiv = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconDiv) {
                  iconDiv.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
                  iconDiv.style.color = '#f97316';
                }
              }}
            >
              <div 
                className="icon-container"
                style={{ 
                  color: '#f97316', 
                  backgroundColor: 'rgba(249, 115, 22, 0.1)',
                  padding: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  color: '#ffffff', 
                  marginBottom: '4px',
                  letterSpacing: '0.02em'
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 500, 
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
