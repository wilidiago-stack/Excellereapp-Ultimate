import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { AppSidebar } from '@/components/AppSidebar';
import { VoiceInterface } from '@/components/VoiceInterface';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'NexusSight | Corporate Drone Visualization',
  description: 'Multi-project management and geospatial drone visualization hub powered by AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Navigation />
            <main className="pt-16 min-h-screen">
              <div className="max-w-7xl mx-auto px-4 py-8">
                {children}
              </div>
            </main>
          </SidebarInset>
        </SidebarProvider>
        <VoiceInterface />
        <Toaster />
      </body>
    </html>
  );
}