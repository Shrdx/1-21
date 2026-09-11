"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import BrochureModal from "./BrochureModal";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Why Us",
    dropdown: [
      { title: "Location Advantage", href: "/#location" },
      { title: "Spaces We Offer", href: "/#spaces" },
      { title: "Amenities", href: "/#amenities" },
    ],
  },
  { title: "Gallery", href: "/#gallery" },
  { title: "Contact", href: "/contact" },
];

// HP Market logo using uploaded image
function HPMLogo() {
  return (
    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
      <Image
        src="/hpmarket.png"
        alt="HP Market by SAB Group"
        width={120}
        height={48}
        style={{
          objectFit: "contain",
          maxHeight: "48px",
          width: "auto",
        }}
        priority
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsWhyUsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Close mobile on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMobileOpen(false); setIsWhyUsOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navLinkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.82)",
    fontSize: "0.9rem",
    fontWeight: 500,
    textDecoration: "none",
    letterSpacing: "0.01em",
    transition: "color 0.2s ease",
    padding: "4px 0",
    position: "relative",
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes mobileSlide { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .nav-link:hover { color: #ffffff !important; }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 1.5px; background: var(--accent-primary);
          transform: scaleX(0); transition: transform 0.25s ease; transform-origin: left;
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .dropdown-item:hover { background-color: #f9fafb !important; color: var(--accent-primary) !important; }
        .cta-outline:hover { background-color: rgba(255,255,255,0.1) !important; }
        .cta-primary:hover { background-color: var(--accent-hover) !important; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(255,106,0,0.35) !important; }
        .hamburger:hover { background-color: rgba(255,255,255,0.1) !important; }
        @media (max-width: 900px) { .desktop-nav { display: none !important; } .desktop-ctas { display: none !important; } }
        @media (min-width: 901px) { .mobile-menu { display: none !important; } .hamburger { display: none !important; } }
      `}} />

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: "rgba(15, 23, 42, 0.97)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        transition: "border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}>

        {/* ── Marquee Strip ── */}
        <div style={{
          backgroundColor: "var(--accent-primary)",
          color: "#fff",
          padding: "6px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}>
          <div style={{ display: "inline-block", animation: "marquee 30s linear infinite" }}>
            {Array(10).fill("HP Market By SAB Group · Premium Commercial Spaces in Central Delhi").map((text, i) => (
              <span key={i} style={{ margin: "0 48px" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", marginRight: "48px" }}>✦</span>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* ── Main Nav Bar ── */}
        <div style={{
          maxWidth: "1400px", margin: "0 auto",
          padding: "0 32px",
          height: "68px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "24px",
        }}>

          {/* Logo */}
          <HPMLogo />

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "6px" }} aria-label="Main navigation">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.title} ref={dropdownRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setIsWhyUsOpen(!isWhyUsOpen)}
                    aria-expanded={isWhyUsOpen}
                    aria-haspopup="true"
                    style={{
                      ...navLinkStyle,
                      background: "none", border: "none", cursor: "pointer",
                      fontFamily: "inherit", display: "flex", alignItems: "center", gap: "5px",
                      padding: "4px 8px",
                    }}
                    className="nav-link"
                  >
                    {item.title}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: "transform 0.2s", transform: isWhyUsOpen ? "rotate(180deg)" : "rotate(0deg)" }} aria-hidden>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>

                  {isWhyUsOpen && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 12px)", left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#ffffff", borderRadius: "8px",
                      boxShadow: "0 16px 40px -8px rgba(0,0,0,0.18)",
                      border: "1px solid rgba(0,0,0,0.07)",
                      minWidth: "210px", overflow: "hidden",
                      animation: "slideDown 0.2s ease",
                      zIndex: 200,
                    }}>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setIsWhyUsOpen(false)}
                          className="dropdown-item"
                          style={{
                            display: "block", padding: "12px 18px",
                            color: "#1e293b", textDecoration: "none",
                            fontSize: "0.9rem", fontWeight: 500,
                            transition: "all 0.15s ease",
                            borderBottom: "1px solid rgba(0,0,0,0.04)",
                          }}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="nav-link"
                  style={{ ...navLinkStyle, padding: "4px 8px" }}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="desktop-ctas" style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <button
              onClick={() => setBrochureOpen(true)}
              className="cta-outline"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "9px 18px", borderRadius: "4px",
                fontSize: "0.85rem", fontWeight: 500,
                background: "none", cursor: "pointer",
                textDecoration: "none", transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Brochure
            </button>

            <Link
              href="/contact"
              className="cta-primary"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                backgroundColor: "var(--accent-primary)", color: "#ffffff",
                padding: "9px 20px", borderRadius: "4px",
                fontSize: "0.85rem", fontWeight: 700,
                textDecoration: "none", transition: "all 0.25s ease",
                letterSpacing: "0.01em", whiteSpace: "nowrap",
              }}
            >
              Book a Site Visit
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#ffffff", padding: "8px", borderRadius: "6px",
              transition: "background-color 0.2s ease", display: "flex",
            }}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div
            className="mobile-menu"
            style={{
              backgroundColor: "rgba(10,16,30,0.98)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "20px 24px 32px",
              display: "flex", flexDirection: "column", gap: "4px",
              animation: "mobileSlide 0.25s ease",
            }}
          >
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.title}>
                  <div style={{ padding: "12px 0", color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {item.title}
                  </div>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block", padding: "10px 12px",
                        color: "rgba(255,255,255,0.75)", textDecoration: "none",
                        fontSize: "0.95rem", fontWeight: 500,
                        borderRadius: "6px",
                      }}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block", padding: "13px 8px",
                    color: "rgba(255,255,255,0.85)", textDecoration: "none",
                    fontSize: "1rem", fontWeight: 500,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {item.title}
                </Link>
              )
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
              <button
                onClick={() => { setMobileOpen(false); setBrochureOpen(true); }}
                style={{
                  textAlign: "center", padding: "12px 20px",
                  color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "4px", fontWeight: 500, fontSize: "0.9rem",
                  background: "none", cursor: "pointer",
                }}
              >
                Download Brochure
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  textAlign: "center", padding: "13px 20px",
                  backgroundColor: "var(--accent-primary)", color: "#ffffff",
                  borderRadius: "4px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem",
                }}
              >
                Book a Site Visit
              </Link>
            </div>
          </div>
        )}
      </header>

      <BrochureModal 
        isOpen={brochureOpen} 
        onClose={() => setBrochureOpen(false)} 
      />
    </>
  );
}