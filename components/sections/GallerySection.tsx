"use client";
import React, { useState } from "react";
import Link from 'next/link';

const galleryItems = [
  {
    id: 1,
    title: "Building Exterior",
    alt: "HP Market Commercial Building Exterior in Central Delhi",
    category: "Exterior",
    src: "/herosection2.png",
    span: "col2 row2", // large hero
  },
  {
    id: 2,
    title: "Main Hall",
    alt: "Spacious Main Hall for Wholesale Trading at HP Market",
    category: "Interior",
    src: "/images/gallery/hall_e.png",
    span: "col1 row1",
  },
  {
    id: 3,
    title: "Terrace View",
    alt: "Terrace View of Central Delhi from HP Market Commercial Complex",
    category: "Terrace",
    src: "/images/gallery/terr_e.png",
    span: "col1 row1",
  },
  {
    id: 4,
    title: "Interior Corridor",
    alt: "Wide Air Conditioned Interior Corridor for Easy Logistics",
    category: "Interior",
    src: "/images/gallery/interior_spaces.png",
    span: "col1 row2", // tall tile
  },
  {
    id: 5,
    title: "Interior Spaces",
    alt: "Premium Retail and Wholesale Interior Spaces at Asaf Ali Road",
    category: "Interior",
    src: "/images/gallery/interiorS.png",
    span: "col1 row1",
  },
  {
    id: 6,
    title: "Terrace Level",
    alt: "Open Terrace Level for Commercial Use in New Delhi",
    category: "Terrace",
    src: "/images/gallery/terrace_s.png",
    span: "col1 row1",
  },
  {
    id: 7,
    title: "Balcony",
    alt: "Commercial Office Balcony at HP Market",
    category: "Exterior",
    src: "/images/gallery/balcony.png",
    span: "col1 row1",
  },
  {
    id: 8,
    title: "Restrooms",
    alt: "Modern Hygienic Restrooms at HP Market Delhi",
    category: "Amenities",
    src: "/images/gallery/restrooms.png",
    span: "col1 row1",
  },
  {
    id: 9,
    title: "Lift",
    alt: "High Speed Freight and Passenger Elevators at HP Market",
    category: "Amenities",
    src: "/images/gallery/lift.png",
    span: "col1 row1",
  },
  {
    id: 10,
    title: "Air Conditioning",
    alt: "Central Air Conditioning for Wholesale Shops",
    category: "Amenities",
    src: "/images/gallery/AC.png",
    span: "col1 row1",
  },
  {
    id: 11,
    title: "Double Shops",
    alt: "Spacious Double Shops for Wholesale Traders in Central Delhi",
    category: "Interior",
    src: "/images/gallery/double_shops.png",
    span: "col1 row1",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<null | (typeof galleryItems)[0]>(null);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .gal-card { transition: box-shadow 0.4s ease; }
        .gal-card:hover { box-shadow: 0 30px 60px -10px rgba(0,0,0,0.6) !important; }
        .gal-img { transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1); }
        .gal-card:hover .gal-img { transform: scale(1.07); }
        .gal-overlay { transition: background-color 0.4s ease; background-color: rgba(15,23,42,0.2); }
        .gal-card:hover .gal-overlay { background-color: rgba(15,23,42,0.7); }
        .gal-label { transition: opacity 0.35s ease, transform 0.35s ease; opacity: 0; transform: translateY(18px); }
        .gal-card:hover .gal-label { opacity: 1; transform: translateY(0); }
        .gal-arrow { transition: transform 0.3s ease; }
        .gal-card:hover .gal-arrow { transform: translateX(5px); }
        @media (max-width: 768px) {
          .gal-grid { grid-template-columns: 1fr !important; }
          .gal-card { grid-column: span 1 !important; grid-row: span 1 !important; height: 260px !important; }
        }
      `}} />

      <section id="gallery" style={{
        backgroundColor: "var(--bg-dark-slate)",
        padding: "140px 0",
        position: "relative",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px", position: "relative" }}>

          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "80px",
            flexWrap: "wrap",
            gap: "24px",
          }}>
            <div>
              <div className="label-text" style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--accent-primary)' }}></span>
                A FIRST LOOK / 03
              </div>
              <h2 className="heading-text" style={{
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}>
                SEE THE<br />DIFFERENCE.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' }}>
              <p className="body-text-lg" style={{
                maxWidth: "450px",
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}>
                Explore the spaces, interiors and details designed to make everyday business more seamless.
              </p>
              <Link href="/gallery" className="label-text" style={{ 
                color: '#fff', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid var(--accent-primary)',
                paddingBottom: '4px'
              }}>
                VIEW FULL GALLERY
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Masonry Grid */}
          <div
            className="gal-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridAutoRows: "320px",
              gap: "24px",
            }}
          >
            {galleryItems.map((item) => {
              const isHero = item.span === "col2 row2";
              const isTall = item.span === "col1 row2";
              return (
                <div
                  key={item.id}
                  className="gal-card"
                  onClick={() => setLightbox(item)}
                  style={{
                    position: "relative",
                    borderRadius: "14px",
                    overflow: "hidden",
                    cursor: "pointer",
                    gridColumn: isHero ? "span 2" : "span 1",
                    gridRow: isHero ? "span 2" : isTall ? "span 2" : "span 1",
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <img
                    className="gal-img"
                    src={item.src}
                    alt={item.alt || item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div className="gal-overlay" style={{ position: "absolute", inset: 0 }} />
                  <div
                    className="gal-label"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: isHero ? "40px" : "32px",
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div>
                        <span className="label-text" style={{
                          display: "block",
                          color: "var(--accent-primary)",
                          marginBottom: 8,
                        }}>
                          {item.category}
                        </span>
                        <h3 style={{
                          color: "#ffffff",
                          fontSize: isHero ? "2rem" : "1.5rem",
                          fontWeight: 600,
                          margin: 0,
                          letterSpacing: "-0.01em",
                        }}>
                          {item.title}
                        </h3>
                      </div>
                      <div className="gal-arrow" style={{ color: 'var(--accent-primary)' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundColor: "rgba(15,23,42,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            cursor: "zoom-out",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "88vh" }} onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              style={{
                maxWidth: "100%",
                maxHeight: "82vh",
                borderRadius: "12px",
                boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
                objectFit: "contain",
                display: "block",
              }}
            />
            <div style={{ marginTop: 24, textAlign: "center", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="label-text" style={{ color: "var(--accent-primary)", marginBottom: '8px' }}>
                {lightbox.category}
              </span>
              <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "1.5rem", margin: 0 }}>
                {lightbox.title}
              </p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: -24,
                right: -24,
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "var(--accent-primary)",
                border: "none",
                color: "#fff",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(255,106,0,0.5)",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
