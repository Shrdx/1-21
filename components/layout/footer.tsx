import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
          font-size: 0.95rem;
          margin-bottom: 12px;
        }
        .footer-link:hover {
          color: #f97316;
          transform: translateX(4px);
        }
        .footer-heading {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1.8rem;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .contact-icon {
          color: #f97316;
          margin-top: 3px;
          flex-shrink: 0;
        }
        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: #94a3b8;
          transition: all 0.2s ease;
          margin-right: 12px;
          text-decoration: none;
        }
        .social-icon-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #ffffff;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-col-span-4, .footer-col-span-3, .footer-col-span-2 { grid-column: span 1 !important; }
        }
      `}} />
      <footer style={{ 
        backgroundColor: '#050a16', 
        padding: '80px 0 40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
            
            {/* Brand Column */}
            <div className="footer-col-span-5" style={{ gridColumn: 'span 5', paddingRight: '20px' }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', marginBottom: '1.5rem' }}>
                <Image
                  src="/hpmarket.png"
                  alt="HP Market by SAB Group"
                  width={160}
                  height={64}
                  style={{
                    objectFit: 'contain',
                    maxHeight: '64px',
                    width: 'auto',
                  }}
                />
              </Link>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', margin: '0 0 24px', maxWidth: '320px' }}>
                A landmark commercial destination in the heart of Delhi. Elevated spaces for considered businesses and modern retail experiences.
              </p>
            </div>
            
            {/* Quick Links Column */}
            <div className="footer-col-span-3" style={{ gridColumn: 'span 3' }}>
              <h4 className="footer-heading">Quick Links</h4>
              <div>
                <Link href="/" className="footer-link">Home</Link><br />
                <Link href="/#about" className="footer-link">About</Link><br />
                <Link href="/#spaces" className="footer-link">Spaces</Link><br />
                <Link href="/#gallery" className="footer-link">Gallery</Link><br />
                <Link href="/contact" className="footer-link">Contact</Link>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="footer-col-span-4" style={{ gridColumn: 'span 4' }}>
              <h4 className="footer-heading">Contact Info</h4>
              
              <div className="contact-item">
                <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <a href="https://maps.app.goo.gl/qUFpTQCFPy2PZWV58" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  1/21 Asaf Ali Road, Central Delhi
                </a>
              </div>
              
              <div className="contact-item">
                <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+91 8700513200</span>
              </div>
              
              <div className="contact-item">
                <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@sabproperties.in" style={{ color: '#94a3b8', textDecoration: 'none' }}>info@sabproperties.in</a>
              </div>
            </div>
          </div>

          <div style={{ 
            marginTop: '60px', 
            paddingTop: '30px', 
            borderTop: '1px solid rgba(255,255,255,0.08)', 
            textAlign: 'center'
          }}>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 8px' }}>
              © {new Date().getFullYear()} SAB Properties Private Limited. All rights reserved.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 16px' }}>
              Powered by SAB Group.
            </p>
            <p style={{ color: 'rgba(148,163,184,0.4)', fontSize: '0.75rem', margin: 0 }}>
              Disclaimer: Property images are for representational purposes only and may not depict the actual property.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
