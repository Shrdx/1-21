"use client";
import React, { useState } from "react";

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
        .gal-overlay { transition: background-color 0.4s ease; background-color: rgba(5,15,30,0.15); }
        .gal-card:hover .gal-overlay { background-color: rgba(5,15,30,0.62); }
        .gal-label { transition: opacity 0.35s ease, transform 0.35s ease; opacity: 0; transform: translateY(18px); }
        .gal-card:hover .gal-label { opacity: 1; transform: translateY(0); }
        @media (max-width: 768px) {
          .gal-grid { grid-template-columns: 1fr !important; }
          .gal-card { grid-column: span 1 !important; grid-row: span 1 !important; height: 260px !important; }
        }
      `}} />

      <section id="gallery" style={{
        backgroundColor: "#080f1e",
        padding: "120px 0",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px", position: "relative" }}>

          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: "24px",
          }}>
            <div>
              <div style={{ width: 60, height: 4, backgroundColor: "#f97316", marginBottom: 24 }} />
              <h2 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}>
                Our Site<br />Gallery.
              </h2>
            </div>
            <p style={{
              maxWidth: "380px",
              color: "#94a3b8",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBottom: 12,
            }}>
              A first look at HP Market — the landmark commercial development rising at 1/21 Asaf Ali Road, Central Delhi.
            </p>
          </div>

          {/* Masonry Grid */}
          <div
            className="gal-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridAutoRows: "280px",
              gap: "16px",
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
                    cursor: "zoom-in",
                    gridColumn: isHero ? "span 2" : "span 1",
                    gridRow: isHero ? "span 2" : isTall ? "span 2" : "span 1",
                    boxShadow: "0 16px 40px -8px rgba(0,0,0,0.45)",
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
                      padding: isHero ? "40px" : "24px",
                    }}
                  >
                    <span style={{
                      display: "block",
                      color: "#f97316",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      fontSize: "0.75rem",
                      marginBottom: 6,
                    }}>
                      {item.category}
                    </span>
                    <h3 style={{
                      color: "#ffffff",
                      fontSize: isHero ? "2rem" : "1.2rem",
                      fontWeight: 700,
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}>
                      {item.title}
                    </h3>
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
            backgroundColor: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            cursor: "zoom-out",
            backdropFilter: "blur(8px)",
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
            <div style={{ marginTop: 16, textAlign: "center" }}>
              <span style={{ color: "#f97316", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>
                {lightbox.category}
              </span>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.3rem", margin: "4px 0 0" }}>
                {lightbox.title}
              </p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#f97316",
                border: "none",
                color: "#fff",
                fontSize: "1.1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                boxShadow: "0 4px 16px rgba(249,115,22,0.5)",
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
