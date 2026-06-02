import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import AboutSection from "@/components/site/AboutSection";
import SkillsSection from "@/components/site/SkillsSection";
import ExperienceSection from "@/components/site/ExperienceSection";
import ProjectsSection from "@/components/site/ProjectsSection";
import EducationSection from "@/components/site/EducationSection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="relative min-h-full bg-zinc-50 font-sans text-zinc-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Skip to content
      </a>

      {/* Template background layer (grid + soft blobs) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -right-24 top-0 h-[460px] w-[460px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-50 to-transparent" />
      </div>

      <Navbar />

      <main id="main" className="flex flex-col">
        <Hero />
        <Stats />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
