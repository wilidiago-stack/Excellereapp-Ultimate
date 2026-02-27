'use server';
/**
 * @fileOverview This file implements a Genkit flow for providing contextual voice-activated help.
 *
 * - contextualVoiceHelp - A function that provides help based on a user's voice query and application context.
 * - ContextualVoiceHelpInput - The input type for the contextualVoiceHelp function.
 * - ContextualVoiceHelpOutput - The return type for the contextualVoiceHelp function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ContextualVoiceHelpInputSchema = z.object({
  query: z.string().describe('The user\'s voice command or question.'),
  context: z.object({
    moduleName: z.string().optional().describe('The name of the current module or section.'),
    formFieldName: z.string().optional().describe('The name of the specific form field the user is asking about.'),
    additionalInfo: z.string().optional().describe('Any other relevant textual context from the application.'),
  }).describe('Contextual information about the user\'s current location in the application.'),
});
export type ContextualVoiceHelpInput = z.infer<typeof ContextualVoiceHelpInputSchema>;

const ContextualVoiceHelpOutputSchema = z.object({
  answer: z.string().describe('The AI\'s helpful and concise response.'),
});
export type ContextualVoiceHelpOutput = z.infer<typeof ContextualVoiceHelpOutputSchema>;

export async function contextualVoiceHelp(input: ContextualVoiceHelpInput): Promise<ContextualVoiceHelpOutput> {
  return contextualVoiceHelpFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contextualVoiceHelpPrompt',
  input: { schema: ContextualVoiceHelpInputSchema },
  output: { schema: ContextualVoiceHelpOutputSchema },
  prompt: `You are an AI assistant specialized in providing contextual help for the NexusSight application.
Your goal is to answer user questions about specific modules, forms, or fields within the application.
Always provide clear, concise, and helpful instructions or explanations. Ensure your answer directly addresses the user's question based on the provided context.
If the context is insufficient to provide a highly specific answer, provide a more general but still helpful response.

Current context:
{{#if context.moduleName}}Module: {{context.moduleName}}{{/if}}
{{#if context.formFieldName}}Form Field: {{context.formFieldName}}{{/if}}
{{#if context.additionalInfo}}Additional Information: {{context.additionalInfo}}{{/if}}

User's question: "{{{query}}}"

Based on the context and the user's question, provide a helpful answer.`,
});

const contextualVoiceHelpFlow = ai.defineFlow(
  {
    name: 'contextualVoiceHelpFlow',
    inputSchema: ContextualVoiceHelpInputSchema,
    outputSchema: ContextualVoiceHelpOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
