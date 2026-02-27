
import React from 'react';
import { 
  Activity, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  ChevronRight,
  ArrowUpRight,
  Files,
  Target,
  Zap,
  LifeBuoy
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Active Projects', value: '12', icon: Activity, trend: '+2 this month', color: 'text-primary' },
  { label: 'Drone Flights', value: '148', icon: TrendingUp, trend: '85% success rate', color: 'text-secondary' },
  { label: 'Processing Hours', value: '1,204', icon: Clock, trend: 'Avg 4h/flight', color: 'text-muted-foreground' },
  { label: 'Completed Goals', value: '42', icon: CheckCircle2, trend: 'On schedule', color: 'text-green-600' },
];

const recentProjects = [
  {
    name: 'Nexus Urban Dev',
    location: 'Downtown District',
    status: 'In Progress',
    progress: 65,
    lastUpdate: '2 hours ago',
    image: PlaceHolderImages[0].imageUrl,
  },
  {
    name: 'Coastal Bridge Phase II',
    location: 'Eastern Shore',
    status: 'Mapping',
    progress: 32,
    lastUpdate: '5 hours ago',
    image: PlaceHolderImages[1].imageUrl,
  },
  {
    name: 'Solar Park Mapping',
    location: 'Western Desert',
    status: 'Finalizing',
    progress: 98,
    lastUpdate: '1 day ago',
    image: PlaceHolderImages[2].imageUrl,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">NexusSight Operations</h1>
          <p className="text-muted-foreground mt-1 text-lg">Centralized multi-project intelligence and drone visualization.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-primary/20 text-primary bg-white/50 backdrop-blur-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Operational Review
          </Button>
          <Button className="bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
            Generate Executive Report
          </Button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-none shadow-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={cn("p-2 rounded-xl bg-muted/50", stat.color)}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/50" />
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-primary">{stat.value}</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                <div className="flex items-center gap-1 mt-3">
                  <Badge variant="secondary" className="text-[10px] bg-secondary/10 text-secondary border-none">
                    {stat.trend}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Hero Visualization Section */}
      <Card className="overflow-hidden border-none shadow-2xl bg-primary text-white relative">
        <div className="grid md:grid-cols-2 relative z-10">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-2">
               <Badge className="w-fit px-3 py-1 bg-white/20 text-white border-none backdrop-blur-md">
                 Active Mission
               </Badge>
               <span className="flex items-center gap-1 text-xs font-bold text-secondary-foreground animate-pulse">
                 <Zap className="w-3 h-3 fill-current" /> LIVE TELEMETRY
               </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight">Nexus Urban Dev: Downtown Sector</h2>
            <p className="text-primary-foreground/80 text-lg max-w-md leading-relaxed">
              Real-time synchronization of drone flight data with architectural BIM models. 
              View the latest volumetric analysis and elevation charts for Phase 4 construction.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none font-bold px-8 rounded-xl shadow-lg shadow-secondary/20">
                Enter Mission Control
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 px-8 rounded-xl">
                BIM Documentation
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto min-h-[400px]">
             <Image 
               src={PlaceHolderImages[0].imageUrl} 
               alt="Drone visualization" 
               fill 
               className="object-cover opacity-60"
               data-ai-hint="construction site"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>
          </div>
        </div>
      </Card>

      {/* Projects and Updates */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              Recent Projects
              <span className="text-xs font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">3 Active</span>
            </h3>
            <Button variant="link" className="text-secondary font-bold">Explore All Portfolios</Button>
          </div>
          
          <div className="grid gap-6">
            {recentProjects.map((project) => (
              <Card key={project.name} className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-56 h-40 sm:h-auto overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      data-ai-hint="industrial site"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{project.name}</h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1 font-medium">
                          <MapPin className="w-3 h-3 text-secondary" /> {project.location}
                        </p>
                      </div>
                      <Badge className={cn(
                        "font-bold text-[10px] uppercase px-2 py-0.5",
                        project.status === 'Mapping' ? "bg-secondary text-white" : "bg-primary text-white"
                      )}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <span>Milestone Progress</span>
                        <span className="text-primary">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-1.5" />
                    </div>
                    
                    <div className="flex justify-between items-center text-[10px] font-semibold text-muted-foreground pt-2 border-t border-border/50">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Updated {project.lastUpdate}</span>
                      <Button size="sm" variant="ghost" className="h-8 px-2 group-hover:translate-x-1 transition-transform font-bold text-primary">
                        View Details <ChevronRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary">Key Assets</h3>
            <Target className="w-5 h-5 text-muted-foreground/30" />
          </div>
          <Card className="border-none shadow-sm overflow-hidden">
             <CardContent className="p-0">
               <div className="divide-y divide-border">
                  {[
                    { name: 'Flight_Plan_North.pdf', size: '2.4 MB', type: 'PDF' },
                    { name: 'Site_Analysis_June.xlsx', size: '12.1 MB', type: 'DATA' },
                    { name: 'Compliance_Cert.pdf', size: '845 KB', type: 'CERT' },
                    { name: 'Project_Charter_v3.pdf', size: '1.2 MB', type: 'PDF' },
                  ].map((doc) => (
                    <div key={doc.name} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                          <Files className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary truncate max-w-[140px]">{doc.name}</p>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">{doc.type} • {doc.size}</p>
                        </div>
                      </div>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
               </div>
               <Button variant="ghost" className="w-full h-12 text-secondary font-bold hover:text-secondary hover:bg-secondary/5 rounded-none border-t border-border">
                 Browse Document Hub
               </Button>
             </CardContent>
          </Card>
          
          <Card className="bg-secondary/10 border-none shadow-lg shadow-secondary/5">
             <CardHeader className="pb-2">
               <CardTitle className="text-xs font-black text-secondary uppercase tracking-widest flex items-center gap-2">
                 <LifeBuoy className="w-4 h-4" /> Operational Guidance
               </CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                 Our AI assistant can help navigate complex modules. Try saying <strong>"Go to Maps"</strong> or <strong>"Show me environmental reports."</strong>
               </p>
               <Button size="sm" variant="outline" className="w-full border-secondary/30 text-secondary hover:bg-secondary/10 font-bold">
                 View Documentation
               </Button>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
