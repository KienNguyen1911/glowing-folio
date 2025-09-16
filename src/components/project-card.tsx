"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from './ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { analyzeProjectFeedback } from '@/ai/flows/analyze-project-feedback';
import { Loader2 } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export type Project = {
    title: string;
    description: string;
    tech: string[];
    image?: ImagePlaceholder;
    projectDetails: string;
};

const feedbackSchema = z.object({
  feedback: z.string().min(10, "Feedback must be at least 10 characters.").max(500),
});

export function ProjectCard({ project }: { project: Project }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [aiResult, setAiResult] = useState<string | null>(null);

    const form = useForm<z.infer<typeof feedbackSchema>>({
        resolver: zodResolver(feedbackSchema),
        defaultValues: { feedback: "" },
    });

    async function onSubmit(values: z.infer<typeof feedbackSchema>) {
        setIsLoading(true);
        setAiResult(null);
        try {
            const result = await analyzeProjectFeedback({
                projectDetails: project.projectDetails,
                userFeedback: values.feedback
            });
            setAiResult(result.improvementSuggestions);
        } catch (error) {
            console.error("AI analysis failed:", error);
            setAiResult("Sorry, something went wrong while analyzing the feedback.");
        } finally {
            setIsLoading(false);
        }
    }

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        if (!open) {
            // Reset state when closing
            form.reset();
            setAiResult(null);
            setIsLoading(false);
        }
    };

    return (
        <Card className="flex h-full flex-col overflow-hidden bg-card/50 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
            {project.image && (
                <div className="aspect-video overflow-hidden">
                    <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.image.imageHint}
                    />
                </div>
            )}
            <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription className="font-inter">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                </div>
            </CardContent>
            <CardFooter>
                <Dialog open={isOpen} onOpenChange={handleOpenChange}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">Leave Feedback</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle className="font-headline">Feedback for {project.title}</DialogTitle>
                            <DialogDescription className="font-inter">Let us know what you think! Our AI will analyze your feedback for improvement suggestions.</DialogDescription>
                        </DialogHeader>
                        {aiResult ? (
                            <div className="space-y-4 pt-4">
                                <h3 className="font-headline text-lg text-primary">AI Analysis Complete!</h3>
                                <p className="font-inter text-sm font-semibold">Improvement Suggestions:</p>
                                <div className="max-h-60 overflow-y-auto rounded-md border bg-muted p-4 font-inter text-sm text-muted-foreground">{aiResult}</div>
                                <DialogFooter>
                                     <Button onClick={() => { setAiResult(null); form.reset(); }}>Submit New Feedback</Button>
                                </DialogFooter>
                            </div>
                        ) : (
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="feedback"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Feedback</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="e.g., The UI is great, but it could be faster..." {...field} className="font-inter" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <DialogFooter>
                                        <Button type="submit" disabled={isLoading}>
                                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                            Analyze Feedback
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        )}
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    );
}
