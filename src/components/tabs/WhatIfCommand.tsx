import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, AlertTriangle, CheckCircle, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { lbToMt } from "@/lib/utils";

// Scenario impact data - prices in $/MT
const scenarioImpactData = [
  { scenario: "Current", ny11: 533, london5: 640, cost: 100, risk: 35 },
  { scenario: "Brazil Drought", ny11: 628, london5: 720, cost: 118, risk: 68 },
  { scenario: "Export Ban", ny11: 688, london5: 785, cost: 129, risk: 82 },
  { scenario: "Optimized", ny11: 524, london5: 625, cost: 98, risk: 22 },
];

// Timeline comparison data - prices in $/MT
const timelineData = [
  { month: "Nov", baseline: 533, drought: 569, exportBan: 584 },
  { month: "Dec", baseline: 553, drought: 599, exportBan: 635 },
  { month: "Jan", baseline: 569, drought: 628, exportBan: 688 },
  { month: "Feb", baseline: 577, drought: 657, exportBan: 738 },
  { month: "Mar", baseline: 591, drought: 688, exportBan: 789 },
];

export const WhatIfCommand = () => {
  const [selectedScenario, setSelectedScenario] = useState("Brazil Drought");

  const scenarios = [
    { id: 1, name: "Brazil Drought Scenario", impact: "High", status: "active" },
    { id: 2, name: "Export Ban - Vietnam", impact: "Critical", status: "active" },
    { id: 3, name: "USD Strengthening", impact: "Medium", status: "inactive" },
    { id: 4, name: "Freight Cost Spike", impact: "Low", status: "inactive" },
  ];

  const handleRunScenario = (scenario: string) => {
    setSelectedScenario(scenario);
    toast({ title: "Running Scenario", description: `Analyzing impact of: ${scenario}` });
  };

  const handleApproveHedge = () => {
    toast({ title: "Hedge Approved", description: "Forward contract initiated for 50,000 MT at current rates" });
  };

  const handleDownload = () => {
    toast({ title: "Downloading Report", description: "Scenario analysis report is being generated..." });
  };

  return (
    <div className="space-y-6">
      {/* Scenario Library */}
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Pre-Configured Scenarios</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border-l-4 border-[#28A745] bg-card p-4">
            <p className="mb-1 flex items-center gap-2 font-semibold text-foreground">
              🇧🇷 Brazil Ethanol Shift
            </p>
            <p className="mb-2 text-sm text-muted-foreground">Oil → $100/barrel</p>
            <p className="mb-3 text-xs text-muted-foreground">Sugar mix drops to 45%<br/>Global supply -3M MT</p>
            <Button size="sm" variant="outline" onClick={() => handleRunScenario("Brazil Ethanol Shift")}>
              Run Scenario
            </Button>
          </div>
          <div className="rounded-lg border-l-4 border-[#FF9933] bg-card p-4">
            <p className="mb-1 flex items-center gap-2 font-semibold text-foreground">
              🇮🇳 India Export Ban
            </p>
            <p className="mb-2 text-sm text-muted-foreground">Full export restriction</p>
            <p className="mb-3 text-xs text-muted-foreground">6M MT removed from market<br/>Prices spike +$45/MT</p>
            <Button size="sm" variant="outline" onClick={() => handleRunScenario("India Export Ban")}>
              Run Scenario
            </Button>
          </div>
          <div className="rounded-lg border-l-4 border-[#ED1C24] bg-card p-4">
            <p className="mb-1 flex items-center gap-2 font-semibold text-foreground">
              🇹🇭 Thailand Weather Shock
            </p>
            <p className="mb-2 text-sm text-muted-foreground">Drought reduces 15%</p>
            <p className="mb-3 text-xs text-muted-foreground">Export volumes down 1.7M MT<br/>Freight shifts to Brazil</p>
            <Button size="sm" variant="outline" onClick={() => handleRunScenario("Thailand Weather Shock")}>
              Run Scenario
            </Button>
          </div>
          <div className="rounded-lg border-l-4 border-destructive bg-card p-4">
            <p className="mb-1 flex items-center gap-2 font-semibold text-foreground">
              🌍 Multi-Country Crisis
            </p>
            <p className="mb-2 text-sm text-muted-foreground">Combined shocks</p>
            <p className="mb-3 text-xs text-muted-foreground">Brazil ethanol + India ban<br/>+ Thailand drought</p>
            <Button size="sm" variant="outline" onClick={() => handleRunScenario("Multi-Country Crisis")}>
              Run Scenario
            </Button>
          </div>
        </div>
      </Card>

      {/* Scenario Builder Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        <Card className="col-span-2 p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Impact Visualization</h3>
          <div className="mb-6 h-80 rounded-lg bg-muted/30 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Price ($/MT)', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => `$${value}/MT`}
                />
                <Legend />
                <Line type="monotone" dataKey="baseline" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Baseline" />
                <Line type="monotone" dataKey="drought" stroke="hsl(var(--destructive))" strokeWidth={2} name="Brazil Drought" />
                <Line type="monotone" dataKey="exportBan" stroke="hsl(var(--warning))" strokeWidth={2} name="Export Ban" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm text-muted-foreground">Procurement Cost Impact</p>
              <p className="mt-2 text-2xl font-bold text-destructive">+$4.2M</p>
              <p className="mt-1 text-xs text-muted-foreground">+15.3% vs baseline</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm text-muted-foreground">Risk Exposure</p>
              <p className="mt-2 text-2xl font-bold text-warning">High</p>
              <p className="mt-1 text-xs text-muted-foreground">Score: 7.8/10</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm text-muted-foreground">Timeline</p>
              <p className="mt-2 text-2xl font-bold text-foreground">4-6M</p>
              <p className="mt-1 text-xs text-muted-foreground">Expected duration</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Impact Analysis */}
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Scenario Impact Analysis: {selectedScenario}</h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="h-64 rounded-lg bg-muted/30 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scenarioImpactData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="scenario" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Cost Impact (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="cost" fill="hsl(var(--primary))" name="Cost Impact (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="h-64 rounded-lg bg-muted/30 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scenarioImpactData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis type="category" dataKey="scenario" stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="risk" fill="hsl(var(--destructive))" name="Risk Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Recommended Mitigations */}
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Recommended Mitigations</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 rounded-lg border bg-accent/5 p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
            <div className="flex-1">
              <p className="font-semibold text-foreground">Accelerate Brazil Purchases</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Lock in 75,000 MT at current prices before drought impact materializes
              </p>
            </div>
            <Button size="sm" onClick={() => toast({ title: "Executing Strategy", description: "Preparing purchase orders for Brazil..." })}>
              Execute
            </Button>
          </div>
          <div className="flex items-start gap-4 rounded-lg border bg-accent/5 p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
            <div className="flex-1">
              <p className="font-semibold text-foreground">Diversify to Colombia</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Increase Colombian sourcing from 15% to 30% to reduce Brazil dependency
              </p>
            </div>
            <Button size="sm" onClick={() => toast({ title: "Planning Diversification", description: "Analyzing Colombian supplier capacity..." })}>
              Plan
            </Button>
          </div>
          <div className="flex items-start gap-4 rounded-lg border bg-warning/5 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-warning" />
            <div className="flex-1">
              <p className="font-semibold text-foreground">Activate Hedging Strategy</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Consider futures contracts to protect against 10%+ price increases
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline">Review</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Hedging Strategy Details</DialogTitle>
                  <DialogDescription>
                    Review the proposed hedging positions and risk mitigation approach.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="rounded-lg border p-4 space-y-2">
                    <p className="text-sm"><strong>Strategy:</strong> Futures + Options Combo</p>
                    <p className="text-sm"><strong>Volume:</strong> 100,000 MT</p>
                    <p className="text-sm"><strong>Duration:</strong> 6-12 months</p>
                    <p className="text-sm text-success"><strong>Estimated Protection:</strong> Up to 10% price increase</p>
                  </div>
                  <Button className="w-full">View Full Analysis</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Scenario analysis last updated: 2 hours ago</p>
        <div className="flex gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">Approve Hedge</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Approve Hedging Strategy</DialogTitle>
                <DialogDescription>
                  Review and approve the recommended hedging position to mitigate risk.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="rounded-lg border p-4 space-y-2">
                  <p className="text-sm"><strong>Hedge Type:</strong> Forward Contract</p>
                  <p className="text-sm"><strong>Volume:</strong> 50,000 MT</p>
                  <p className="text-sm"><strong>Price:</strong> NY11 @ $540/MT</p>
                  <p className="text-sm"><strong>Duration:</strong> 6 months</p>
                  <p className="text-sm text-success"><strong>Estimated Risk Reduction:</strong> 45%</p>
                </div>
                <Button className="w-full" onClick={handleApproveHedge}>Confirm Hedge</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">Schedule Alert</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule Scenario Alert</DialogTitle>
                <DialogDescription>
                  Set up monitoring alerts for this scenario.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Alert Frequency</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Daily</Button>
                    <Button variant="outline" size="sm">Weekly</Button>
                    <Button variant="outline" size="sm">On Change</Button>
                  </div>
                </div>
                <Button className="w-full" onClick={() => toast({ title: "Alert Scheduled", description: "You'll receive daily updates on this scenario" })}>
                  Set Alert
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            Report
          </Button>
        </div>
      </div>
    </div>
  );
};
