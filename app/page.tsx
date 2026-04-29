// filepath: app/page.tsx
import {
  Navigation,
  Hero,
  About,
  Skills,
  Works,
  Testimonials,
  Contact,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
