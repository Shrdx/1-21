"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhyHpMarket() {
  const cards = [
    {
      num: "01",
      title: "LOCATION",
      desc: "At the centre of Central Delhi."
    },
    {
      num: "02",
      title: "INFRASTRUCTURE",
      desc: "Built around the way businesses operate."
    },
    {
      num: "03",
      title: "ACCESS",
      desc: "Connected to the city's major transport hubs."
    }
  ];

  return (
    <section className="section bg-dark-slate" style={{ padding: '140px 0' }} id="why-us">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="label-text" 
            style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent-primary)' }}></span>
            WHY HP MARKET / 01
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="heading-text" 
            style={{ color: '#fff', marginBottom: '1.5rem' }}
          >
            A BETTER PLACE<br/>TO DO BUSINESS.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="body-text-lg" 
            style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '650px' }}
          >
            "Located in the heart of Central Delhi, HP Market brings modern infrastructure, accessibility and operational convenience to one of Delhi's most established commercial destinations."
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid-12" style={{ gap: '32px' }}>
          {cards.map((card, index) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              style={{ gridColumn: 'span 4' }}
              className="why-card"
            >
              <Link href="#" style={{ 
                display: 'block', 
                height: '100%', 
                padding: '48px 32px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                const arrow = e.currentTarget.querySelector('.card-arrow') as HTMLElement;
                if(arrow) arrow.style.transform = 'translateX(8px)';
                const line = e.currentTarget.querySelector('.hover-line') as HTMLElement;
                if(line) line.style.transform = 'scaleX(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
                const arrow = e.currentTarget.querySelector('.card-arrow') as HTMLElement;
                if(arrow) arrow.style.transform = 'translateX(0)';
                const line = e.currentTarget.querySelector('.hover-line') as HTMLElement;
                if(line) line.style.transform = 'scaleX(0)';
              }}
              >
                {/* Orange Hover Line */}
                <div className="hover-line" style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '3px',
                  backgroundColor: 'var(--accent-primary)',
                  transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.4s ease'
                }}></div>

                <div className="label-text" style={{ color: 'var(--accent-primary)', marginBottom: '32px', fontSize: '1.25rem' }}>
                  {card.num}
                </div>
                
                <h3 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '-0.02em' }}>
                  {card.title}
                </h3>
                
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', marginBottom: '48px', lineHeight: 1.6 }}>
                  {card.desc}
                </p>

                <div className="card-arrow" style={{ 
                  color: 'var(--accent-primary)', 
                  display: 'inline-flex',
                  transition: 'transform 0.3s ease'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .why-card { grid-column: span 12 !important; }
        }
      `}} />
    </section>
  );
}
