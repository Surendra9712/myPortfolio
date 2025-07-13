import SectionWrapper from "./section-wrapper";
import {experience} from "@/src/lib/data";
import AnimatedSection from "../animations/animated-section";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";
import {Badge} from "../ui/badge";

export default function ExperienceSection() {
    return (
        <SectionWrapper id="experience" title="Work Experience">
            <div
                className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-border before:rounded-full sm:before:left-1/2">
                {experience.map((job, index) => (
                    <div key={index} className="relative flex items-center justify-center sm:justify-start w-full">
                        <AnimatedSection
                            animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                            delay={index * 200}
                            className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-6 lg:pr-12" : "sm:pl-6 lg:pl-12 sm:ml-auto"}`}>
                            <Card
                                className="shadow-lg border-border/50 bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <CardTitle
                                                className="text-xl font-semibold text-foreground mb-1">{job.title}</CardTitle>
                                            <CardDescription
                                                className="text-lg text-muted-foreground">{job.company}</CardDescription>
                                        </div>
                                        <Badge variant="secondary"
                                               className="px-3 py-1 text-sm font-medium rounded-full">
                                            {job.duration}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="px-4">
                                        <ul className="list-disc space-y-2 text-foreground/80 text-base">
                                            {job.responsibilities.map((responsibility, respIndex) => (
                                                <li key={respIndex}>{responsibility}</li>
                                            ))}
                                        </ul>
                                    </div>
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
