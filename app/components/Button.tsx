// filepath: app/components/Button.tsx
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-full font-medium transition-all duration-200 inline-flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:opacity-90",
    secondary:
      "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700",
    outline:
      "border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
