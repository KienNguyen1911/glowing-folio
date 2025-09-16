import Link from 'next/link';
import { Button } from './ui/button';

export function SiteHeader() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-lg font-bold">NDK.</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline transition-colors hover:text-primary text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
            <Button asChild variant="ghost" className="transition-colors hover:text-primary text-foreground/80">
                <Link href="#contact" className="font-headline">Contact</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
