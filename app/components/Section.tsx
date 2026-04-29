// filepath: app/components/Section.tsx
interface SectionProps {
  id?: string;
  children: React.ReactNode;
  background?: "default" | "white" | "zinc";
  className?: string;
}

const backgroundClasses = {
  default: "bg-zinc-50 dark:bg-zinc-950",
  white: "bg-white dark:bg-zinc-900",
  zinc: "bg-zinc-100 dark:bg-zinc-900",
};

export function Section({
  id,
  children,
  background = "default",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}
