"use client";
import React from 'react';

export default function BuildingHighlights() {
  const highlights = [
    { 
      title: "50,000+", 
      desc: "Square Feet",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
    },
    { 
      title: "LEED", 
      desc: "Gold Certified",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    },
    { 
      title: "24/7", 
      desc: "Access & Security",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    },
    { 
      title: "100%", 
      desc: "Power Backup",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
    },
  ];

  return (
    <section id="highlights" style={{ backgroundColor: '#f9fafb', padding: '120px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Building Highlights
          </h2>
          <p style={{ color: '#4b5563', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Designed for excellence, built for scale. Experience a workspace that sets new standards in commercial real estate.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '32px' 
        }}>
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className={`reveal-up reveal-delay-${index % 4}`}
              style={{ 
                backgroundColor: '#ffffff',
                padding: '48px 32px',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid #f3f4f6',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
                e.currentTarget.style.borderColor = '#f3f4f6';
              }}
            >
              <div style={{ 
                color: '#f97316', 
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                padding: '20px',
                borderRadius: '50%',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {item.icon}
              </div>
              <h3 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: '#111827', 
                marginBottom: '8px',
                letterSpacing: '-0.02em'
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: '0.875rem', 
                fontWeight: 600, 
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '1.5px'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
