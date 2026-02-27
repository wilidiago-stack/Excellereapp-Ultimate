"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  Files, 
  CloudSun, 
  Map as MapIcon, 
  BarChart3, 
  Video, 
  Users, 
  HelpCircle,
  ChevronDown,
  Layers
} from 'lucide-react';
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

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Documents', icon: Files, href: '/documents' },
  { name: 'Maps', icon: MapIcon, href: '/maps' },
  { name: 'Metrics', icon: BarChart3, href: '/metrics' },
  { name: 'Videos', icon: Video, href: '/videos' },
  { name: 'Weather', icon: CloudSun, href: '/weather' },
  { name: 'Users', icon: Users, href: '/users' },
  { name: 'Help', icon: HelpCircle, href: '/help' },
];

const projects = [
  { id: '1', name: 'Nexus Urban Dev' },
  { id: '2', name: 'Coastal Bridge Phase II' },
  { id: '3', name: 'Solar Park Mapping' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [activeProject, setActiveProject] = React.useState(projects[0]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-primary">NexusSight</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors px-3 py-2 h-9",
                    pathname === item.href && "text-primary font-semibold bg-muted"
                  )}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="hidden sm:flex border-primary/20 hover:border-primary/50 text-primary">
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

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors",
                  pathname === item.href && "bg-muted text-primary font-semibold"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-4">
               <p className="text-xs font-semibold text-muted-foreground uppercase px-3 mb-2">Projects</p>
               {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { setActiveProject(p); setIsOpen(false); }}
                  className={cn(
                    "w-full text-left p-3 rounded-lg text-sm text-muted-foreground",
                    activeProject.id === p.id && "bg-primary/5 text-primary font-medium"
                  )}
                >
                  {p.name}
                </button>
               ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}