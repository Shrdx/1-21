"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Why Us", href: "#why-us" },
  { title: "Map", href: "/#location" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 300ms ease',
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
      }}
    >
      {/* Top Marquee */}
      <div style={{ backgroundColor: 'var(--accent-primary)', color: '#fff', padding: '6px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{
          display: 'inline-block',
          animation: 'marquee 25s linear infinite',
          fontWeight: 700,
          letterSpacing: '1px'
        }}>
          {Array(8).fill("HP MARKET By SAB GROUP, Coming Soon").map((text, i) => (
            <span key={i} style={{ margin: '0 40px' }}>{text}</span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      <div className="container" style={{ display: 'flex', height: '70px', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          HP Market
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {navigation.map((item) => (
            <div key={item.title} style={{ position: 'relative' }}>
              {item.title === 'Why Us' ? (
                <>
                  <button
                    onClick={() => setIsWhyUsOpen(!isWhyUsOpen)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.9)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      padding: 0,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                  >
                    {item.title} <span style={{ fontSize: '0.8em', marginLeft: '4px' }}>▼</span>
                  </button>
                  {isWhyUsOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: '16px',
                      backgroundColor: '#ffffff',
                      borderRadius: '4px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      minWidth: '220px',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '8px 0',
                      zIndex: 100
                    }}>
                      <Link href="/#location" onClick={() => setIsWhyUsOpen(false)} style={{ padding: '10px 16px', color: '#111827', textDecoration: 'none', fontSize: '0.95rem', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Location Advantage</Link>
                      <Link href="/#spaces" onClick={() => setIsWhyUsOpen(false)} style={{ padding: '10px 16px', color: '#111827', textDecoration: 'none', fontSize: '0.95rem', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Spaces We Offer</Link>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="/hp_market_brochure.pdf" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '1px solid #ffffff',
            padding: '8px 16px',
            borderRadius: '2px',
            fontWeight: 500,
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Download Brochure
          </a>

          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'var(--accent-primary)',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '2px',
            fontWeight: 500,
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'opacity 0.2s ease',
          }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            Book A Free Site Visit
          </Link>
        </div>
      </div>
    </header>
  );
}