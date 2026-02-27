import React from 'react';
import { Video, Play, Calendar, Download, Share2, MoreVertical, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const droneVideos = [
  { id: 1, title: 'Downtown Survey - North Hub', date: '2023-10-24', duration: '12:45', image: PlaceHolderImages[1].imageUrl, project: 'Nexus Urban' },
  { id: 2, title: 'Coastline Elevation Scan', date: '2023-10-22', duration: '08:20', image: PlaceHolderImages[2].imageUrl, project: 'Coastal Bridge' },
  { id: 3, title: 'Solar Array Thermal Inspection', date: '2023-10-20', duration: '15:30', image: PlaceHolderImages[0].imageUrl, project: 'Solar Park' },
  { id: 4, title: 'Site Foundation Analysis', date: '2023-10-18', duration: '05:15', image: PlaceHolderImages[4].imageUrl, project: 'Nexus Urban' },
  { id: 5, title: 'Bridge Pillar Structural Flyby', date: '2023-10-15', duration: '22:00', image: PlaceHolderImages[1].imageUrl, project: 'Coastal Bridge' },
  { id: 6, title: 'Landscape Mapping Alpha', date: '2023-10-12', duration: '11:10', image: PlaceHolderImages[3].imageUrl, project: 'Wilderness Dev' },
];

export default function VideosPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Video className="w-6 h-6" /> Drone Visualization Hub
          </h1>
          <p className="text-muted-foreground">Secure access to project flight recordings and processed visualizations.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search videos..." className="pl-9" />
          </div>
          <Button className="bg-primary text-white">Upload Video</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {droneVideos.map((vid) => (
          <Card key={vid.id} className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all cursor-pointer bg-white">
            <div className="relative aspect-video">
              <Image 
                src={vid.image} 
                alt={vid.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="drone footage"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                   <Play className="w-6 h-6 text-white fill-white" />
                 </div>
              </div>
              <Badge className="absolute bottom-3 right-3 bg-black/60 text-white border-none backdrop-blur-sm">
                {vid.duration}
              </Badge>
              <Badge className="absolute top-3 left-3 bg-secondary text-white border-none shadow-lg">
                {vid.project}
              </Badge>
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">{vid.title}</h3>
                <MoreVertical className="w-4 h-4 text-muted-foreground shrink-0 ml-2" />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {vid.date}
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost" className="h-7 w-7 hover:text-primary">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-7 w-7 hover:text-primary">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}