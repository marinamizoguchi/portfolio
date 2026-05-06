// filepath: app/components/About.tsx
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" background="white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex flex-col items-center justify-start">
        About Me
      </h2>
      <div className="max-w-xl mx-auto text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            UI/UX Designer based in Yogyakarta, Indonesia
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            UI/UX Designer with 3+ years of experience crafting intuitive web
            and mobile interfaces. Focused on delivering clear, user-centered
            solutions that not only look good but also support business goals
            and long-term product growth.
          </p>
        </div>
      </div>
    </Section>
  );
}
