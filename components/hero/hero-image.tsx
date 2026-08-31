import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative overflow-hidden rounded-[32px]">
      <Image
        src="/images/hero/sabmarket-building.jpg"
        alt="HP Market Building"
        width={1800}
        height={1200}
        priority
        className="h-[70vh] w-full object-cover"
      />

      <div className="absolute bottom-8 left-8 rounded-2xl border border-white/40 bg-white/80 p-6 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          Commercial Building
        </p>

        <h3 className="mt-2 text-2xl font-medium">
          150+ Businesses
        </h3>

        <p className="mt-2 text-neutral-600">
          Offices, Retail & Showrooms
        </p>
      </div>
    </div>
  );
}