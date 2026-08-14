import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutBuilding from "@/components/sections/AboutBuilding";
import BuildingHighlights from "@/components/sections/BuildingHighlights";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutBuilding />
        <BuildingHighlights />
        <GallerySection />
        <LocationSection />
        <AmenitiesSection />
        <CtaSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}