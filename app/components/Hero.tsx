// filepath: app/components/Hero.tsx
import { Avatar } from "./Avatar";
import { Button } from "./Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
        <Avatar src="/profile-picture.png" size="lg" fallback="👤" />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-8">
          Hi, I'm{" "}
          <span className="text-zinc-600 dark:text-zinc-400">
            Marina Mizoguchi
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          A creative UI/UX Designer crafting beautiful digital experiences
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button href="#works" variant="primary">
            View My Work
          </Button>
          <Button href="#contact" variant="outline">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
