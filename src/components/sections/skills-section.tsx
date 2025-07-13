import SectionWrapper from "./section-wrapper";
import {skills} from "@/src/lib/data";
import AnimatedSection from "../animations/animated-section";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import {Badge} from "../ui/badge";

export default function SkillsSection() {
    return (
        <SectionWrapper id="skills" title="Skills & Technologies">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-6">
                {skills.map((skillCategory, index) => (
                    <AnimatedSection key={index} animation="zoom-in" delay={index * 150}>
                        <Card
                            className="shadow-lg border-border/50 bg-card group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <CardHeader>
                                <CardTitle
                                    className="flex items-center space-x-3 text-2xl font-semibold text-foreground">
                                    <div
                                        className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                                    <span>{skillCategory.category}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {skillCategory.items.map((skill, skillIndex) => (
                                        <Badge
                                            key={skillIndex}
                                            variant="secondary"
                                            className="px-4 py-1.5 text-sm font-medium rounded-full shadow-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                ))}
            </div>
        </SectionWrapper>
    )
}
