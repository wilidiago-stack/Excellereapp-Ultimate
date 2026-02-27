"use client";

import React, { useState, useEffect } from 'react';
import { Mic, Loader2, MessageSquare, Volume2, Search, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { voiceNavigation } from '@/ai/flows/voice-navigation';
import { contextualVoiceHelp } from '@/ai/flows/contextual-voice-help';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function VoiceInterface() {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showBubble, setShowBubble] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleVoiceCommand = async () => {
    setIsListening(true);
    setShowBubble(true);
    setFeedback("Listening for command...");

    // Simulated voice recording/recognition delay
    setTimeout(async () => {
      setIsListening(false);
      setIsProcessing(true);
      setFeedback("Analyzing intent with Gemini...");

      try {
        // Here we simulate getting text from speech.
        // In a real app, you'd use the Web Speech API or similar.
        const mockCommands = [
          "Go to maps",
          "Show me project documents",
          "Open drone videos",
          "I need help with this form",
          "What are the project metrics?"
        ];
        const randomCommand = mockCommands[Math.floor(Math.random() * mockCommands.length)];
        
        setFeedback(`Processing: "${randomCommand}"`);

        // First attempt navigation
        const navResult = await voiceNavigation({ command: randomCommand });
        
        if (navResult.module !== 'Unrecognized') {
          setFeedback(`Navigating to ${navResult.module}...`);
          setTimeout(() => {
            router.push(`/${navResult.module.toLowerCase() === 'dashboard' ? '' : navResult.module.toLowerCase()}`);
            setShowBubble(false);
            setIsProcessing(false);
          }, 1000);
        } else {
          // If not navigation, check for contextual help
          const helpResult = await contextualVoiceHelp({
            query: randomCommand,
            context: {
              moduleName: pathname,
              additionalInfo: "User is exploring the corporate visual interface."
            }
          });
          setFeedback(helpResult.answer);
          setIsProcessing(false);
          setTimeout(() => {
            if (!isListening && !isProcessing) setShowBubble(false);
          }, 5000);
        }
      } catch (error) {
        setFeedback("Sorry, I couldn't process that command.");
        setIsProcessing(false);
      }
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {showBubble && (
        <Card className="w-72 shadow-2xl border-primary/20 animate-in slide-in-from-bottom-2 duration-300">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                {isProcessing ? (
                  <Loader2 className="w-5 h-5 text-secondary animate-spin" />
                ) : (
                  <MessageSquare className="w-5 h-5 text-primary" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-primary mb-1">
                  {isListening ? "Voice Active" : isProcessing ? "Thinking..." : "Nexus Assistant"}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feedback || "How can I help you today?"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Button
        size="icon"
        className={cn(
          "w-14 h-14 rounded-full shadow-2xl transition-all duration-300",
          isListening ? "bg-secondary scale-110 animate-pulse" : "bg-primary hover:bg-primary/90"
        )}
        onClick={handleVoiceCommand}
        disabled={isProcessing}
      >
        <Mic className={cn("w-6 h-6 text-white", isListening && "animate-bounce")} />
      </Button>
    </div>
  );
}