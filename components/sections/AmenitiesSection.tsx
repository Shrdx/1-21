"use client";
import React from 'react';
import { ShieldCheck, Zap, Thermometer, Car, Wifi, ArrowUpCircle } from 'lucide-react';

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: <Thermometer size={40} color="#f97316" />,
      title: 'Central Air Conditioning',
      description: 'Experience a comfortable shopping and working environment year-round with our state-of-the-art central AC system.'
    },
    {
      icon: <Zap size={40} color="#f97316" />,
      title: '100% Power Backup',
      description: 'Never face business interruptions. Our heavy-duty generators ensure your operations run smoothly 24/7.'
    },
    {
      icon: <Car size={40} color="#f97316" />,
      title: 'Ample Parking Space',
      description: 'Say goodbye to parking woes in Old Delhi. Our multi-level parking facility offers secure spaces for tenants and visitors.'
    },
    {
      icon: <ShieldCheck size={40} color="#f97316" />,
      title: 'Premium Security',
      description: 'Your safety is our priority. Equipped with CCTV surveillance and round-the-clock trained security personnel.'
    },
    {
      icon: <ArrowUpCircle size={40} color="#f97316" />,
      title: 'High-Speed Elevators',
      description: 'Quick and efficient vertical mobility with heavy-load capacity elevators designed specifically for market needs.'
    },
    {
      icon: <Wifi size={40} color="#f97316" />,
      title: 'Free Wi-Fi Zones',
      description: 'Stay connected with high-speed internet available throughout the common areas of the complex.'
    }
  ];

  return (
    <section id="amenities" className="section" style={{ backgroundColor: '#f9fafb', padding: '120px 0' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal-up">
          <h2 className="display-text" style={{ 
            marginBottom: '20px',
            textTransform: 'none',
            color: '#111827',
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)'
          }}>
            5-Star Amenities
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            fontWeight: 500,
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Designed to support and elevate your business with modern facilities tailored for the wholesale and retail market.
          </p>
        </div>

        {/* Amenities Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '32px' 
        }}>
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className={`reveal-up reveal-delay-${index % 3}`}
              style={{
                backgroundColor: '#ffffff',
                padding: '40px 32px',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid #f3f4f6',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderColor = '#fdba74';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
                e.currentTarget.style.borderColor = '#f3f4f6';
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#fff7ed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px'
              }}>
                {amenity.icon}
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  color: '#111827',
                  marginBottom: '12px'
                }}>
                  {amenity.title}
                </h3>
                <p style={{ 
                  fontSize: '1.05rem', 
                  lineHeight: 1.6,
                  color: '#4b5563' 
                }}>
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
