import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({ id, className, children }: { id: string; className?: string, children: ReactNode }) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto max-w-screen-xl px-4">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h2 className={cn(
            "mb-12 text-center font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
            className
        )}>
            {children}
        </h2>
    )
}
