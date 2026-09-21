"use client";
import React, { useState, useEffect } from "react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setForm({ name: "", email: "", phone: "" });
      setErrors({ name: "", email: "", phone: "" });
      setSubmitted(false);
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "" };
    let valid = true;

    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!form.name.trim()) {
      newErrors.name = "Name is required"; valid = false;
    } else if (!nameRegex.test(form.name.trim())) {
      newErrors.name = "Please enter a valid name (letters only)"; valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required"; valid = false;
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address"; valid = false;
    }

    const cleanPhone = form.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(?:\+?91)?([6-9]\d{9})$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required"; valid = false;
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number"; valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      window.open("/hp_market_final.pdf", "_blank", "noopener,noreferrer");
      onClose();
    }, 1200);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bm-backdrop-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bm-card-in { from { opacity: 0; transform: translateY(28px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes bm-spin { to { transform: rotate(360deg); } }
        .bm-backdrop { animation: bm-backdrop-in 0.25s ease; }
        .bm-card { animation: bm-card-in 0.35s cubic-bezier(0.22,1,0.36,1); }
        .bm-input:focus { border-color: #f97316 !important; box-shadow: 0 0 0 3px rgba(249,115,22,0.15) !important; outline: none; }
        .bm-submit:hover:not(:disabled) { background: linear-gradient(135deg,#fb923c,#f97316) !important; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(249,115,22,0.45) !important; }
        .bm-submit:active:not(:disabled) { transform: translateY(0); }
        .bm-close:hover { background: rgba(255,255,255,0.12) !important; }
      `}} />

      <div
        className="bm-backdrop"
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 10000,
          backgroundColor: "rgba(5,10,22,0.82)",
          backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          className="bm-card"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "20px",
            width: "100%",
            maxWidth: "460px",
            padding: "40px 36px",
            position: "relative",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(249,115,22,0.1)",
          }}
        >
          <button
            className="bm-close"
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute", top: 16, right: 16,
              background: "#f3f4f6", border: "none",
              color: "#6b7280", width: 36, height: 36,
              borderRadius: "50%", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.1rem", transition: "background 0.2s",
            }}
          >✕</button>

          {!submitted ? (
            <>
              <div style={{ marginBottom: 28 }}>
                <div style={{ width: 44, height: 3, backgroundColor: "#f97316", borderRadius: 2, marginBottom: 16 }} />
                <h2 style={{
                  color: "#111827", fontSize: "1.6rem", fontWeight: 800,
                  margin: "0 0 8px", letterSpacing: "-0.02em", lineHeight: 1.2,
                }}>
                  Download Brochure
                </h2>
                <p style={{ color: "#4b5563", fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>
                  Please share your details to access the HP Market brochure.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label style={{ display: "block", color: "#374151", fontSize: "0.8rem", fontWeight: 600, marginBottom: 7, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Full Name
                  </label>
                  <input
                    className="bm-input"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: "100%", boxSizing: "border-box",
                      background: "#ffffff",
                      border: `1px solid ${errors.name ? "#ef4444" : "#d1d5db"}`,
                      borderRadius: 10, padding: "12px 14px",
                      color: "#111827", fontSize: "0.95rem",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  />
                  {errors.name && <p style={{ color: "#ef4444", fontSize: "0.78rem", margin: "5px 0 0" }}>{errors.name}</p>}
                </div>

                <div>
                  <label style={{ display: "block", color: "#374151", fontSize: "0.8rem", fontWeight: 600, marginBottom: 7, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Email Address
                  </label>
                  <input
                    className="bm-input"
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: "100%", boxSizing: "border-box",
                      background: "#ffffff",
                      border: `1px solid ${errors.email ? "#ef4444" : "#d1d5db"}`,
                      borderRadius: 10, padding: "12px 14px",
                      color: "#111827", fontSize: "0.95rem",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  />
                  {errors.email && <p style={{ color: "#ef4444", fontSize: "0.78rem", margin: "5px 0 0" }}>{errors.email}</p>}
                </div>

                <div>
                  <label style={{ display: "block", color: "#374151", fontSize: "0.8rem", fontWeight: 600, marginBottom: 7, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Phone Number
                  </label>
                  <input
                    className="bm-input"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{
                      width: "100%", boxSizing: "border-box",
                      background: "#ffffff",
                      border: `1px solid ${errors.phone ? "#ef4444" : "#d1d5db"}`,
                      borderRadius: 10, padding: "12px 14px",
                      color: "#111827", fontSize: "0.95rem",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  />
                  {errors.phone && <p style={{ color: "#ef4444", fontSize: "0.78rem", margin: "5px 0 0" }}>{errors.phone}</p>}
                </div>

                <button
                  className="bm-submit"
                  type="submit"
                  disabled={loading}
                  style={{
                    marginTop: 6,
                    background: "linear-gradient(135deg, #f97316, #ea6c0a)",
                    color: "#ffffff", border: "none",
                    borderRadius: 10, padding: "14px 24px",
                    fontSize: "0.95rem", fontWeight: 700,
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                    transition: "all 0.2s ease",
                    boxShadow: "0 4px 16px rgba(249,115,22,0.3)",
                    opacity: loading ? 0.85 : 1,
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{
                        width: 18, height: 18, border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff", borderRadius: "50%",
                        animation: "bm-spin 0.7s linear infinite",
                        display: "inline-block",
                      }} />
                      Processing…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                      Get Brochure
                    </>
                  )}
                </button>

                <p style={{ color: "#6b7280", fontSize: "0.75rem", textAlign: "center", margin: 0 }}>
                  🔒 Your information is safe with us. No spam, ever.
                </p>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "0 8px 24px rgba(34,197,94,0.4)",
              }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 style={{ color: "#111827", fontSize: "1.4rem", fontWeight: 800, margin: "0 0 10px" }}>
                Thank You!
              </h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", margin: 0, lineHeight: 1.6 }}>
                Opening your brochure now…
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
