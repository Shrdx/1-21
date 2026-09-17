"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ value, label }: { value: string, label: string }) => {
  // A simple counter parsing for strings that contain numbers
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9,]/g, ''); // Extract non-number suffix

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: '16px' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="label-text" style={{ color: 'var(--accent-primary)', fontSize: '1rem' }}>
        {label}
      </div>
    </div>
  );
};

export default function ByTheNumbers() {
  return (
    <section className="section bg-dark-slate" style={{ padding: '160px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div className="grid-12" style={{ gap: '64px', alignItems: 'center' }}>
          <div style={{ gridColumn: 'span 5' }} className="stats-heading">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="heading-text" 
              style={{ color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}
            >
              CLOSE TO<br/>
              <span style={{ color: 'var(--accent-primary)' }}>EVERYTHING.</span>
            </motion.h2>
          </div>
          
          <div style={{ gridColumn: 'span 7' }} className="stats-grid">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px 32px' }}>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <AnimatedCounter value="250M" label="NEW DELHI RAILWAY STATION" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <AnimatedCounter value="200M" label="NEW DELHI METRO" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <AnimatedCounter value="150M" label="AJMERI GATE" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <AnimatedCounter value="24/7" label="SECURITY" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <AnimatedCounter value="100%" label="POWER BACKUP" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                <AnimatedCounter value="20,000+" label="SQ FT SPACES" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .stats-heading, .stats-grid { grid-column: span 12 !important; }
          .stats-heading { margin-bottom: 32px; }
        }
      `}} />
    </section>
  );
}
