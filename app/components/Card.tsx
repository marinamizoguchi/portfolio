// filepath: app/components/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}
