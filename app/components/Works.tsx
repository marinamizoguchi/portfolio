// filepath: app/components/Works.tsx
import { Section } from "./Section";
import { Card } from "./Card";
import link from "next/dist/client/link";

interface Project {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  link?: string;
}

const defaultProjects: Project[] = [
  {
    title: "Foodable - Sustainable Food Delivery Website",
    category: "Website",
    description:
      "A website design concept for a sustainable food delivery service.",
    imageSrc: "/porto-1.webp",
    link: "https://www.behance.net/gallery/127675743/Foodable-Sustainable-Food-Delivery-Website",
  },
  {
    title: "UI/UX Case Study - Projects.co.id revamp",
    category: "Mobile App",
    description:
      "Projects.co.id is Indonesia's leading online marketplace specifically designed to connect businesses and individuals (Owners) with professional freelancers (Workers). Launched in November 2014 by PT Panonpoe Media.",
    imageSrc: "/porto-2.webp",
    link: "https://www.behance.net/gallery/247035171/UIUX-Case-Study-Projectscoid-revamp",
  },
  {
    title: "UI/UX Case Study - mysuperindo mobile app",
    category: "Mobile App",
    description:
      "My Super Indo is the official mobile app for Super Indo, one of Indonesia's major supermarket chains. The app combines loyalty membership, e-commerce, and shopping tools for customers in one platform.",
    imageSrc: "/porto-3.webp",
    link: "https://www.behance.net/gallery/247044545/UIUX-Case-Study-mysuperindo-mobile-app",
  },
];

interface WorksProps {
  title?: string;
  subtitle?: string;
  link?: string;
  projects?: Project[];
}

export function Works({
  title = "Selected Works",
  subtitle = "A collection of projects I've had the pleasure of working on",
  projects = defaultProjects,
}: WorksProps) {
  return (
    <Section id="works" background="white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        {title}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer"
          >
            <div className="aspect-[808/632] bg-zinc-100 dark:bg-zinc-800 rounded-2xl mb-4 overflow-hidden">
              {project.imageSrc ? (
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl text-zinc-300 dark:text-zinc-600 group-hover:scale-105 transition-transform">
                  🖼️
                </div>
              )}
            </div>
            <div className="text-sm text-zinc-500 mb-2">{project.category}</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
}
