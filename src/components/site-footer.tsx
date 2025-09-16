import { Github, Linkedin } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="w-full border-t border-border/40 bg-background/95">
            <div className="container mx-auto flex flex-col items-center justify-between space-y-4 py-6 md:flex-row md:space-y-0">
                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Nguyễn Đồng Kiên. All Rights Reserved.
                </p>
                <div className="flex items-center space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
