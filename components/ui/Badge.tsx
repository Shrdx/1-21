import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600",
        className
      )}
    >
      {children}
    </span>
  );
}