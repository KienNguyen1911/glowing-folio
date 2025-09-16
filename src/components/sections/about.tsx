import { Section, SectionTitle } from "@/components/section-wrapper";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

export function About() {
    const aboutImage = placeholderImages.find(p => p.id === "about-illustration");

    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="order-2 md:order-1">
                    <p className="font-inter text-lg leading-relaxed text-foreground/80">
                        Backend Developer with 3+ years of experience in Laravel, VueJS, and MySQL. Skilled in scalable APIs, cloud integration, and system optimization. My long-term goal is to become a Software Architect.
                    </p>
                </div>
                <div className="relative order-1 mx-auto h-80 w-80 overflow-hidden rounded-full md:order-2 md:h-96 md:w-96">
                    {aboutImage ? (
                        <Image
                            src={aboutImage.imageUrl}
                            alt={aboutImage.description}
                            width={500}
                            height={500}
                            className="h-full w-full object-cover"
                            data-ai-hint={aboutImage.imageHint}
                        />
                    ) : (
                         <div className="flex h-full w-full items-center justify-center rounded-2xl bg-card/50">
                            <p className="font-headline text-muted-foreground">Illustration</p>
                        </div>
                    )}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/50"></div>
                </div>
            </div>
        </Section>
    );
}
