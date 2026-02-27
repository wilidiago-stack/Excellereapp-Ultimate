'use server';
/**
 * @fileOverview A Genkit flow for processing voice commands to navigate application modules.
 *
 * - voiceNavigation - A function that handles voice command recognition for navigation.
 * - VoiceNavigationInput - The input type for the voiceNavigation function.
 * - VoiceNavigationOutput - The return type for the voiceNavigation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VoiceNavigationInputSchema = z.object({
  command: z
    .string()
    .describe(
      'The voice command received from the user, e.g., "Go to Documents", "Show me Maps".'
    ),
});
export type VoiceNavigationInput = z.infer<typeof VoiceNavigationInputSchema>;

const ModuleTypeSchema = z.union([
  z.literal('Documents'),
  z.literal('Maps'),
  z.literal('Metrics'),
  z.literal('Videos'),
  z.literal('Users'),
  z.literal('Dashboard'),
  z.literal('Help'),
  z.literal('Unrecognized'),
]);

const VoiceNavigationOutputSchema = z.object({
  module: ModuleTypeSchema.describe(
    'The identified application module to navigate to, or "Unrecognized" if no module matches.'
  ),
  message: z
    .string()
    .optional()
    .describe('An optional message, e.g., for clarification or error handling.'),
});
export type VoiceNavigationOutput = z.infer<typeof VoiceNavigationOutputSchema>;

export async function voiceNavigation(
  input: VoiceNavigationInput
): Promise<VoiceNavigationOutput> {
  return voiceNavigationFlow(input);
}

const voiceNavigationPrompt = ai.definePrompt({
  name: 'voiceNavigationPrompt',
  input: {schema: VoiceNavigationInputSchema},
  output: {schema: VoiceNavigationOutputSchema},
  prompt: `You are an AI assistant tasked with interpreting user voice commands to navigate an application.

The application has the following modules:
- Documents: For managing project-related documents.
- Maps: For geospatial map integration and displaying locations.
- Metrics: For displaying project metrics and graphs.
- Videos: For viewing drone visualization videos.
- Users: For managing user accounts and permissions.
- Dashboard: For a centralized overview of all projects.
- Help: For contextual in-app guidance and instructions.

Your task is to identify the most appropriate module based on the user's command. If the command does not clearly refer to any of the listed modules, return "Unrecognized".

User Command: {{{command}}}
`,
});

const voiceNavigationFlow = ai.defineFlow(
  {
    name: 'voiceNavigationFlow',
    inputSchema: VoiceNavigationInputSchema,
    outputSchema: VoiceNavigationOutputSchema,
  },
  async (input) => {
    const {output} = await voiceNavigationPrompt(input);
    return output!;
  }
);
