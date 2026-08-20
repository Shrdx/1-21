import React from 'react';

export default function AboutSection() {
  const challenges = [
    { 
      title: "UNPLANNED ROADS", 
      desc: "Narrow, congested and poorly maintained roads lead to daily chaos.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22V2M4 22l8-20M20 22l-8-20" /></svg>
    },
    { 
      title: "CHAOTIC TRAFFIC", 
      desc: "Heavy congestion disrupts movement of goods and people.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
    },
    { 
      title: "NO PARKING FACILITY", 
      desc: "Lack of dedicated parking creates major inconvenience.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/><path d="M9 16V8h4a2 2 0 0 1 0 4H9"/><line x1="4" y1="4" x2="20" y2="20" /></svg>
    },
    { 
      title: "FIRE HAZARDS", 
      desc: "Old electrical systems and dense construction pose serious risks.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
    },
    { 
      title: "LACK OF AMENITIES", 
      desc: "Inadequate toilets, water, hygiene and basic facilities.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v14M8 12a4 4 0 0 0 8 0M12 20a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"/></svg>
    },
    { 
      title: "IMPROPER TITLE DOCS", 
      desc: "Unclear titles and old documentation create legal complications.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    }
  ];

  return (
    <section id="challenges" style={{ backgroundColor: '#faf9f6', padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Area */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '60px',
          marginBottom: '60px',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            color: '#d4af37',
            padding: '60px 40px',
            borderRadius: '0 40px 40px 0',
            marginLeft: '-24px',
          }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase', margin: 0 }}>
              Current Major<br/>
              <span style={{ color: '#c59b27' }}>Challenges</span><br/>
              <span style={{ color: '#ffffff' }}>In Old Delhi</span>
            </h2>
          </div>

          <div style={{ paddingRight: '24px' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 600, 
              color: '#333', 
              borderLeft: '4px solid #d4af37',
              paddingLeft: '20px',
              marginBottom: '24px',
              lineHeight: 1.5,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              "The infrastructure of <span style={{ color: '#c59b27' }}>yesterday</span> creates the problems of <span style={{ color: '#c59b27' }}>today</span>."
            </h3>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.6 }}>
              Old Delhi houses the biggest wholesale traders of Delhi. Every nook and corner are flooded with traders/shops. Established many years back, before independence, the infrastructure has become old, some of the Buildings have become dangerous too. The amenities are as good as none. Some of the challenges faced by the traders are:
            </p>
          </div>
        </div>

        {/* Challenges Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px',
          marginBottom: '60px'
        }}>
          {challenges.map((item, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaeaea',
                borderRadius: '16px',
                padding: '40px 32px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#1a1a1a', 
                color: '#d4af37',
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 0 0 6px #faf9f6, 0 0 0 8px #d4af37'
              }}>
                {item.icon}
              </div>
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: '#1a1a1a', 
                marginBottom: '16px',
                textTransform: 'uppercase'
              }}>
                {item.title}
              </h4>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
