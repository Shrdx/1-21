import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/HeroSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import SpacesSection from "@/components/sections/SpacesSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "HP Market by SAB Group",
        "image": "https://hpmarket.com/images/hero/sabmarket-building.jpg",
        "url": "https://hpmarket.com",
        "telephone": "",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1/21 Asaf Ali Road",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.6423,
          "longitude": 77.2322
        }
      },
      {
        "@type": "RealEstateListing",
        "name": "Premium Commercial Spaces in Central Delhi",
        "description": "Modern commercial infrastructure and wholesale shops at Asaf Ali Road, New Delhi.",
        "url": "https://hpmarket.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main>
        <HeroSection />
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