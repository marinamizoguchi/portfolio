// filepath: app/components/Navigation.tsx
interface NavLink {
  label: string;
  href: string;
}

const defaultNavLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
interface NavigationProps {
  logo?: string;
  links?: NavLink[];
}

export function Navigation({
  logo = "MMzgc",
  links = defaultNavLinks,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-semibold">{logo}</span>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
