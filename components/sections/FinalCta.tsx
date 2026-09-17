"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function FinalCta() {
  return (
    <section className="section bg-dark-slate" style={{ padding: '160px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Image with Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image 
          src="/herosection2.png" 
          alt="HP Market Building" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center' }} 
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.85)' // Dark navy overlay
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ maxWidth: '800px' }}
        >
          <h2 className="display-text" style={{ color: '#fff', marginBottom: '2rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            YOUR NEXT<br/>
            BUSINESS ADDRESS<br/>
            <span style={{ color: 'var(--accent-primary)' }}>STARTS HERE.</span>
          </h2>
          
          <p className="body-text-lg" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', marginInline: 'auto', maxWidth: '600px', textAlign: 'center' }}>
            Discover commercial spaces designed for the businesses shaping tomorrow.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="#spaces" className="sm-btn sm-btn-primary" style={{ padding: '0 40px', height: '56px', fontSize: '1rem', width: '240px' }}>
              EXPLORE SPACES &rarr;
            </Link>
            
            <Link href="/contact" className="sm-btn sm-btn-outline" style={{ 
              padding: '0 40px', 
              height: '56px', 
              fontSize: '1rem',
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.3)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              width: '240px'
            }}>
              BOOK A SITE VISIT &rarr;
            </Link>
          </div>

          <Link href="/brochure" className="label-text" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid var(--accent-primary)',
            paddingBottom: '4px',
            marginBottom: '4rem'
          }}>
            DOWNLOAD BROCHURE
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </Link>

          <div className="label-text" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
            1/21 ASAF ALI ROAD · CENTRAL DELHI
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .sm-btn { width: 100% !important; }
        }
      `}} />
    </section>
  );
}
