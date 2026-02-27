
import React from 'react';
import { 
  Users, 
  UserPlus, 
  ShieldCheck, 
  Mail, 
  MoreVertical, 
  Search, 
  Filter,
  CheckCircle2,
  Lock,
  Edit2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const users = [
  { id: 1, name: 'Alex Rivera', role: 'Admin', email: 'alex.r@nexussight.corp', projects: 5, status: 'Active', lastActive: '2 min ago' },
  { id: 2, name: 'Sarah Chen', role: 'Pilot', email: 'sarah.c@nexussight.corp', projects: 3, status: 'On Mission', lastActive: 'Active Now' },
  { id: 3, name: 'Marcus Todd', role: 'Analyst', email: 'marcus.t@nexussight.corp', projects: 12, status: 'Active', lastActive: '1 hour ago' },
  { id: 4, name: 'Elena Vance', role: 'Viewer', email: 'elena.v@nexussight.corp', projects: 2, status: 'Offline', lastActive: '2 days ago' },
  { id: 5, name: 'Gordon Freeman', role: 'Pilot', email: 'gordon.f@nexussight.corp', projects: 1, status: 'Active', lastActive: '10 min ago' },
  { id: 6, name: 'Alyx Smith', role: 'Analyst', email: 'alyx.s@nexussight.corp', projects: 8, status: 'Away', lastActive: '5 hours ago' },
];

export default function UsersPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Users className="w-6 h-6" /> Team Administration
          </h1>
          <p className="text-muted-foreground">Manage organizational access, roles, and project permissions.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="outline" className="border-primary/20 text-primary">
            Export Roster
          </Button>
          <Button className="bg-primary text-white shadow-lg shadow-primary/20">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Team Member
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-primary text-white">
           <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <Badge className="bg-white/20 text-white border-none">Secure</Badge>
              </div>
              <h3 className="text-2xl font-bold">RBAC Enforcement</h3>
              <p className="text-sm text-primary-foreground/70 mt-2">
                All permissions are governed by Role-Based Access Control. Ensure pilots have telemetry write access and viewers remain read-only.
              </p>
           </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-secondary text-white">
           <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                   <Lock className="w-6 h-6" />
                </div>
                <Badge className="bg-white/20 text-white border-none">Policy</Badge>
              </div>
              <h3 className="text-2xl font-bold">2FA Compliance</h3>
              <p className="text-sm text-secondary-foreground/80 mt-2">
                98% of your team has enabled Two-Factor Authentication. Corporate policy requires 100% compliance for all Administrator roles.
              </p>
           </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-muted/30">
           <CardContent className="p-6 flex flex-col justify-center h-full">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary">24</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-tight">
                  Total Active<br/>Team Members
                </div>
              </div>
              <div className="mt-4 flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <Avatar key={i} className="border-2 border-white w-8 h-8">
                    <AvatarImage src={`https://picsum.photos/seed/${i+100}/32/32`} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
                <div className="w-8 h-8 rounded-full bg-white border-2 border-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                  +19
                </div>
              </div>
           </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border bg-white flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle className="text-lg font-bold text-primary">Member Directory</CardTitle>
            <CardDescription>Comprehensive list of all registered corporate users.</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search name or email..." className="pl-9 w-64 bg-muted/30 border-none h-9" />
            </div>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent bg-muted/20">
                <TableHead>User Profile</TableHead>
                <TableHead>System Role</TableHead>
                <TableHead>Projects</TableHead>
                <TableHead>Operational Status</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead className="text-right">Manage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="group transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 border border-border">
                        <AvatarImage src={`https://picsum.photos/seed/${user.id+50}/36/36`} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-bold text-primary">{user.name}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {user.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "font-semibold text-[10px] uppercase",
                      user.role === 'Admin' ? "bg-primary text-white" : "bg-muted text-muted-foreground border-none"
                    )}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-medium text-primary bg-primary/5 px-2 py-1 rounded-md">{user.projects}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        user.status === 'Active' || user.status === 'On Mission' ? "bg-green-500" : "bg-slate-300"
                      )} />
                      <span className="text-sm font-medium">{user.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground font-medium">
                    {user.lastActive}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
