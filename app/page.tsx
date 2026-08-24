import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutBuilding from "@/components/sections/AboutBuilding";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import SpacesSection from "@/components/sections/SpacesSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutBuilding />
        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <SpacesSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}