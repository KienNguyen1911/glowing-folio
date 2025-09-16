import { Section } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, BookOpen } from "lucide-react";

export function Extras() {
    return (
        <Section id="extras">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Card className="bg-card/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                    <CardHeader className="flex-row items-center gap-4">
                        <Lightbulb className="h-8 w-8 text-accent" />
                        <CardTitle className="font-headline">Current Focus</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-inter text-muted-foreground">Studying software architectures & microservices to design robust and scalable systems.</p>
                    </CardContent>
                </Card>
                <Card className="bg-card/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                    <CardHeader className="flex-row items-center gap-4">
                        <BookOpen className="h-8 w-8 text-accent" />
                        <CardTitle className="font-headline">Blog (Coming Soon)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-inter text-muted-foreground">A place to share my thoughts on technology, development, and personal growth.</p>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
