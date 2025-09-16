import { Section, SectionTitle } from "@/components/section-wrapper";

export function About() {
    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <div className="flex justify-center items-center">
                <p className="font-inter text-lg leading-relaxed text-foreground/80 text-center max-w-2xl">
                    Backend Developer with 3+ years of experience in
                    <span className="text-2xl font-bold text-red-600 animate-bounce mx-1">Laravel</span>,
                    <span className="text-2xl font-bold text-teal-400 animate-bounce mx-1">VueJS</span>, and
                    <span className="text-2xl font-bold text-cyan-400 animate-bounce mx-1">MySQL</span>.
                    Skilled in scalable APIs, cloud integration, and system optimization. My long-term goal is to become a Software Architect.
                </p>
            </div>
        </Section>
    );
}
