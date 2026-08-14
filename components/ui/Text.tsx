import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        "text-lg leading-8 text-neutral-600",
        className
      )}
    >
      {children}
    </p>
  );
}