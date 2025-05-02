
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/conact/ContactSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/heor-section/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillSection";


export default function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ExperienceSection/>
        <ContactSection/>
        <Footer/>
    </div>
  );
}
