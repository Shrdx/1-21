import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/ContactSection";

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
