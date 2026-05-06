// filepath: app/components/Contact.tsx
import { Section } from "./Section";
import { Button } from "./Button";

export function Contact() {
  return (
    <Section id="contact" background="white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's create
          something amazing together.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button href={`mailto:marina.peaches@gmail.com`} variant="primary">
            marina.peaches@gmail.com
          </Button>
        </div>
      </div>
    </Section>
  );
}
