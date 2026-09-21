"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function HeroSection() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const lineVariants: Variants = {
    hidden: { y: "110%" },
    visible: { 
      y: "0%", 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-start',
      position: 'relative', 
      overflow: 'hidden',
      paddingTop: '68px', // for the navbar
      paddingBottom: '0'
    }}>
      {/* Background Image with slow scale */}
      <motion.div 
        initial={{ scale: 1.03 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/hero-image.png"
          alt="HP Market Building"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Gradient Overlay for text legibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0) 100%)',
          zIndex: 1,
        }} />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            textAlign: 'left',
            maxWidth: '800px',
            padding: '2rem 0',
          }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUpVariants} className="label-text" style={{ 
            color: 'var(--accent-primary)', 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent-primary)' }}></span>
            ASAF ALI ROAD · CENTRAL DELHI
          </motion.div>
          
          {/* Main Headline - Text Mask Animation */}
          <h1 className="display-text" style={{ 
            marginBottom: '1.5rem', 
            color: '#FFFFFF',
          }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.div variants={lineVariants}>OLD DELHI'S</motion.div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.div variants={lineVariants}>BUSINESS.</motion.div>
            </div>
            <div style={{ overflow: 'hidden', color: 'var(--accent-primary)' }}>
              <motion.div variants={lineVariants}>REIMAGINED.</motion.div>
            </div>
          </h1>
          
          {/* Supporting Text */}
          <motion.p variants={fadeUpVariants} className="body-text-lg" style={{ 
            marginBottom: '3rem', 
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
          }}>
            A modern commercial destination designed for wholesale, retail and businesses that demand more from their workspace.
          </motion.p>
          
          {/* CTAs */}
          <motion.div variants={fadeUpVariants} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <Link href="#spaces" className="sm-btn sm-btn-primary" style={{ padding: '0 40px', height: '56px', fontSize: '0.95rem' }}>
              EXPLORE SPACES &rarr;
            </Link>
            
            <Link href="/contact" className="sm-btn sm-btn-outline" style={{ 
              padding: '0 40px', 
              height: '56px', 
              fontSize: '0.95rem',
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.3)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)'
            }}>
              BOOK A SITE VISIT &rarr;
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '0',
          right: '0',
          zIndex: 2,
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="label-text" style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            SCROLL TO DISCOVER
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </div>
          <div className="label-text" style={{ color: '#fff' }}>
            01 <span style={{ color: 'rgba(255,255,255,0.4)' }}>/ 04</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
