'use server';
/**
 * @fileOverview This file defines a Genkit flow for interpreting user voice commands
 * to query for specific project data or summaries within the NexusSight application.
 *
 * - voiceDataQuery - A function that handles the interpretation of voice commands.
 * - VoiceDataQueryInput - The input type for the voiceDataQuery function.
 * - VoiceDataQueryOutput - The return type for the voiceDataQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const VoiceDataQueryInputSchema = z.object({
  query: z.string().describe('The verbal command or query from the user.'),
});
export type VoiceDataQueryInput = z.infer<typeof VoiceDataQueryInputSchema>;

// Output Schema
const VoiceDataQueryOutputSchema = z.object({
  queryType: z.enum([
    'droneVideos',
    'projectSummary',
    'metricsAndGraphs',
    'documents',
    'generalQuery', // Default if intent is unclear
  ]).describe('The type of data or action requested by the user.'),
  projectName: z.string().optional().describe('The name of the project mentioned in the query.'),
  timeframe: z.string().optional().describe('A specified timeframe for the query (e.g., "last week", "this month").'),
  originalQuery: z.string().describe('The original user query for reference.'),
  responseMessage: z.string().describe('A friendly, confirming message back to the user, acknowledging their request and summarizing the extracted information.'),
});
export type VoiceDataQueryOutput = z.infer<typeof VoiceDataQueryOutputSchema>;

export async function voiceDataQuery(input: VoiceDataQueryInput): Promise<VoiceDataQueryOutput> {
  return voiceDataQueryFlow(input);
}

const voiceDataQueryPrompt = ai.definePrompt({
  name: 'voiceDataQueryPrompt',
  input: { schema: VoiceDataQueryInputSchema },
  output: { schema: VoiceDataQueryOutputSchema },
  prompt: `You are an AI assistant for the NexusSight application, designed to interpret user voice commands to query for specific project data or summaries.
Your task is to analyze the user's verbal command and extract the following information:
1.  **queryType**: Identify the primary intent from the following categories:
    *   'droneVideos': If the user is asking for drone videos.
    *   'projectSummary': If the user is asking for a summary of a project.
    *   'metricsAndGraphs': If the user is asking for metrics or graphs.
    *   'documents': If the user is asking for documents.
    *   'generalQuery': If the intent is unclear or does not fit other categories.
2.  **projectName**: Extract the name of the project if mentioned (e.g., "Project Alpha", "Acme Inc. Building"). If no project is mentioned, leave this field empty.
3.  **timeframe**: Extract any specified timeframe for the query (e.g., "last week", "this month", "Q3 2023"). If no timeframe is mentioned, leave this field empty.
4.  **originalQuery**: The exact verbal command provided by the user.
5.  **responseMessage**: A friendly and concise confirming message to the user, summarizing their request based on the extracted information.

Example Query 1: "Show me the drone videos for Project Alpha from last month."
Expected Output:
{
  "queryType": "droneVideos",
  "projectName": "Project Alpha",
  "timeframe": "last month",
  "originalQuery": "Show me the drone videos for Project Alpha from last month.",
  "responseMessage": "Understood! I will retrieve drone videos for Project Alpha from last month."
}

Example Query 2: "What's the summary for Project Beta?"
Expected Output:
{
  "queryType": "projectSummary",
  "projectName": "Project Beta",
  "timeframe": null,
  "originalQuery": "What's the summary for Project Beta?",
  "responseMessage": "Got it! I'll get you the summary for Project Beta."
}

Example Query 3: "Give me the latest metrics."
Expected Output:
{
  "queryType": "metricsAndGraphs",
  "projectName": null,
  "timeframe": "latest",
  "originalQuery": "Give me the latest metrics.",
  "responseMessage": "Alright! I'll show you the latest metrics."
}

Example Query 4: "Find documents about the new acquisition."
Expected Output:
{
  "queryType": "documents",
  "projectName": null,
  "timeframe": null,
  "originalQuery": "Find documents about the new acquisition.",
  "responseMessage": "Okay, I'll look for documents about the new acquisition."
}

Example Query 5: "What's up?"
Expected Output:
{
  "queryType": "generalQuery",
  "projectName": null,
  "timeframe": null,
  "originalQuery": "What's up?",
  "responseMessage": "How can I help you today?"
}


User's verbal command: "{{{query}}}"
`
});

const voiceDataQueryFlow = ai.defineFlow(
  {
    name: 'voiceDataQueryFlow',
    inputSchema: VoiceDataQueryInputSchema,
    outputSchema: VoiceDataQueryOutputSchema,
  },
  async (input) => {
    const { output } = await voiceDataQueryPrompt(input);
    return output!;
  }
);