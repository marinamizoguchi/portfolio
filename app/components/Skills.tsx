// filepath: app/components/Skills.tsx
import { Section } from "./Section";
import { Card } from "./Card";

const skillCategories = [
  {
    title: "Hard Skills",
    skills: [
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "User Flow",
      "Brand Identity Design",
      "User Interview",
      "Survey",
      "Competitive Analysis",
      "Information Architecture",
      "Vibe Coding",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Team Collaboration",
      "UX Facilitator",
    ],
  },
  {
    title: "Software Skills",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Maze",
      "Figma Make",
      "Google Stitch",
      "Lovable",
      "Chat GPT",
      "Gemini",
    ],
  },
];

interface SkillsProps {
  title?: string;
}

export function Skills({ title = "Skills" }: SkillsProps) {
  return (
    <Section id="skills" background="default">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
                >
                  <span className="text-zinc-400 mt-1">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
