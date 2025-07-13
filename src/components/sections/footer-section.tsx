import AnimatedSection from "../animations/animated-section";
import {SocialInfo} from "./index";
import {personalInfo} from "@/src/lib/data";

export default function FooterSection() {
    return (
        <footer className="p-4 border-t border-border/50 bg-background">
            <div className="container mx-auto text-center">
                <AnimatedSection animation="fade-up">
                    <p className="text-muted-foreground mb-6 text-base">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                    <div className="flex justify-center">
                        <SocialInfo/>
                    </div>
                </AnimatedSection>
            </div>
        </footer>
    )
}
