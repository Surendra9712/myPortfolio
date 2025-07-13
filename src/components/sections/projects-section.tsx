import Image from "next/image"
import SectionWrapper from "./section-wrapper"
import {projects} from "@/src/lib/data";
import AnimatedSection from "../animations/animated-section";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";
import {Badge} from "../ui/badge";

export default function ProjectsSection() {
    return (
        <SectionWrapper id="projects" title="Featured Projects" className="bg-background-100">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">
                {projects.map((project, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                        <Card
                            className="h-full group overflow-hidden shadow-lg border-border/50 bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <CardHeader>
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="mt-2">
                                    <CardTitle
                                        className="flex items-center justify-between text-2xl font-semibold mb-2">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-foreground/80 text-base">
                                        {project.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.badges.map((badge, badgeIndex) => (
                                        <Badge
                                            key={badgeIndex}
                                            variant="outline"
                                            className="px-3 py-1 text-xs font-medium rounded-full border-primary/50 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                                        >
                                            {badge}
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
