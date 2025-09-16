import { Section, SectionTitle } from "@/components/section-wrapper";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Database, Cloud, TestTube, Zap } from "lucide-react";

const skillsData = [
    { title: "Backend", content: "PHP (Laravel), RESTful APIs", icon: <Icons.php className="h-10 w-10" /> },
    { title: "Frontend", content: "VueJS, JavaScript", icon: <Icons.vue className="h-10 w-10" /> },
    { title: "Databases", content: "MySQL, MongoDB", icon: <Database className="h-10 w-10 text-primary" /> },
    { title: "Cloud & DevOps", content: "AWS, Docker, Git", icon: <Icons.docker className="h-10 w-10" /> },
    { title: "Testing", content: "Unit Testing, API Testing", icon: <TestTube className="h-10 w-10 text-primary" /> },
    { title: "Others", content: "WebSockets, System Optimization", icon: <Zap className="h-10 w-10 text-primary" /> },
];

const SkillCard = ({ title, content, icon }: { title: string; content: string; icon: React.ReactNode }) => (
    <Card className="flex flex-col items-center justify-start p-6 text-center transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 bg-card/50">
        <div className="mb-4">{icon}</div>
        <h3 className="font-headline text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground font-inter flex-grow">{content}</p>
    </Card>
);

export function Skills() {
    return (
        <Section id="skills">
            <SectionTitle>My Tech Stack</SectionTitle>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillsData.map((skill) => (
                    <SkillCard key={skill.title} {...skill} />
                ))}
            </div>
        </Section>
    );
}
