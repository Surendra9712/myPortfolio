import {ActiveSectionProvider} from "../providers/ActiveSectionContext";
import MainLayout from "@/src/app/main-layout";
import {
    AboutSection,
    CertificateSection,
    ContactSection,
    EducationSection,
    ExperienceSection,
    FooterSection,
    HeroSection,
    ProjectsSection,
    SkillsSection
} from "@/src/components/sections";

export default function Portfolio() {
    return (
        <ActiveSectionProvider>
            <MainLayout>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ExperienceSection/>
                <EducationSection/>
                <CertificateSection/>
                <ContactSection/>
                <FooterSection/>
            </MainLayout>
        </ActiveSectionProvider>
    )
}
