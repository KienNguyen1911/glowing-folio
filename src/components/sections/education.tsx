import { Section, SectionTitle } from "@/components/section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <Section id="education">
            <SectionTitle>Education</SectionTitle>
            <div className="mx-auto max-w-2xl">
                <Card className="bg-card/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader>
                        <div className="flex items-start gap-4">
                            <GraduationCap className="mt-1 h-8 w-8 shrink-0 text-primary" />
                            <div>
                                <CardTitle className="font-headline text-xl">FPT College, Hanoi</CardTitle>
                                <p className="text-muted-foreground">09/2020 – 12/2022</p>
                                <CardDescription className="font-inter mt-2">Major: IT, Minor: Web Development</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </Section>
    );
}
