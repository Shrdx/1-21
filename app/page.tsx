import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/HeroSection";
import PropertyFacts from "@/components/sections/PropertyFacts";
import WhyHpMarket from "@/components/sections/WhyHpMarket";
import BusinessAdvantage from "@/components/sections/BusinessAdvantage";

import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import SpacesWeOffer from "@/components/sections/SpacesWeOffer";

import ByTheNumbers from "@/components/sections/ByTheNumbers";
import FinalCta from "@/components/sections/FinalCta";

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
        <PropertyFacts />
        <WhyHpMarket />
        <BusinessAdvantage />

        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <SpacesWeOffer />

        <ByTheNumbers />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}