import {SectionWrapper} from "@/src/components/sections/index";
import {certifications} from "@/src/lib/data";
import AnimatedSection from "@/src/components/animations/animated-section";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/src/components/ui/card";
import {Badge} from "@/src/components/ui/badge";

export default function CertificationsSection() {
    return (
        <SectionWrapper id="certifications" title="Certifications">
            <div
                className="max-w-4xl mx-auto space-y-12 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-border before:rounded-full sm:before:left-1/2">
                {certifications.map((cert, index) => (
                    <div key={index} className="relative flex items-center justify-center sm:justify-start w-full">
                        <AnimatedSection
                            animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                            delay={index * 200}
                            className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-6 lg:pr-12" : "sm:pl-6 lg:pl-12 sm:ml-auto"}`}
                        >
                            <Card
                                className="shadow-lg border-border/50 bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle
                                                className="text-xl font-semibold text-foreground mb-1">{cert.title}</CardTitle>
                                            <CardDescription
                                                className="text-lg text-muted-foreground">{cert.issuer}</CardDescription>
                                        </div>
                                        <Badge variant="secondary"
                                               className="px-3 py-1 text-sm font-medium rounded-full">
                                            {cert.year}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 text-base">{cert.description}</p>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                        <div
                            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 border-2 border-background"></div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}
