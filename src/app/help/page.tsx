
import React from 'react';
import { 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Search, 
  Video, 
  FileText, 
  Map as MapIcon, 
  BarChart, 
  UserCog,
  ChevronRight,
  ExternalLink,
  LifeBuoy
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const guides = [
  { id: '1', title: 'Dashboard Overview', icon: BookOpen, desc: 'Learn to navigate your project portfolio and interpret real-time stats.' },
  { id: '2', title: 'Map Visualization', icon: MapIcon, desc: 'Understanding geospatial layers, flight paths, and coordinate systems.' },
  { id: '3', title: 'Managing Metrics', icon: BarChart, desc: 'How to generate reports and customize your operational graphs.' },
  { id: '4', title: 'Uploading Data', icon: Video, desc: 'Safe protocols for uploading 4K drone footage and LAS point clouds.' },
  { id: '5', title: 'User Permissions', icon: UserCog, desc: 'Guide to RBAC (Role-Based Access Control) and project assignment.' },
  { id: '6', title: 'Voice Commands', icon: MessageCircle, desc: 'Harness the power of Gemini AI for hands-free navigation.' },
];

export default function HelpPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="relative overflow-hidden rounded-2xl bg-primary p-12 text-white">
        <div className="relative z-10 max-w-2xl">
          <Badge className="bg-white/20 text-white border-none mb-4">Support Center</Badge>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">How can we assist you today?</h1>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Access comprehensive guides, technical documentation, and tactical instructions for the NexusSight platform.
          </p>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search help articles..." 
              className="pl-10 h-12 bg-white text-primary border-none shadow-lg text-lg" 
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
           <LifeBuoy className="w-64 h-64" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Card key={guide.id} className="group hover:border-primary/50 transition-all cursor-pointer">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <guide.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2 flex items-center justify-between">
                {guide.title}
                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {guide.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            Frequently Asked Questions
          </h2>
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-border">
                  <AccordionTrigger className="text-primary font-bold hover:no-underline">How do I add a new project?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Navigate to the Dashboard and use the project switcher in the top navigation bar. Click "Create New Project" to initialize a workspace. You will need Administrator privileges to perform this action.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-border">
                  <AccordionTrigger className="text-primary font-bold hover:no-underline">What drone file formats are supported?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We support MP4, MOV for video; JPG, PNG, TIFF for images; and LAS, LAZ, OBJ, FBX for 3D geospatial data. All uploads are automatically processed for cloud visualization.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-border">
                  <AccordionTrigger className="text-primary font-bold hover:no-underline">How does the AI Voice command system work?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Powered by Google Gemini, the system interprets natural language. Click the microphone icon and say commands like "Go to metrics" or "How do I upload a video?" The assistant will navigate or provide contextual help based on your current module.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-border">
                  <AccordionTrigger className="text-primary font-bold hover:no-underline">Is my data secure?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    NexusSight uses AES-256 encryption for data at rest and TLS 1.3 for data in transit. Access is strictly controlled via RBAC (Role-Based Access Control) and optionally enforced via Multi-Factor Authentication.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Need Live Help?</h2>
          <Card className="bg-secondary/5 border-secondary/20">
             <CardContent className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our technical support engineers are available 24/7 for Enterprise Tier accounts.
                </p>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12">
                   Contact Support Hub
                </Button>
                <div className="pt-4 border-t border-secondary/10 space-y-3">
                   <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
                      <span>Status: All Systems Operational</span>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   </div>
                   <div className="flex items-center gap-2 text-xs text-primary font-bold cursor-pointer hover:underline">
                      <ExternalLink className="w-3 h-3" /> Technical Whitepapers
                   </div>
                   <div className="flex items-center gap-2 text-xs text-primary font-bold cursor-pointer hover:underline">
                      <ExternalLink className="w-3 h-3" /> API Documentation
                   </div>
                </div>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
