import { Hero } from "@/features";
import About from "@/features/about";
import ProjectsSection from "./components/projects";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <Hero.HeroSection />
      </div>

      <div className="container mx-auto px-12 py-4">
        <About />
      </div>

      <div className="container mx-auto px-12 py-4">
        <ProjectsSection />
      </div>
    </main>
  );
}
