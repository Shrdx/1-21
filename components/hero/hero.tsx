import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import HeroImage from "./hero-image";
import HeroStats from "./hero-stats";
import HeroContent from "./hero-content";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <HeroContent />
        </div>

        <div className="mt-20">
          <HeroImage />
        </div>

        <HeroStats />
      </Container>
    </section>
  );
}