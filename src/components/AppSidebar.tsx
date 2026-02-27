
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Files, 
  CloudSun, 
  Map as MapIcon, 
  BarChart3, 
  Video, 
  Users, 
  HelpCircle,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Documents', icon: Files, href: '/documents' },
  { name: 'Maps', icon: MapIcon, href: '/maps' },
  { name: 'Metrics', icon: BarChart3, href: '/metrics' },
  { name: 'Videos', icon: Video, href: '/videos' },
  { name: 'Weather', icon: CloudSun, href: '/weather' },
  { name: 'Users', icon: Users, href: '/users' },
  { name: 'Media Manager', icon: ImageIcon, href: '/media' },
  { name: 'Help', icon: HelpCircle, href: '/help' },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { setOpen } = useSidebar();

  return (
    <Sidebar 
      collapsible="icon"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="transition-all duration-300 ease-in-out border-r border-sidebar-border"
    >
      <SidebarHeader className="border-b p-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
            <Layers className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-primary group-data-[collapsible=icon]:hidden">
            Excellereapp
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.href}
                    tooltip={item.name}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 rounded-md transition-colors",
                      pathname === item.href 
                        ? "bg-primary/10 text-primary font-bold" 
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <Link href={item.href}>
                      <item.icon className={cn("w-5 h-5", pathname === item.href ? "text-primary" : "text-muted-foreground")} />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
