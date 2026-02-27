import React from 'react';
import { CloudSun, Wind, CloudRain, Thermometer, Sun, Umbrella, MapPin, Navigation2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WeatherPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <CloudSun className="w-6 h-6" /> Weather Operations Control
          </h1>
          <p className="text-muted-foreground">Real-time atmospheric monitoring for safe drone deployment.</p>
        </div>
        <Badge variant="outline" className="text-secondary border-secondary px-4 py-1.5 text-sm font-semibold">
          Flight Conditions: OPTIMAL
        </Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 relative overflow-hidden bg-primary text-white border-none shadow-2xl">
           <Image 
             src={PlaceHolderImages[4].imageUrl} 
             alt="Weather background" 
             fill 
             className="object-cover opacity-30"
             data-ai-hint="cloudy sky"
           />
           <CardContent className="relative p-12 flex flex-col items-center text-center space-y-8">
              <div className="space-y-2">
                <p className="text-xl font-medium text-primary-foreground/80 flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" /> Downtown District Hub
                </p>
                <h2 className="text-7xl font-bold tracking-tighter">24°C</h2>
                <p className="text-2xl font-semibold text-secondary">Partly Cloudy</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl pt-8 border-t border-white/10">
                <div className="space-y-1">
                  <Wind className="w-6 h-6 mx-auto text-secondary mb-2" />
                  <span className="block text-xs text-primary-foreground/60 uppercase tracking-widest">Wind Speed</span>
                  <span className="text-xl font-bold">14 km/h</span>
                </div>
                <div className="space-y-1">
                  <Umbrella className="w-6 h-6 mx-auto text-secondary mb-2" />
                  <span className="block text-xs text-primary-foreground/60 uppercase tracking-widest">Precipitation</span>
                  <span className="text-xl font-bold">2%</span>
                </div>
                <div className="space-y-1">
                  <Navigation2 className="w-6 h-6 mx-auto text-secondary mb-2" />
                  <span className="block text-xs text-primary-foreground/60 uppercase tracking-widest">Visibility</span>
                  <span className="text-xl font-bold">12 km</span>
                </div>
                <div className="space-y-1">
                  <Thermometer className="w-6 h-6 mx-auto text-secondary mb-2" />
                  <span className="block text-xs text-primary-foreground/60 uppercase tracking-widest">Humidity</span>
                  <span className="text-xl font-bold">45%</span>
                </div>
              </div>
           </CardContent>
        </Card>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-primary">Flight Feasibility</h3>
          <Card>
            <CardContent className="p-6 space-y-6">
               <div className="space-y-3">
                 <div className="flex justify-between items-center text-sm">
                   <span className="font-semibold text-primary">Takeoff Clearance</span>
                   <span className="text-secondary font-bold">95%</span>
                 </div>
                 <Progress value={95} className="h-2" />
                 <p className="text-xs text-muted-foreground italic">Low wind gusts and high visibility detected.</p>
               </div>

               <div className="space-y-3 pt-4 border-t border-border">
                 <div className="flex justify-between items-center text-sm">
                   <span className="font-semibold text-primary">Signal Strength</span>
                   <span className="text-secondary font-bold">88%</span>
                 </div>
                 <Progress value={88} className="h-2" />
                 <p className="text-xs text-muted-foreground italic">Minimal electromagnetic interference in sector 4.</p>
               </div>

               <Button className="w-full bg-primary text-white font-bold h-12 shadow-lg">
                 Log Flight Operations
               </Button>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
             <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-primary">Upcoming Advisory</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex gap-3">
                 <div className="w-1 bg-secondary rounded-full shrink-0"></div>
                 <p className="text-xs text-muted-foreground leading-relaxed">
                   High winds (25km/h+) expected between 14:00 and 16:00 today. Drone missions are restricted during this window.
                 </p>
               </div>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}