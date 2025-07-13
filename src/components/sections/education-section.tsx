import SectionWrapper from "./section-wrapper";
import AnimatedSection from "../animations/animated-section";
import {education} from "@/src/lib/data";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";
import {Badge} from "../ui/badge";

export default function EducationSection() {
    return (
        <SectionWrapper id="education" title="Education" className="bg-background-100">
            <AnimatedSection
                animation={'zoom-in'}
                delay={200}>
                <div className="max-w-3xl mx-auto">
                    {education.map((edu, index) => (
                        <Card key={index}
                              className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                                            <span>{edu.degree}</span>
                                        </CardTitle>
                                        <CardDescription
                                            className="text-lg">{edu.institution}</CardDescription>
                                    </div>
                                    <Badge variant="secondary" className="transition-colors duration-300">
                                        {edu.year}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <p className="text-muted-foreground transition-colors duration-300">{edu.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {edu.badges.map((badge, badgeIndex) => (
                                            <Badge
                                                key={badgeIndex}
                                                variant="outline"
                                                className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                                            >
                                                {badge}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </AnimatedSection>
        </SectionWrapper>
    )
}