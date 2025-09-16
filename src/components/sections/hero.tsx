import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "@/components/section-wrapper";

export function Hero() {
    return (
        <Section id="hero" className="pt-24 md:pt-32">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        Hi, I’m Nguyễn Đồng Kiên 👋
                    </h1>
                    <p className="mt-4 font-headline text-xl text-primary md:text-2xl">
                        PHP & VueJS Developer
                    </p>
                    <p className="font-inter mt-6 max-w-xl text-lg text-foreground/80">
                        Building scalable backends & creative UIs
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                        <Button asChild size="lg" className="transition-transform hover:scale-105">
                            <Link href="#projects">🚀 View Projects</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-accent text-accent transition-transform hover:scale-105 hover:bg-accent/10 hover:text-accent">
                            <Link href="#contact">📩 Contact Me</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative mx-auto h-80 w-80 md:h-96 md:w-96">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-70 blur-3xl"></div>
                    <div className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                        <p className="font-headline text-muted-foreground">3D Avatar Placeholder</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
