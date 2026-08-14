import Button from "@/components/ui/button";

export default function HeroContent() {
  return (
    <>
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        Central Delhi • Commercial Landmark
      </p>

      <h1 className="text-6xl font-medium leading-[0.88] tracking-[-0.06em] text-neutral-900 md:text-8xl xl:text-[8rem]">
        1/21
        <br />
        Asaf Ali Road
      </h1>

      <p className="mx-auto mt-10 max-w-2xl text-xl leading-9 text-neutral-600">
        A thriving commercial destination bringing together offices,
        retail spaces, showrooms and professional businesses under
        one landmark address.
      </p>

      <div className="mt-14 flex flex-wrap justify-center gap-4">
        <Button href="#about">
          Explore Building
        </Button>

        <Button
          href="#contact"
          className="bg-transparent"
        >
          Contact
        </Button>
      </div>
    </>
  );
}