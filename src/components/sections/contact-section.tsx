import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";
import {ContactForm, SectionWrapper} from "./index";
import AnimatedSection from "@/src/components/animations/animated-section";

export default function ContactSection() {
    return (
        <SectionWrapper id="contact" title="Get In Touch" className="bg-background-100">
            <div className="max-w-3xl mx-auto">
                <AnimatedSection animation="zoom-in" delay={200}>
                    <Card
                        className="shadow-xl border-border/50 bg-card hover:shadow-2xl transition-all duration-300">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-semibold text-foreground mb-2">Let's Work
                                Together</CardTitle>
                            <CardDescription className="text-lg text-muted-foreground">
                                I'm always interested in new opportunities and exciting projects. Feel free to reach out
                                if you'd like
                                to discuss potential collaborations.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ContactForm/>
                        </CardContent>
                    </Card>
                </AnimatedSection>
            </div>
        </SectionWrapper>
    )
}
