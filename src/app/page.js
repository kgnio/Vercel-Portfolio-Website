import Image from "next/image";
import HeroSection from "./en/components/HeroSection";
import Navbar from "./en/components/Navbar";
import AboutSection from "./en/components/AboutSection";
import ProjectsSection from "./en/components/ProjectsSection";
import EmailSection from "./en/components/EmailSection";
import Footer from "./en/components/Footer";
import AchievementsSection from "./en/components/Achivements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24  mx-auto py-4 px-12">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>{" "}
      <Footer />
    </main>
  );
}
