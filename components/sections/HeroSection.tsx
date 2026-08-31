"use client";
import React from 'react';
import Button from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-start',
      position: 'relative', 
      overflow: 'hidden',
      paddingTop: '80px' // for the navbar
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <Image
          src="/images/hero/sabmarket-building.jpg"
          alt="Premium Commercial Building"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Gradient Overlay for text legibility on the left, clear on the right */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.3) 50%, rgba(15, 23, 42, 0) 100%)',
          zIndex: 1,
        }} />
        {/* Bottom gradient to blend with next section if it's dark */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '150px',
          background: 'linear-gradient(to top, #0f172a 0%, transparent 100%)',
          zIndex: 1,
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="reveal-up" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          textAlign: 'left',
          maxWidth: '900px',
          padding: '2rem 0',
        }}>
          
          {/* Main Hook Text */}
          <h1 className="display-text" style={{ 
            marginBottom: '1rem', 
            color: '#FFFFFF',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            lineHeight: 1.1,
            fontSize: 'clamp(3rem, 5vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}>
            HP MARKET:<br/>Premium Commercial Spaces in Central Delhi.
          </h1>
          
          {/* Supporting Text */}
          <p className="body-text" style={{ 
            marginBottom: '2.5rem', 
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            color: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '650px',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            fontWeight: 500,
          }}>
            Hardware & Powertool Market in the Heart of Central Delhi, Asaf Ali Road.
          </p>
          
          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <Button href="/contact" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>Enquire Now</Button>
            
            {/* Custom outline button */}
            <a href="#about" className="sm-btn" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: 'var(--rounded-none)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              fontSize: '1.125rem',
              padding: '1rem 2rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 500,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = '#FFFFFF';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}>
              Explore Spaces
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
