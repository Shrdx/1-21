"use client";
import React from 'react';
import Image from 'next/image';

export default function AboutBuilding() {
  return (
    <section id="about" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Top Header Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 className="display-text" style={{ 
            marginBottom: '24px',
            maxWidth: '800px',
            textTransform: 'none',
            color: '#111827'
          }}>
            A New Commercial<br/>Benchmark For Delhi
          </h2>
          
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

        {/* Text Columns Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          marginBottom: '40px',
          justifyContent: 'space-between'
        }}>
          <p className="body-text-lg" style={{ 
            color: '#111827',
            maxWidth: '500px'
          }}>
            HP Market is more than a commercial space, it's a vibrant hub of business and community in Delhi.
          </p>
          
          <p className="body-text-lg" style={{ 
            color: '#111827',
            maxWidth: '500px',
            marginLeft: 'auto'
          }}>
            A premier commercial center blending retail, workspaces, dining, and leisure, providing everything you need in one dynamic location.
          </p>
        </div>

        {/* 3 Images Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px' 
        }}>
          {/* Placeholder Image 1 */}
          <div style={{ position: 'relative', height: '350px', width: '100%', backgroundColor: '#f3f4f6' }}>
             <img src="/hp_exterior.jpg" alt="Exterior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Placeholder Image 2 */}
          <div style={{ position: 'relative', height: '350px', width: '100%', backgroundColor: '#f3f4f6' }}>
             <img src="/hp_pathway.jpg" alt="Pathway" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Placeholder Image 3 */}
          <div style={{ position: 'relative', height: '350px', width: '100%', backgroundColor: '#f3f4f6' }}>
             <img src="/hp_facade.jpg" alt="Facade" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

      </div>
    </section>
  );
}
