import Link from 'next/link';
import { Home, User, Briefcase, Code, Star } from 'lucide-react';

export function SiteHeader() {
  const navLinks = [
    { href: '#hero', label: 'Home', icon: <Home /> },
    { href: '#about', label: 'About', icon: <User /> },
    { href: '#skills', label: 'Skills', icon: <Code /> },
    { href: '#experience', label: 'Experience', icon: <Briefcase /> },
    { href: '#projects', label: 'Projects', icon: <Star /> },
  ];

  return (
    <header className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-2 rounded-full border border-border/40 bg-background/80 p-2 shadow-lg backdrop-blur-sm">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative flex h-12 w-12 flex-col items-center justify-center rounded-full bg-transparent text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {link.icon}
            <span className="absolute -top-7 hidden rounded-md bg-accent px-2 py-1 text-xs font-bold text-accent-foreground group-hover:block">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
