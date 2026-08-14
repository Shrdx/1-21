import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary section" style={{ borderTop: '1px solid var(--border-subtle)', padding: 'var(--spacing-xl) 0' }}>
      <div className="container">
        <div className="grid-12" style={{ gap: 'var(--spacing-xl)' }}>
          <div style={{ gridColumn: 'span 4' }}>
            <h3 className="heading-text" style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>
              HP<span className="accent-color">.</span>
            </h3>
            <p className="body-text text-secondary">
              A landmark commercial destination in the heart of the city. Elevated spaces for considered businesses.
            </p>
          </div>
          
          <div style={{ gridColumn: 'span 2' }}>
            <h4 className="label-text" style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-muted)' }}>Navigation</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <li><Link href="/" className="body-text" style={{ transition: 'color var(--hover-transition)' }}>Home</Link></li>
              <li><Link href="#about" className="body-text" style={{ transition: 'color var(--hover-transition)' }}>About</Link></li>
              <li><Link href="#gallery" className="body-text" style={{ transition: 'color var(--hover-transition)' }}>Gallery</Link></li>
            </ul>
          </div>

          <div style={{ gridColumn: 'span 2' }}>
            <h4 className="label-text" style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-muted)' }}>Socials</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <li><a href="#" className="body-text" style={{ transition: 'color var(--hover-transition)' }}>Instagram</a></li>
              <li><a href="#" className="body-text" style={{ transition: 'color var(--hover-transition)' }}>Twitter</a></li>
              <li><a href="#" className="body-text" style={{ transition: 'color var(--hover-transition)' }}>LinkedIn</a></li>
            </ul>
          </div>

          <div style={{ gridColumn: 'span 4' }}>
            <h4 className="label-text" style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-muted)' }}>Contact</h4>
            <p className="body-text">
              1/21 Asaf Ali Road<br />
              Central Delhi<br />
              <br />
              <a href="mailto:hello@hpmarket.com" className="accent-color">hello@hpmarket.com</a>
            </p>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className="label-text text-muted">© {new Date().getFullYear()} HP Market.</p>
          <p className="label-text text-muted">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
