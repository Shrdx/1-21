import React from 'react';
import Button from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <div className="grid-12">
          <div style={{ gridColumn: 'span 5' }} className="reveal-up">
            <h2 className="heading-text" style={{ marginBottom: 'var(--spacing-md)' }}>
              Get In<br />
              Touch.
            </h2>
            <p className="body-text text-secondary" style={{ marginBottom: 'var(--spacing-xl)' }}>
              For leasing inquiries or to schedule a private tour, please leave your details below.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div>
                <h4 className="label-text text-muted" style={{ marginBottom: 'var(--spacing-xs)' }}>Email</h4>
                <p className="body-text accent-color">hello@sm.com</p>
              </div>
              <div>
                <h4 className="label-text text-muted" style={{ marginBottom: 'var(--spacing-xs)' }}>Phone</h4>
                <p className="body-text">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 6', gridColumnStart: 7 }} className="reveal-up reveal-delay-1">
            <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="label-text text-secondary" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  style={{
                    padding: '16px',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                  }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="label-text text-secondary" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  style={{
                    padding: '16px',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                  }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'var(--spacing-md)' }}>
                <label className="label-text text-secondary" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  style={{
                    padding: '16px',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical'
                  }} 
                />
              </div>

              <Button type="button" style={{ width: '100%' }}>Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
