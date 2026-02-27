
import React from 'react';
import { 
  Files, 
  Search, 
  Filter, 
  Upload, 
  FileText, 
  FileImage, 
  FileVideo, 
  MoreHorizontal, 
  Download, 
  Share2, 
  Trash2, 
  Info
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const documents = [
  { id: 1, name: 'Structural_Analysis_Phase_I.pdf', type: 'PDF', size: '4.2 MB', owner: 'Alex Rivera', date: '2023-10-15', project: 'Nexus Urban' },
  { id: 2, name: 'Topographical_Data_Point_Cloud.las', type: 'LAS', size: '156 MB', owner: 'Sarah Chen', date: '2023-10-14', project: 'Coastal Bridge' },
  { id: 3, name: 'Site_Safety_Protocol_v2.docx', type: 'DOCX', size: '1.1 MB', owner: 'Marcus Todd', date: '2023-10-12', project: 'Solar Park' },
  { id: 4, name: 'Flight_Telemetry_Log_24_Oct.csv', type: 'CSV', size: '890 KB', owner: 'Alex Rivera', date: '2023-10-24', project: 'Nexus Urban' },
  { id: 5, name: 'Thermal_Inspection_Preview.jpg', type: 'IMAGE', size: '12.5 MB', owner: 'Sarah Chen', date: '2023-10-20', project: 'Solar Park' },
  { id: 6, name: 'Environmental_Impact_Study.pdf', type: 'PDF', size: '8.4 MB', owner: 'Marcus Todd', date: '2023-10-05', project: 'Coastal Bridge' },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Files className="w-6 h-6" /> Document Repository
          </h1>
          <p className="text-muted-foreground">Securely manage and organize project-specific documentation.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button className="bg-primary text-white shadow-lg shadow-primary/20">
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </Button>
        </div>
      </div>

      <Alert className="bg-secondary/5 border-secondary/20">
        <Info className="h-4 w-4 text-secondary" />
        <AlertTitle className="text-secondary font-bold">Instructional Guide</AlertTitle>
        <AlertDescription className="text-muted-foreground text-sm">
          Use the repository to store blueprints, flight logs, and environmental reports. Documents are encrypted and accessible based on project assignments. Drag and drop files to upload instantly.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1 border-none shadow-sm bg-muted/30">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-primary">Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground">Search Filename</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-9 bg-white" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground">File Category</label>
              <div className="flex flex-wrap gap-2">
                {['Reports', 'Blueprints', 'Flight Logs', 'Media', 'Contracts'].map(cat => (
                  <Badge key={cat} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground">Project Scope</label>
              <div className="grid gap-2">
                {['Nexus Urban', 'Coastal Bridge', 'Solar Park'].map(proj => (
                  <div key={proj} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" className="rounded border-border text-secondary focus:ring-secondary" />
                    {proj}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 border-none shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[400px]">Document Name</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id} className="group transition-colors hover:bg-muted/30">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-muted rounded group-hover:bg-white transition-colors">
                          {doc.type === 'PDF' ? <FileText className="w-5 h-5 text-red-500" /> : 
                           doc.type === 'IMAGE' ? <FileImage className="w-5 h-5 text-blue-500" /> :
                           doc.type === 'LAS' ? <Files className="w-5 h-5 text-purple-500" /> :
                           <FileVideo className="w-5 h-5 text-secondary" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">{doc.name}</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Owner: {doc.owner}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[10px] border-primary/20 text-primary">{doc.project}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{doc.date}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{doc.size}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem className="cursor-pointer">
                            <Download className="w-4 h-4 mr-2" /> Download
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Share2 className="w-4 h-4 mr-2" /> Share Link
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
