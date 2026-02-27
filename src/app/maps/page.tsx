import React from 'react';
import { Map as MapIcon, Layers, Maximize2, Navigation2, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MapsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <MapIcon className="w-6 h-6" /> Geospatial Mapping Hub
          </h1>
          <p className="text-muted-foreground">Visualize project locations and interactive drone flight telemetry.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search coordinates..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-none shadow-xl overflow-hidden min-h-[600px] relative group">
            <Image 
              src={PlaceHolderImages[3].imageUrl} 
              alt="Geospatial Map" 
              fill 
              className="object-cover"
              data-ai-hint="topographical map"
            />
            {/* Mock UI Overlays */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Badge className="bg-white/90 text-primary hover:bg-white shadow-lg border-none">
                <Navigation2 className="w-3 h-3 mr-1 fill-primary" />
                Live Drone Status: Active
              </Badge>
              <Badge className="bg-white/90 text-primary hover:bg-white shadow-lg border-none">
                3 Layers Active
              </Badge>
            </div>

            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              <Button size="icon" className="bg-white/90 text-primary hover:bg-white shadow-lg rounded-xl">
                <Maximize2 className="w-5 h-5" />
              </Button>
              <Button size="icon" className="bg-white/90 text-primary hover:bg-white shadow-lg rounded-xl">
                <Layers className="w-5 h-5" />
              </Button>
            </div>

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl max-w-xs border border-white/50">
               <h4 className="font-bold text-primary mb-1">Flight Path: DT-104</h4>
               <p className="text-xs text-muted-foreground mb-3">Surveying area 4B - Downtown District Expansion</p>
               <div className="grid grid-cols-2 gap-4 text-xs">
                 <div>
                   <span className="block text-muted-foreground">Altitude</span>
                   <span className="font-bold text-primary">124m AGL</span>
                 </div>
                 <div>
                   <span className="block text-muted-foreground">Speed</span>
                   <span className="font-bold text-primary">12.4 m/s</span>
                 </div>
               </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-primary">Saved Viewpoints</h3>
          <div className="space-y-4">
            {[
              { name: 'Northern Perimeter', desc: 'Critical Infrastructure Check', date: 'Oct 12' },
              { name: 'Phase 3 Survey', desc: 'Topographical Baseline', date: 'Oct 10' },
              { name: 'Coastal Elevation', desc: 'Erosion Analysis', date: 'Oct 05' },
            ].map((vp) => (
              <Card key={vp.name} className="hover:border-primary/50 transition-colors cursor-pointer group">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-primary text-sm group-hover:text-secondary transition-colors">{vp.name}</h4>
                    <span className="text-[10px] text-muted-foreground font-semibold">{vp.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">{vp.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-white border-none shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-sm">Mapping Tool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-primary-foreground/70">
                You can generate 3D mesh models from the current view.
              </p>
              <Button className="w-full bg-secondary hover:bg-secondary/90 border-none font-bold">
                Generate 3D Mesh
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}