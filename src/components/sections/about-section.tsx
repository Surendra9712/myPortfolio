import {CalendarIcon, DrawingPinIcon, EnvelopeClosedIcon, MobileIcon} from "@radix-ui/react-icons";
import {aboutMe, personalInfo} from "@/src/lib/data";
import {SectionWrapper} from "@/src/components/sections/index";
import AnimatedSection from "@/src/components/animations/animated-section";
import {Card, CardContent} from "@/src/components/ui/card";

export default function AboutSection() {
    return (
        <SectionWrapper id="about" title="About Me" className="bg-background-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-8 text-lg text-foreground/90 leading-relaxed">
                    {aboutMe.paragraphs.map((paragraph, index) => (
                        <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                            <p>{paragraph}</p>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection animation="slide-in-right" delay={300}>
                    <Card className="shadow-xl border-border/50 bg-card hover:shadow-2xl transition-all duration-300">
                        <CardContent className="space-y-6">
                            <div className="flex items-center space-x-4 text-lg">
                                <DrawingPinIcon className="h-6 w-6 text-primary flex-shrink-0"/>
                                <span>{personalInfo.location}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-lg">
                                <CalendarIcon className="h-6 w-6 text-primary flex-shrink-0"/>
                                <span>{personalInfo.experienceYears}</span>
                            </div>
                            <div className="overflow-clip flex items-center space-x-4 text-lg">
                                <EnvelopeClosedIcon className="h-6 w-6 text-primary flex-shrink-0"/>
                                <p className="break-all">{personalInfo.email}</p>
                            </div>
                            <div className="flex items-center space-x-4 text-lg">
                                <MobileIcon className="h-6 w-6 text-primary flex-shrink-0"/>
                                <span>+977{personalInfo.phone}</span>
                            </div>
                        </CardContent>
                    </Card>
                </AnimatedSection>
            </div>
        </SectionWrapper>
    )
}
