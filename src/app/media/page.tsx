
"use client";

import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Upload, 
  RefreshCcw, 
  Trash2, 
  Eye, 
  Settings2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MediaManagerPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <ImageIcon className="w-6 h-6" /> Media & Brand Manager
          </h1>
          <p className="text-muted-foreground">Customize application banners, project visuals, and operational backgrounds.</p>
        </div>
        <Button className="bg-primary text-white shadow-lg shadow-primary/20">
          <Upload className="w-4 h-4 mr-2" />
          Global Upload
        </Button>
      </div>

      <Alert className="bg-primary/5 border-primary/20">
        <AlertCircle className="h-4 w-4 text-primary" />
        <AlertTitle className="text-primary font-bold">Protip: Optimization</AlertTitle>
        <AlertDescription className="text-muted-foreground text-sm">
          For best performance, ensure banners are at least 1920x1080px and under 2MB. The system automatically generates optimized thumbnails for different viewports.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="banners" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="banners">Banners & Heroes</TabsTrigger>
          <TabsTrigger value="projects">Project Thumbnails</TabsTrigger>
          <TabsTrigger value="backgrounds">UI Backgrounds</TabsTrigger>
        </TabsList>

        <TabsContent value="banners" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PlaceHolderImages.slice(0, 2).map((img, idx) => (
              <Card key={img.id} className="overflow-hidden border-none shadow-lg group">
                <div className="relative aspect-[21/9]">
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <Button variant="secondary" size="sm">
                      <Eye className="w-4 h-4 mr-2" /> Preview
                    </Button>
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                      <RefreshCcw className="w-4 h-4 mr-2" /> Replace
                    </Button>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-primary text-white border-none shadow-md">
                    {idx === 0 ? "Main Dashboard Hero" : "Video Hub Banner"}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary">{img.description}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase text-muted-foreground">ID: {img.id}</span>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-green-600 border-green-200">Active</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`url-${img.id}`} className="text-xs font-bold uppercase text-muted-foreground">Image URL Override</Label>
                      <div className="flex gap-2">
                        <Input id={`url-${img.id}`} defaultValue={img.imageUrl} className="text-sm bg-muted/30 border-none h-9" />
                        <Button size="sm" variant="outline" className="shrink-0">Apply</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PlaceHolderImages.map((img) => (
              <Card key={img.id} className="overflow-hidden border-border/50 hover:border-primary/30 transition-all cursor-pointer group">
                <div className="relative aspect-square">
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div className="absolute top-2 right-2">
                    <Button size="icon" variant="destructive" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="p-3 bg-white border-t border-border/50">
                  <p className="text-xs font-bold text-primary truncate">{img.description}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Uploaded: Oct 2023</p>
                </div>
              </Card>
            ))}
            <Card className="flex flex-col items-center justify-center aspect-square border-dashed border-2 border-muted hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer group">
               <Upload className="w-8 h-8 text-muted-foreground group-hover:text-primary mb-2" />
               <p className="text-xs font-bold text-muted-foreground group-hover:text-primary">Add New Resource</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="backgrounds">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>System Dynamic Backgrounds</CardTitle>
              <CardDescription>Manage images used in high-contrast or specialized weather modules.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {PlaceHolderImages.slice(3, 5).map((img) => (
                    <div key={img.id} className="space-y-3">
                      <div className="relative h-40 rounded-xl overflow-hidden border border-border">
                         <Image src={img.imageUrl} alt={img.description} fill className="object-cover" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-primary">{img.description}</span>
                        <Settings2 className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary" />
                      </div>
                    </div>
                 ))}
               </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-primary text-white border-none shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <CardContent className="p-10 flex flex-col justify-center space-y-4">
             <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
             </div>
             <h3 className="text-2xl font-bold">Brand Guidelines Applied</h3>
             <p className="text-primary-foreground/80 leading-relaxed">
               Every image uploaded is automatically checked for contrast accessibility. 
               This ensures that UI text elements remain readable over any banner you choose.
             </p>
             <div className="pt-4 flex gap-3">
                <Button className="bg-secondary text-white border-none font-bold">View Brand Book</Button>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">Configuration Tips</Button>
             </div>
          </CardContent>
          <div className="relative h-48 md:h-auto min-h-[300px]">
             <Image 
               src={PlaceHolderImages[0].imageUrl} 
               alt="Brand visualization" 
               fill 
               className="object-cover opacity-50"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>
          </div>
        </div>
      </Card>
    </div>
  );
}
