import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact HP Market | Commercial Property in Asaf Ali Road, Delhi",
  description:
    "Get in touch with HP Market. Explore commercial spaces, investment opportunities, and schedule a site visit at our modern commercial property in Asaf Ali Road, New Delhi.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '70px', minHeight: 'calc(100vh - 70px)' }}>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
