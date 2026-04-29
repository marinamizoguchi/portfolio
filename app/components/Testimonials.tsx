// filepath: app/components/Testimonials.tsx
import { Section } from "./Section";
import { Card } from "./Card";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Marina is an experienced UI/UX practitioner who consistently demonstrates high dedication to refining her technical skills within the UI/UX & Front-End Development program at Purwadhika. Throughout the learning process, Marina was more than just a learning partner, she served as a role model for strategic and user-centered decision-making.",
    name: "Andi Fahrul Azis",
    role: "UI/UX Designer | Frontend Web Developer",
  },
  {
    quote:
      "So glad to have had Marina on the team. Her eye for detail in Figma is top-notch, especially when it comes to making landing pages mobile-friendly and high-converting. Plus, her fluency in English and Bahasa Indonesia is such a versatile asset!",
    name: "Ruthy Lilipaly",
    role: "Digital Marketing Specialist | Lead generation Specialist | B2B & B2C experience in startups and digital agency",
  },
  {
    quote:
      "Working with Marina, both in the form of organizations, freelance, and group activities during college, I felt that Marina was a competent person and had a high learning spirit. So, now she has extraordinary abilities. Marina has a high sense of responsibility so you don't have to worry when working with Marina. Experience working professionally with Marina, you will not be disappointed.",
    name: "Ashr Lian Alviani",
    role: "Graphic Designer | Ex-Ruangguru",
  },
];

interface TestimonialsProps {
  title?: string;
  testimonials?: Testimonial[];
}

export function Testimonials({
  title = "Testimonials",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  return (
    <Section id="testimonials" background="default">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        {title}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-zinc-500">{testimonial.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
