import { Section } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    const contactInfo = [
        { icon: <MapPin />, text: "Hanoi, Vietnam" },
        { icon: <Mail />, text: "ngkien1911@gmail.com", href: "mailto:ngkien1911@gmail.com" },
        { icon: <Phone />, text: "09.6262.1911", href: "tel:+84962621911" },
        { icon: <Linkedin />, text: "LinkedIn", href: "#" },
        { icon: <Github />, text: "GitHub", href: "#" },
    ];
    
    return (
        <Section id="contact" className="bg-card/30">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-5xl">
                    Get In Touch
                </h2>
                <p className="font-inter mt-6 text-lg leading-8 text-foreground/80">
                    I'm currently open to new opportunities. Feel free to reach out if you have a project in mind or just want to connect!
                </p>

                <ul className="mt-10 space-y-4">
                    {contactInfo.map((item, index) => (
                        <li key={index} className="flex items-center justify-center gap-4 text-foreground/80">
                            <span className="text-accent">{item.icon}</span>
                            {item.href ? (
                                <a href={item.href} className="font-inter transition-colors hover:text-primary">{item.text}</a>
                            ) : (
                                <span className="font-inter">{item.text}</span>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="mt-12">
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
                        <a href="mailto:ngkien1911@gmail.com">Let’s Connect 🚀</a>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
