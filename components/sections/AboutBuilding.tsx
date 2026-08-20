"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutBuilding() {
  const images = ['/kamla.webp', '/new delhi metro.jpg', '/nse.webp'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" style={{ padding: '120px 0', backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '80px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Text */}
          <div className="reveal-up">
            <h2 className="display-text" style={{ 
              marginBottom: '32px',
              textTransform: 'none',
              color: '#111827',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}>
              A Modern Solution for a<br/>Long-Standing Problem
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '40px' }}>
              
              {/* Problem Block */}
              <div style={{ 
                paddingLeft: '24px', 
                borderLeft: '4px solid #ef4444',
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
                  The Problem
                </h3>
                <p style={{ color: '#4b5563', fontSize: '1.125rem', lineHeight: 1.6 }}>
                  Old Delhi houses the biggest wholesale traders, but the infrastructure of yesterday creates the problems of today—unplanned roads, chaotic traffic, no parking, fire hazards, and lack of amenities.
                </p>
              </div>

              {/* Solution Block */}
              <div style={{ 
                paddingLeft: '24px', 
                borderLeft: '4px solid #10b981',
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
                  The Solution
                </h3>
                <p style={{ color: '#4b5563', fontSize: '1.125rem', lineHeight: 1.6 }}>
                  HP Market brings a specialized, freehold, air-conditioned, ready-to-move-in Hardware and Powertool Market with 5-star amenities. A safer environment, stronger business, and a better future.
                </p>
              </div>

            </div>

            <a href="#details" style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'var(--accent-primary)',
              color: '#ffffff',
              padding: '16px 32px',
              borderRadius: '4px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1.125rem',
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

          {/* Right Column: Image Slider */}
          <div className="reveal-up reveal-delay-1" style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}>
              {images.map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  alt={`Slide ${index + 1}`} 
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    opacity: currentImageIndex === index ? 1 : 0,
                    transition: 'opacity 1s ease-in-out'
                  }} 
                />
              ))}
              


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
