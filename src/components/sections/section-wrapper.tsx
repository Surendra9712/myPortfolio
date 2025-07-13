import AnimatedSection from "@/src/components/animations/animated-section";

interface ISectionWrapperProps {
    id: string,
    title: string,
    className?: string,
    children: React.ReactNode,
}

export default function SectionWrapper({id, title, children, className = ''}: ISectionWrapperProps) {
    return (
        <section id={id} className={`py-10 ${className}`}>
            <div className="container mx-auto">
                <AnimatedSection animation="fade-up">
                    <h2 className="text-4xl font-bold text-center text-primary mb-8">{title}</h2>
                </AnimatedSection>
                {children}
            </div>
        </section>
    )
}
