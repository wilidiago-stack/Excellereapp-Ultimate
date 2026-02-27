"use client";

import React from 'react';
import { 
  ChevronDown,
  Layers,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const projects = [
  { id: '1', name: 'Nexus Urban Dev' },
  { id: '2', name: 'Coastal Bridge Phase II' },
  { id: '3', name: 'Solar Park Mapping' },
];

export function Navigation() {
  const [activeProject, setActiveProject] = React.useState(projects[0]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border h-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-primary hidden sm:block">
              NexusSight
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex border-primary/20 hover:border-primary/50 text-primary">
                {activeProject.name}
                <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Switch Project</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {projects.map((p) => (
                <DropdownMenuItem 
                  key={p.id} 
                  onClick={() => setActiveProject(p)}
                  className={cn(activeProject.id === p.id && "bg-muted font-medium")}
                >
                  {p.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-primary font-medium">
                Create New Project
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
