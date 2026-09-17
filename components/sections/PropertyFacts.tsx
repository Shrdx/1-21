"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function PropertyFacts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section style={{ backgroundColor: 'var(--bg-dark-slate)', padding: '24px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px'
          }}
        >
          <motion.div variants={itemVariants} style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ color: '#fff', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '4px' }}>
              20,000+ <span style={{ fontSize: '0.5em', color: 'var(--accent-primary)' }}>SQ FT</span>
            </div>
            <div className="label-text" style={{ color: 'rgba(255,255,255,0.6)' }}>AVAILABLE SPACES</div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ color: '#fff', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '4px' }}>
              CENTRAL <span style={{ fontSize: '0.5em', color: 'var(--accent-primary)' }}>DELHI</span>
            </div>
            <div className="label-text" style={{ color: 'rgba(255,255,255,0.6)' }}>ASAF ALI ROAD</div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ color: '#fff', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '4px' }}>
              24/7 <span style={{ fontSize: '0.5em', color: 'var(--accent-primary)' }}>SECURITY</span>
            </div>
            <div className="label-text" style={{ color: 'rgba(255,255,255,0.6)' }}>PREMIUM SURVEILLANCE</div>
          </motion.div>
          
          <motion.div variants={itemVariants} style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ color: '#fff', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '4px' }}>
              100% <span style={{ fontSize: '0.5em', color: 'var(--accent-primary)' }}>POWER</span>
            </div>
            <div className="label-text" style={{ color: 'rgba(255,255,255,0.6)' }}>BACKUP SYSTEMS</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
