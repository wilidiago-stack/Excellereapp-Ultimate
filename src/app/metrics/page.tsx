
"use client";

import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  AlertTriangle, 
  Download, 
  Calendar,
  Layers,
  HelpCircle,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Area, 
  AreaChart, 
  Line, 
  LineChart,
  Pie,
  PieChart,
  Cell
} from 'recharts';

const flightData = [
  { month: 'Jul', flights: 45, processing: 120 },
  { month: 'Aug', flights: 52, processing: 145 },
  { month: 'Sep', flights: 38, processing: 98 },
  { month: 'Oct', flights: 65, processing: 180 },
  { month: 'Nov', flights: 48, processing: 130 },
  { month: 'Dec', flights: 72, processing: 210 },
];

const resourceData = [
  { name: 'Mapping', value: 40, fill: 'var(--color-mapping)' },
  { name: 'Inspection', value: 30, fill: 'var(--color-inspection)' },
  { name: 'Surveying', value: 20, fill: 'var(--color-surveying)' },
  { name: 'Research', value: 10, fill: 'var(--color-research)' },
];

const chartConfig: ChartConfig = {
  flights: { label: 'Flights Conducted', color: 'hsl(var(--primary))' },
  processing: { label: 'Data Processing (Hrs)', color: 'hsl(var(--secondary))' },
};

const pieChartConfig: ChartConfig = {
  mapping: { label: 'Mapping', color: 'hsl(var(--primary))' },
  inspection: { label: 'Inspection', color: 'hsl(var(--secondary))' },
  surveying: { label: 'Surveying', color: 'hsl(var(--accent))' },
  research: { label: 'Research', color: 'hsl(var(--muted-foreground))' },
};

export default function MetricsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <BarChart3 className="w-6 h-6" /> Strategic Metrics Hub
          </h1>
          <p className="text-muted-foreground">Real-time performance analytics for corporate drone operations.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-primary/20 text-primary font-semibold">
            <Calendar className="w-4 h-4 mr-2" />
            Last 6 Months
          </Button>
          <Button size="sm" className="bg-primary text-white shadow-lg shadow-primary/20">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Flight Hours', value: '4,282h', icon: Activity, trend: '+12%', color: 'text-primary' },
          { label: 'Data Accuracy', value: '99.2%', icon: Target, trend: 'Optimal', color: 'text-secondary' },
          { label: 'Project Completion', value: '68%', icon: Layers, trend: 'On Track', color: 'text-muted-foreground' },
          { label: 'System Alerts', value: '2', icon: AlertTriangle, trend: 'Action Needed', color: 'text-orange-500' },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-muted/50 rounded-lg">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <Badge variant="outline" className="text-[10px] font-bold">{stat.trend}</Badge>
              </div>
              <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm overflow-hidden">
          <CardHeader className="bg-white">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-bold text-primary">Operation & Processing Volume</CardTitle>
                <CardDescription>Comparison between flight frequency and cloud processing demands.</CardDescription>
              </div>
              <HelpCircle className="w-5 h-5 text-muted-foreground/30 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <BarChart data={flightData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
                <XAxis 
                  dataKey="month" 
                  tickLine={false} 
                  axisLine={false} 
                  tickMargin={10}
                />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="flights" fill="var(--color-flights)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="processing" fill="var(--color-processing)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-primary">Resource Allocation</CardTitle>
            <CardDescription>Flight time distribution by task type.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <ChartContainer config={pieChartConfig} className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={resourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {resourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="space-y-4">
              {[
                { name: 'Mapping', value: 40, key: 'mapping' },
                { name: 'Inspection', value: 30, key: 'inspection' },
                { name: 'Surveying', value: 20, key: 'surveying' },
                { name: 'Research', value: 10, key: 'research' },
              ].map((item) => (
                <div key={item.key} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="text-primary">{item.value}%</span>
                  </div>
                  <Progress value={item.value} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-primary">Regional Operations Efficiency</CardTitle>
          <CardDescription>Aggregated performance score across multiple global hubs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { region: 'Northern Hub', score: 94, status: 'Optimal' },
              { region: 'Western Corridor', score: 78, status: 'Average' },
              { region: 'Southern District', score: 91, status: 'Optimal' },
            ].map((reg) => (
              <div key={reg.region} className="p-6 rounded-xl bg-muted/30 border border-border/50">
                 <div className="flex justify-between items-start mb-4">
                   <h4 className="font-bold text-primary">{reg.region}</h4>
                   <Badge className={reg.score > 90 ? "bg-green-500" : "bg-orange-500"}>{reg.status}</Badge>
                 </div>
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-black text-primary">{reg.score}</span>
                   <span className="text-xs text-muted-foreground font-bold">/ 100 PTS</span>
                 </div>
                 <div className="mt-4 flex items-center gap-1 text-[10px] text-muted-foreground">
                   <TrendingUp className="w-3 h-3 text-secondary" />
                   Up 4.2% from last quarter
                 </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
