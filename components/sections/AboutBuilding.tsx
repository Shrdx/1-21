"use client";
import React from 'react';
import styles from './AboutBuilding.module.css';

export default function AboutBuilding() {
  return (
    <section id="about" className={styles.section}>
      
      {/* TOP HEADER */}
      <div className={styles.topContainer}>
        <span className={`reveal-up ${styles.eyebrow}`}>About HP Market</span>
        <h2 className={`reveal-up ${styles.massiveHeadline}`}>
          A Better Standard<br />For Commercial Spaces
        </h2>
      </div>

      {/* HERO IMAGE */}
      <div className={`reveal-up reveal-delay-1 ${styles.heroImageWrapper}`}>
        <img 
          src="/new delhi metro.jpg" 
          alt="HP Market Location" 
          className={styles.heroImage}
        />
      </div>

      {/* STATS & INTRO */}
      <div className={styles.statsIntroContainer}>
        <div className={`reveal-up ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <h3>100%</h3>
            <p>Commercial Focus</p>
          </div>
          <div className={styles.statItem}>
            <h3>24/7</h3>
            <p>Security & Access</p>
          </div>
          <div className={styles.statItem}>
            <h3>A+</h3>
            <p>Modern Amenities</p>
          </div>
        </div>
        <div className={`reveal-up ${styles.introText}`}>
          <p>
            A well-planned commercial environment can change the way businesses operate, customers experience a place, and a location grows. We started HP Market with a clear goal: to build a landmark that redefines organized commercial space in Old Delhi.
          </p>
        </div>
      </div>

      {/* STORY BLOCK 1: The Challenge */}
      <div className={styles.storyBlock}>
        <div className={`reveal-up ${styles.storyBlockText}`}>
          <span className={styles.storyBlockEyebrow}>Our Story</span>
          <h2 className={styles.storyBlockHeadline}>The Challenge.</h2>
          <p>
            Old Delhi houses major traders, but aging infrastructure—congested surroundings, limited parking, and unorganized planning—creates daily difficulties for both businesses and their customers. The modern business owner needs more than just space; they need a functioning ecosystem. For decades, wholesale and retail operators have had to compromise between being in the heart of the market and having access to basic operational necessities like loading bays, fire safety, and climate control. This compromise stifles potential and restricts the scale at which modern commerce can operate.
          </p>
        </div>
        <div className={`reveal-up reveal-delay-1 ${styles.storyBlockImageWrapper}`}>
          <img 
            src="/kamla.webp" 
            alt="The Challenge" 
            className={styles.storyBlockImage}
          />
        </div>
      </div>

      {/* STORY BLOCK 2: The Idea */}
      <div className={styles.storyBlock}>
        <div className={`reveal-up ${styles.storyBlockText}`}>
          <span className={styles.storyBlockEyebrow}>Our Vision</span>
          <h2 className={styles.storyBlockHeadline}>The Idea.</h2>
          <p>
            HP Market was envisioned as a more organized, modern, and business-oriented commercial environment that retains all the advantages of its established, highly connected location. It’s a carefully crafted platform for future growth. By studying the daily friction points of traditional markets, we conceptualized a space where logistics, customer experience, and business operations seamlessly integrate. The goal was never to move businesses away from Old Delhi, but to elevate how business is conducted right where it matters most.
          </p>
        </div>
        <div className={`reveal-up reveal-delay-1 ${styles.storyBlockImageWrapper}`}>
          <img 
            src="/nse.webp" 
            alt="The Idea" 
            className={styles.storyBlockImage}
          />
        </div>
      </div>

      {/* STORY BLOCK 3: The Solution */}
      <div className={styles.storyBlock}>
        <div className={`reveal-up ${styles.storyBlockText}`}>
          <span className={styles.storyBlockEyebrow}>Our Delivery</span>
          <h2 className={styles.storyBlockHeadline}>Ready For Tomorrow.</h2>
          <p>
            We deliver modern commercial infrastructure featuring air-conditioned, ready-to-move-in spaces with professional amenities, providing a secure and accessible environment for growth. Every element adds ongoing value to your business. From dedicated parking and wide corridors to advanced security and power backup, HP Market ensures that your operations never face a standstill. We have built an ecosystem that allows traders to focus entirely on growth, while we take care of the infrastructure.
          </p>
        </div>
        <div className={`reveal-up reveal-delay-1 ${styles.storyBlockImageWrapper}`}>
          <img 
            src="/hp_facade.jpg" 
            alt="The Solution" 
            className={styles.storyBlockImage}
          />
        </div>
      </div>

      {/* CTA SECTION (Aligned to left as part of the flow) */}
      <div className={`reveal-up ${styles.ctaWrapper}`}>
        <a href="#details" className="sm-btn sm-btn-primary" style={{ marginRight: '16px' }}>
          Explore HP Market
        </a>
        <a href="#contact" className="sm-btn sm-btn-outline">
          Schedule a Site Visit
        </a>
      </div>

    </section>
  );
}
