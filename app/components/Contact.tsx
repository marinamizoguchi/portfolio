// filepath: app/components/Contact.tsx
import { Section } from "./Section";
import { Button } from "./Button";

interface SocialLink {
  name: string;
  url: string;
}

interface ContactProps {
  title?: string;
  description?: string;
  email?: string;
}

export function Contact({
  title = "Let's Work Together",
  description = "Have a project in mind? I'd love to hear about it. Let's create something amazing together.",
  email = "marina.peaches@gmail.com",
}: ContactProps) {
  return (
    <Section id="contact" background="white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button href={`mailto:${email}`} variant="primary">
            {email}
          </Button>
        </div>
      </div>
    </Section>
  );
}
