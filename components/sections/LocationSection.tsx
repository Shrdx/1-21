"use client";
import React from 'react';
import Image from 'next/image';

export default function LocationSection() {
  const nearbyPlaces = [
    { time: "250 Meters", name: "New Delhi Railway Station ", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
    { time: "200 Meters", name: "New Delhi Metro Station ", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L2.5 9l5.4 3.1L5.9 14 3.5 13l-1.5 1 2 4 4 2 1-1.5-1-2.4 1.9-2L15 21.5c.4-.2.7-.6.6-1.1l-1.8-8.2z" /></svg> },
    { time: "150 Meters", name: "Ajmeri Gate Chowk", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline><path d="M10 8h4M12 6v4" /></svg> },
    { time: "0 Meters", name: "Kamla Market Transport", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg> },
    { time: "0 Meters", name: "MCD Authorised Parking", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg> },

  ];

  return (
    <section id="location" className="section bg-dark-slate" style={{ padding: '80px 0', color: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
        }}>

          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className="display-text" style={{
              marginBottom: '24px',
              textTransform: 'none',
              maxWidth: '600px',
              color: '#ffffff'
            }}>
              An Address That<br />Puts You In The Spotlight
            </h2>
            <p style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              lineHeight: 1.5,
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '500px',
              marginBottom: 'auto'
            }}>
              Strategically located near the International Airport and all arterial roads, Central Square ensures effortless access for businesses and visitors.
            </p>

            {/* Nearby Section */}
            <div style={{ marginTop: '80px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '20px' }}>Nearby</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '16px'
              }}>
                {nearbyPlaces.map((place, index) => (
                  <div key={index} style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '24px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '12px',
                    transition: 'background-color 0.2s'
                  }}>
                    <div style={{ color: '#ffffff' }}>{place.icon}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.3 }}>
                      {place.time}<br />{place.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Map */}
          <div style={{ position: 'relative', width: '100%', minHeight: '600px', backgroundColor: '#f3f4f6' }}>
            <iframe 
              src="https://www.google.com/maps?q=J6VG+QHX,+Asaf+Ali+Rd,+Old+Delhi,+Kucha+Pati+Ram,+Ajmeri+Gate,+New+Delhi,+Delhi,+110006&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Advantage Map"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
