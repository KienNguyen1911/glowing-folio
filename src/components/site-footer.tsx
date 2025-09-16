import { Github, Linkedin, Facebook } from "lucide-react";

export function SiteFooter() {
    const socialLinks = [
        { href: "#", icon: <Github className="h-5 w-5" />, label: "GitHub" },
        { href: "#", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
        { href: "#", icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
    ];

    const footerLinks = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <footer className="w-full border-t border-border/40 bg-background/95">
            <div className="container mx-auto grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <a href="#" className="font-headline text-xl font-bold">NDK.</a>
                    <p className="mt-2 text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Nguyễn Đồng Kiên. All Rights Reserved.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="font-headline font-semibold text-foreground">Links</h3>
                        <ul className="mt-4 space-y-2">
                            {footerLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-muted-foreground transition-colors hover:text-primary">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline font-semibold text-foreground">Social</h3>
                        <ul className="mt-4 space-y-2">
                             {socialLinks.map(social => (
                                <li key={social.label}>
                                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-primary md:justify-start">
                                        {social.icon}
                                        <span>{social.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                 <div className="flex items-center justify-center gap-4 md:justify-end">
                    {/* Social icons for the third column, if needed, or leave it for alignment */}
                </div>
            </div>
        </footer>
    );
}
