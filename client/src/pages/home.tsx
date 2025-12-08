import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Services from "@/components/sections/Services";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Tools from "@/components/sections/Tools";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <WhyChooseMe />
        <Tools />
        <Contact />
      </main>
      <footer className="bg-primary py-8 text-center text-white/60 text-sm border-t border-white/10">
        <p>© 2025 Executive VA Services. All rights reserved.</p>
      </footer>
    </div>
  );
}
