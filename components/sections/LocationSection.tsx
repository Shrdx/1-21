"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Simple counter animation component
const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <span>{count}</span>;
};

export default function LocationSection() {
  const connections = [
    { dist: 250, unit: "M", label: "NEW DELHI RAILWAY STATION" },
    { dist: 200, unit: "M", label: "NEW DELHI METRO" },
    { dist: 150, unit: "M", label: "AJMERI GATE" },
    { dist: 0, unit: "M", label: "KAMLA MARKET" }
  ];

  return (
    <section id="location" className="section bg-dark-slate" style={{ padding: '140px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '64px',
          alignItems: 'center'
        }} className="location-grid">

          {/* Left Content */}
          <div style={{ gridColumn: 'span 5' }} className="location-content">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="heading-text" 
              style={{ color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
            >
              RIGHT WHERE<br/>BUSINESS HAPPENS.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="body-text-lg" 
              style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '40px' }}
            >
              "Located on Asaf Ali Road in Central Delhi, HP Market places your business within easy reach of key transport hubs and established commercial destinations."
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              style={{ marginBottom: '64px' }}
            >
              <div className="label-text" style={{ color: 'var(--accent-primary)', marginBottom: '8px' }}>ADDRESS</div>
              <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 500 }}>
                1/21 Asaf Ali Road<br/>Central Delhi
              </div>
            </motion.div>

            {/* Connections */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 24px', marginBottom: '64px' }}>
              {connections.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', color: '#fff', fontSize: '2rem', fontWeight: 700, lineHeight: 1, marginBottom: '8px' }}>
                    <AnimatedCounter value={item.dist} />
                    <span style={{ fontSize: '1rem', color: 'var(--accent-primary)' }}>{item.unit}</span>
                  </div>
                  <div className="label-text" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.6 }}
            >
              <Link href="https://maps.google.com/?q=1/21+Asaf+Ali+Road,+New+Delhi" target="_blank" className="sm-btn sm-btn-primary" style={{ padding: '0 32px', height: '56px', fontSize: '0.95rem' }}>
                EXPLORE LOCATION &rarr;
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Map */}
          <div style={{ gridColumn: 'span 7', position: 'relative', width: '100%', height: '700px', backgroundColor: '#1e293b', borderRadius: '12px', overflow: 'hidden' }} className="location-map">
            <iframe 
              src="https://maps.google.com/maps?q=1/21+Asaf+Ali+Road,+New+Delhi&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Advantage Map"
            />
            {/* Custom HP Market label overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -100%)',
                zIndex: 10,
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{
                backgroundColor: 'var(--accent-primary)',
                color: '#ffffff',
                padding: '10px 16px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.02em',
                boxShadow: '0 8px 24px rgba(249,115,22,0.6)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                HP Market
              </div>
              <div style={{
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid var(--accent-primary)',
              }} />
            </motion.div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .location-grid { display: flex !important; flex-direction: column !important; }
          .location-content { order: 1; }
          .location-map { order: 2; height: 400px !important; }
        }
      `}} />
    </section>
  );
}
