import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function Heading({
  title,
  subtitle,
  align = "left",
}: HeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <h2 className="text-5xl font-medium leading-none tracking-[-0.04em] text-neutral-900 md:text-7xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}