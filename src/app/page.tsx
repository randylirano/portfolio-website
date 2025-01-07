import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>

      <AboutSection />
    </main>
  );
}
