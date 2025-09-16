"use client";

import React from "react";
import { Section, SectionTitle } from "@/components/section-wrapper";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectCard, type Project } from "@/components/project-card";
import { placeholderImages } from "@/lib/placeholder-images";

const projects: Project[] = [
    {
        title: "Booking System",
        description: "Achieved 40% faster queries and 50% faster page loads through optimized architecture.",
        tech: ["Laravel 10", "VueJS 3", "MySQL", "AWS SQS", "Docker"],
        image: placeholderImages.find(p => p.id === 'project-booking'),
        projectDetails: "A comprehensive booking system built with Laravel 10 for the backend and VueJS 3 for a reactive frontend. Utilizes MySQL for data storage and AWS SQS for asynchronous job handling. The entire application is containerized with Docker for easy deployment and scalability."
    },
    {
        title: "Payroll & Time Tracking",
        description: "Automated payslip generation with PDF export and visualized stats using Chart.js.",
        tech: ["Laravel", "VueJS", "MySQL", "Chart.js"],
        image: placeholderImages.find(p => p.id === 'project-payroll'),
        projectDetails: "A system for managing employee payroll and time tracking. Features include automatic payslip generation, PDF exports, and statistical dashboards powered by Chart.js. Built with Laravel and VueJS."
    },
    {
        title: "Reminder App",
        description: "PWA with push notifications and multi-device support, powered by Firebase.",
        tech: ["Laravel", "VueJS", "Firebase", "PWA"],
        image: placeholderImages.find(p => p.id === 'project-reminder'),
        projectDetails: "A Progressive Web App (PWA) to set and receive reminders. Leverages Firebase for real-time notifications and data synchronization, ensuring a seamless experience across multiple devices."
    }
];


export function Projects() {
    // Carousel state for mobile dot indicator
    const [activeIndex, setActiveIndex] = React.useState(0);
    const emblaApiRef = React.useRef(null);

    // Import EmblaCarouselType for typing
    // @ts-ignore-next-line
    const handleApi = (api: any) => {
        emblaApiRef.current = api;
        if (!api) return;
        const onSelect = () => {
            setActiveIndex(api.selectedScrollSnap());
        };
        api.on("select", onSelect);
        setActiveIndex(api.selectedScrollSnap());
        // Clean up
        return () => {
            api.off("select", onSelect);
        };
    };

    return (
        <Section id="projects">
            <SectionTitle>Projects</SectionTitle>
            <Carousel 
                opts={{ loop: false, align: "start" }} 
                setApi={handleApi}
                className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
            >
                <CarouselContent>
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="group md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 h-full">
                                <ProjectCard project={project} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
            {/* Mobile carousel footer dots */}
            <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
                {projects.map((_, idx) => (
                    <span
                        key={idx}
                        className={
                            activeIndex === idx
                                ? "transition-all w-6 h-2 rounded-full bg-primary"
                                : "transition-all w-2 h-2 rounded-full bg-muted"
                        }
                    />
                ))}
            </div>
        </Section>
    );
}
