import { TrendingUp, Package, DollarSign, Activity, Download, Bell, FileText } from "lucide-react";
import { KPICard } from "../KPICard";
import { AlertCard } from "../AlertCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

// Dummy price data for 6 months history + 3 months prediction
const priceData = [
  { month: "May '24", ny11: 19.5, london5: 550, predicted: false },
  { month: "Jun '24", ny11: 20.2, london5: 565, predicted: false },
  { month: "Jul '24", ny11: 19.8, london5: 558, predicted: false },
  { month: "Aug '24", ny11: 21.1, london5: 585, predicted: false },
  { month: "Sep '24", ny11: 22.3, london5: 605, predicted: false },
  { month: "Oct '24", ny11: 23.5, london5: 625, predicted: false },
  { month: "Nov '24", ny11: 24.2, london5: 640, predicted: true },
  { month: "Dec '24", ny11: 25.1, london5: 658, predicted: true },
  { month: "Jan '25", ny11: 25.8, london5: 670, predicted: true },
];

export const MarketCommandCenter = () => {
  const handleExport = () => {
    toast({ title: "Exporting Report", description: "Market analysis report is being generated..." });
  };

  const handleAlert = () => {
    toast({ title: "Alert Set", description: "You'll be notified when NY11 crosses 25.00" });
  };

  return (
    <div className="space-y-6">
      {/* KPI Overview */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Procurement Progress"
          value="37%"
          subtitle="185,000 / 500,000 MT"
          change="+12% this month"
          changeType="positive"
          icon={Package}
        />
        <KPICard
          title="Portfolio Risk Score"
          value="Medium"
          subtitle="Based on 12 factors"
          change="Improved from High"
          changeType="positive"
          icon={Activity}
        />
        <KPICard
          title="AI Recommendation"
          value="Hold"
          subtitle="Wait for price dip"
          change="Updated 2h ago"
          changeType="neutral"
          icon={TrendingUp}
        />
        <KPICard
          title="Avg Purchase Price"
          value="$145.20"
          subtitle="Last 30 days"
          change="-3.2% vs target"
          changeType="positive"
          icon={DollarSign}
        />
      </div>

      {/* Origin Status Cards */}
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Top Sourcing Origins - Live FOB Prices</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border-l-4 border-[#0052A5] bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-2xl">🇧🇷</span>
              <span className="rounded-full bg-success/10 px-2 py-1 text-xs font-semibold text-success">Available</span>
            </div>
            <p className="font-semibold text-foreground">Brazil</p>
            <p className="text-2xl font-bold text-[#0052A5]">$520/MT</p>
            <p className="text-sm text-success">▲ +2.3% (24h)</p>
          </div>
          <div className="rounded-lg border-l-4 border-[#ED1C24] bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-2xl">🇹🇭</span>
              <span className="rounded-full bg-success/10 px-2 py-1 text-xs font-semibold text-success">Stable</span>
            </div>
            <p className="font-semibold text-foreground">Thailand</p>
            <p className="text-2xl font-bold text-[#ED1C24]">$540/MT</p>
            <p className="text-sm text-muted-foreground">▬ 0.0% (24h)</p>
          </div>
          <div className="rounded-lg border-l-4 border-[#FF9933] bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-2xl">🇮🇳</span>
              <span className="rounded-full bg-destructive/10 px-2 py-1 text-xs font-semibold text-destructive">High Risk</span>
            </div>
            <p className="font-semibold text-foreground">India</p>
            <p className="text-2xl font-bold text-[#FF9933]">$500/MT</p>
            <p className="text-sm text-destructive">▼ -1.5% (24h)</p>
          </div>
          <div className="rounded-lg border-l-4 border-[#FFCD00] bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-2xl">🇦🇺</span>
              <span className="rounded-full bg-warning/10 px-2 py-1 text-xs font-semibold text-warning">Watch</span>
            </div>
            <p className="font-semibold text-foreground">Australia</p>
            <p className="text-2xl font-bold text-[#FFCD00]">$560/MT</p>
            <p className="text-sm text-success">▲ +0.8% (24h)</p>
          </div>
        </div>
      </Card>

      {/* Ethanol Parity Alert */}
      <Card className="border-l-4 border-success p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground">
              🇧🇷 Brazil Ethanol Parity Status
            </h3>
            <p className="mb-3 text-2xl font-bold text-success">54% Sugar / 46% Ethanol</p>
            <p className="mb-2 text-sm text-muted-foreground">
              Status: <span className="font-semibold text-success">Favorable for Sugar Production ✓</span>
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>• Brent Crude: $87/barrel (stable)</p>
              <p>• BRL/USD: 5.65 (supportive for exports)</p>
              <p>• Mills currently prioritizing sugar over ethanol</p>
            </div>
          </div>
          <div className="rounded-lg bg-success/10 p-4 text-center">
            <p className="text-xs text-muted-foreground">Risk Score</p>
            <p className="text-3xl font-bold text-success">35/100</p>
            <p className="text-xs text-success">Low Risk</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Live Price Chart */}
        <Card className="col-span-2 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">NY11 & London No.5 Price Movement</h3>
              <p className="text-sm text-muted-foreground">6-month history + 3-month forecast</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">6M</Button>
              <Button variant="outline" size="sm">1Y</Button>
              <Button variant="outline" size="sm">All</Button>
            </div>
          </div>
          <div className="h-80 rounded-lg bg-muted/30 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="left" stroke="hsl(var(--primary))" label={{ value: 'NY11 (¢/lb)', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--accent))" label={{ value: 'London No.5 ($/MT)', angle: 90, position: 'insideRight' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="ny11" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  name="NY11 (¢/lb)"
                  dot={(props) => {
                    const { cx, cy, payload } = props;
                    return payload.predicted ? (
                      <circle cx={cx} cy={cy} r={4} fill="hsl(var(--primary))" strokeDasharray="3 3" />
                    ) : (
                      <circle cx={cx} cy={cy} r={4} fill="hsl(var(--primary))" />
                    );
                  }}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="london5" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  name="London No.5 ($/MT)"
                  dot={(props) => {
                    const { cx, cy, payload } = props;
                    return payload.predicted ? (
                      <circle cx={cx} cy={cy} r={4} fill="hsl(var(--accent))" strokeDasharray="3 3" />
                    ) : (
                      <circle cx={cx} cy={cy} r={4} fill="hsl(var(--accent))" />
                    );
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Market Sentiment & Intelligence */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Market Sentiment</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Overall</span>
                <span className="font-semibold text-warning">Neutral</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[55%] bg-gradient-to-r from-destructive via-warning to-success" />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Bearish</span>
                <span>Bullish</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Intelligence</h3>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg border bg-card p-3">
                <p className="font-medium text-foreground">🇧🇷 Brazil Ethanol Mix</p>
                <p className="text-muted-foreground">54% sugar - supporting exports</p>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <p className="font-medium text-foreground">🇮🇳 India Policy Alert</p>
                <p className="text-destructive">Export quota likely - 3M MT cap</p>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <p className="font-medium text-foreground">🇹🇭 Thailand Production</p>
                <p className="text-muted-foreground">Stable at 11.5M MT</p>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <p className="font-medium text-foreground">🇦🇺 Australia Weather</p>
                <p className="text-warning">Drought watch - monitoring closely</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4" />
                    Report
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Generate Market Report</DialogTitle>
                    <DialogDescription>
                      Select the report type and date range for your market analysis.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Report Type</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Daily Summary</Button>
                        <Button variant="outline" size="sm">Weekly Analysis</Button>
                        <Button variant="outline" size="sm">Monthly Review</Button>
                      </div>
                    </div>
                    <Button className="w-full" onClick={handleExport}>Generate Report</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Bell className="h-4 w-4" />
                    Alert
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Set Price Alert</DialogTitle>
                    <DialogDescription>
                      Get notified when prices reach your target levels.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">NY11 Target Price (¢/lb)</p>
                      <input type="number" className="w-full rounded-md border px-3 py-2" placeholder="25.00" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">London No.5 Target Price ($/MT)</p>
                      <input type="number" className="w-full rounded-md border px-3 py-2" placeholder="670" />
                    </div>
                    <Button className="w-full" onClick={handleAlert}>Set Alert</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        </div>
      </div>

      {/* Top Alerts */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-foreground">Top Priority Actions</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <AlertCard
            type="error"
            title="Price Spike Alert"
            description="NY11 up 5.2% in 24h. Consider accelerating purchases."
            actionLabel="Review Now"
            onAction={() => toast({ title: "Review Initiated", description: "Opening detailed price analysis..." })}
          />
          <AlertCard
            type="warning"
            title="Contract Expiry"
            description="3 supplier contracts expire in 30 days. Renew or renegotiate."
            actionLabel="Manage"
            onAction={() => toast({ title: "Contract Manager", description: "Loading contract management panel..." })}
          />
          <AlertCard
            type="info"
            title="Optimal Buy Window"
            description="AI suggests purchasing 50,000 MT next week based on forecast."
            actionLabel="Schedule"
            onAction={() => toast({ title: "Purchase Scheduled", description: "Added to procurement calendar" })}
          />
        </div>
      </div>
    </div>
  );
};
