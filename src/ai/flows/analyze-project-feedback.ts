'use server';

/**
 * @fileOverview A flow to analyze user feedback on a project and highlight potential areas for improvement.
 *
 * - analyzeProjectFeedback - A function that takes project details and user feedback as input, analyzes it using an AI model, and returns suggestions for improvement.
 * - AnalyzeProjectFeedbackInput - The input type for the analyzeProjectFeedback function.
 * - AnalyzeProjectFeedbackOutput - The return type for the analyzeProjectFeedback function, containing improvement suggestions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeProjectFeedbackInputSchema = z.object({
  projectDetails: z.string().describe('Detailed description of the project, including its purpose, features, and technologies used.'),
  userFeedback: z.string().describe('User feedback on the project, including specific comments and suggestions.'),
});

export type AnalyzeProjectFeedbackInput = z.infer<typeof AnalyzeProjectFeedbackInputSchema>;

const AnalyzeProjectFeedbackOutputSchema = z.object({
  improvementSuggestions: z.string().describe('AI-generated suggestions for improving the project based on user feedback.'),
});

export type AnalyzeProjectFeedbackOutput = z.infer<typeof AnalyzeProjectFeedbackOutputSchema>;

export async function analyzeProjectFeedback(input: AnalyzeProjectFeedbackInput): Promise<AnalyzeProjectFeedbackOutput> {
  return analyzeProjectFeedbackFlow(input);
}

const analyzeProjectFeedbackPrompt = ai.definePrompt({
  name: 'analyzeProjectFeedbackPrompt',
  input: {schema: AnalyzeProjectFeedbackInputSchema},
  output: {schema: AnalyzeProjectFeedbackOutputSchema},
  prompt: `You are an AI tool that analyzes user feedback on software projects and suggests areas for improvement.

  Based on the following project details and user feedback, provide specific and actionable suggestions for improvement.

  Project Details: {{{projectDetails}}}
  User Feedback: {{{userFeedback}}}

  Improvement Suggestions:
  `,
});

const analyzeProjectFeedbackFlow = ai.defineFlow(
  {
    name: 'analyzeProjectFeedbackFlow',
    inputSchema: AnalyzeProjectFeedbackInputSchema,
    outputSchema: AnalyzeProjectFeedbackOutputSchema,
  },
  async input => {
    const {output} = await analyzeProjectFeedbackPrompt(input);
    return output!;
  }
);
