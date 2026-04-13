import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <Suspense fallback={null}>
      <ParticleBackground />
    </Suspense>
    <CursorGlow />
    <Navbar />
    <div className="relative z-10">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
    <ScrollToTop />
  </div>
);

export default Index;
