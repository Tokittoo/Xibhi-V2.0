import Intro from "@/components/intro-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HallOfFameSection } from "@/components/hall-of-fame-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Intro />
        <HallOfFameSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
