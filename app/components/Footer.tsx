// filepath: app/components/Footer.tsx
interface FooterProps {
  name?: string;
  year?: number;
}

export function Footer({
  name = "Marina Mizoguchi",
  year = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 text-center text-zinc-500 text-sm">
        <p>
          © {year} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
