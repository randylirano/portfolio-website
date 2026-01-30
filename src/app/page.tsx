import { About, Hero, Project } from "@/features";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <Hero.HeroSection />
      </div>

      <div className="container mx-auto px-12 py-4">
        <About.AboutSection />
      </div>

      <div className="container mx-auto px-12 py-4">
        <Project />
      </div>
    </main>
  );
}
