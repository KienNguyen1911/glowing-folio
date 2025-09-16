import { Section, SectionTitle } from "@/components/section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const timelineData = [
    {
        company: "The First One",
        role: "Outsource company for Japanese market",
        date: "12/2022 – 07/2025",
        description: "Developed and maintained web applications for various clients in the Japanese market, focusing on backend services with Laravel and frontend with VueJS."
    }
];

export function Experience() {
    return (
        <Section id="experience">
            <SectionTitle>Experience</SectionTitle>
            <div className="relative mx-auto max-w-2xl">
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border/40"></div>
                {timelineData.map((item, index) => (
                     <div key={index} className="relative mb-8 pl-8 md:flex md:items-center md:pl-0">
                        <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2"></div>
                        <div className="w-full md:w-1/2 md:pr-8 md:text-right">
                             <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                         <div className="w-full md:w-1/2 md:pl-8">
                             <Card className="mt-2 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 bg-card/50 md:mt-0">
                                <CardHeader>
                                    <CardTitle className="font-headline text-xl">{item.company}</CardTitle>
                                    <CardDescription className="font-inter">{item.role}</CardDescription>
                                </CardHeader>
                             </Card>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
