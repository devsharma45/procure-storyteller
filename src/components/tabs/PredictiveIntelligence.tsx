import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Cloud, Globe, AlertTriangle, Download, Droplet, DollarSign, Fuel } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

// Forecast data with confidence bands
const forecastData = [
  { month: "Nov '24", ny11Low: 22.5, ny11: 24.2, ny11High: 25.8, london5Low: 620, london5: 640, london5High: 660 },
  { month: "Dec '24", ny11Low: 23.2, ny11: 25.1, ny11High: 27.0, london5Low: 635, london5: 658, london5High: 680 },
  { month: "Jan '25", ny11Low: 23.8, ny11: 25.8, ny11High: 27.9, london5Low: 645, london5: 670, london5High: 695 },
  { month: "Feb '25", ny11Low: 24.5, ny11: 26.8, ny11High: 29.1, london5Low: 660, london5: 688, london5High: 715 },
  { month: "Mar '25", ny11Low: 25.0, ny11: 27.5, ny11High: 30.0, london5Low: 670, london5: 700, london5High: 730 },
  { month: "Apr '25", ny11Low: 25.8, ny11: 28.5, ny11High: 31.2, london5Low: 685, london5: 720, london5High: 755 },
];

// Supply and demand data
const supplyDemandData = [
  { region: "Brazil", supply: 42, demand: 37, surplus: 5 },
  { region: "Thailand", supply: 18, demand: 16, surplus: 2 },
  { region: "India", supply: 35, demand: 38, surplus: -3 },
  { region: "Australia", supply: 5, demand: 4, surplus: 1 },
];

// Brazil ethanol mix data (historical + forecast)
const ethanolMixData = [
  { month: "May '24", sugar: 58, ethanol: 42 },
  { month: "Jun '24", sugar: 57, ethanol: 43 },
  { month: "Jul '24", sugar: 56, ethanol: 44 },
  { month: "Aug '24", sugar: 55, ethanol: 45 },
  { month: "Sep '24", sugar: 54, ethanol: 46 },
  { month: "Oct '24", sugar: 54, ethanol: 46 },
  { month: "Nov '24", sugar: 53, ethanol: 47 },
  { month: "Dec '24", sugar: 52, ethanol: 48 },
  { month: "Jan '25", sugar: 51, ethanol: 49 },
  { month: "Feb '25", sugar: 50, ethanol: 50 },
  { month: "Mar '25", sugar: 50, ethanol: 50 },
  { month: "Apr '25", sugar: 49, ethanol: 51 },
];

// Country production forecast
const countryForecast = [
  { country: "🇧🇷 Brazil", current: "29.4M", forecast: "30.2M", export: "High", risk: "Medium", recommendation: "Primary source - lock prices now" },
  { country: "🇹🇭 Thailand", current: "11.5M", forecast: "11.8M", export: "High", risk: "Low", recommendation: "Reliable backup - negotiate volume" },
  { country: "🇮🇳 India", current: "6.1M", forecast: "5.8M", export: "Limited", risk: "High", recommendation: "Avoid - quota risk imminent" },
  { country: "🇦🇺 Australia", current: "3.2M", forecast: "3.0M", export: "Medium", risk: "Medium", recommendation: "Quality hedge - premium pricing" },
];

export const PredictiveIntelligence = () => {
  const [timeHorizon, setTimeHorizon] = useState("3M");

  const handleDownload = () => {
    toast({ title: "Downloading Forecast", description: "Predictive intelligence report is being prepared..." });
  };

  return (
    <div className="space-y-6">
      {/* Forecast Timeline */}
      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Price Forecast</h3>
            <p className="text-sm text-muted-foreground">AI-powered predictions with confidence bands</p>
          </div>
          <div className="flex gap-2">
            <Button variant={timeHorizon === "1M" ? "default" : "outline"} size="sm" onClick={() => setTimeHorizon("1M")}>1M</Button>
            <Button variant={timeHorizon === "3M" ? "default" : "outline"} size="sm" onClick={() => setTimeHorizon("3M")}>3M</Button>
            <Button variant={timeHorizon === "6M" ? "default" : "outline"} size="sm" onClick={() => setTimeHorizon("6M")}>6M</Button>
            <Button variant={timeHorizon === "12M" ? "default" : "outline"} size="sm" onClick={() => setTimeHorizon("12M")}>12M</Button>
          </div>
        </div>
        <div className="h-96 rounded-lg bg-muted/30 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastData}>
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
              <Line yAxisId="left" type="monotone" dataKey="ny11Low" stroke="hsl(var(--primary))" strokeWidth={1} strokeDasharray="5 5" name="NY11 Low" dot={false} />
              <Line yAxisId="left" type="monotone" dataKey="ny11" stroke="hsl(var(--primary))" strokeWidth={3} name="NY11 Forecast" />
              <Line yAxisId="left" type="monotone" dataKey="ny11High" stroke="hsl(var(--primary))" strokeWidth={1} strokeDasharray="5 5" name="NY11 High" dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="london5Low" stroke="hsl(var(--accent))" strokeWidth={1} strokeDasharray="5 5" name="London Low" dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="london5" stroke="hsl(var(--accent))" strokeWidth={3} name="London No.5 Forecast" />
              <Line yAxisId="right" type="monotone" dataKey="london5High" stroke="hsl(var(--accent))" strokeWidth={1} strokeDasharray="5 5" name="London High" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            Download Forecast
          </Button>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-lg border bg-accent/5 p-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-accent" />
            <div>
              <p className="font-semibold text-foreground">Forecasting Accuracy</p>
              <p className="text-sm text-muted-foreground">Historical performance vs actual</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-accent">87%</p>
            <p className="text-xs text-muted-foreground">Last 12 months</p>
          </div>
        </div>
      </Card>

      {/* Brazil Ethanol Dynamics - Full Width Priority */}
      <Card className="p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
          🇧🇷 Brazil Sugar vs Ethanol Production Mix
        </h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4 h-64 rounded-lg bg-muted/30 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ethanolMixData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Allocation %', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="sugar" stackId="1" stroke="#0052A5" fill="#0052A5" name="Sugar %" />
                  <Area type="monotone" dataKey="ethanol" stackId="1" stroke="#28A745" fill="#28A745" name="Ethanol %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between rounded-lg border bg-card p-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Mix (Oct 2024)</p>
                <p className="text-xl font-bold text-foreground">54% Sugar / 46% Ethanol</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Forecast (Apr 2025)</p>
                <p className="text-xl font-bold text-warning">49% Sugar / 51% Ethanol</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-2 flex items-center justify-between">
                <Fuel className="h-5 w-5 text-warning" />
                <span className="text-xs font-semibold text-warning">Live</span>
              </div>
              <p className="text-sm text-muted-foreground">Brent Crude</p>
              <p className="text-2xl font-bold text-foreground">$87/barrel</p>
              <p className="text-xs text-muted-foreground">Trend: Stable</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-2 flex items-center justify-between">
                <DollarSign className="h-5 w-5 text-accent" />
                <span className="text-xs font-semibold text-success">Favorable</span>
              </div>
              <p className="text-sm text-muted-foreground">BRL/USD Exchange</p>
              <p className="text-2xl font-bold text-foreground">5.65</p>
              <p className="text-xs text-success">Positive for exports</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-2 flex items-center justify-between">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground">Growing</span>
              </div>
              <p className="text-sm text-muted-foreground">Corn Ethanol Share</p>
              <p className="text-2xl font-bold text-foreground">18%</p>
              <p className="text-xs text-muted-foreground">Up from 15% YoY</p>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-success/20 via-warning/20 to-destructive/20 p-4">
              <p className="mb-2 text-xs font-semibold text-muted-foreground">Oil Parity Index</p>
              <div className="mb-2 flex justify-between text-xs">
                <span className="text-destructive">Favors Ethanol</span>
                <span className="text-success">Favors Sugar</span>
              </div>
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
                <div className="absolute h-full w-[60%] bg-success" />
              </div>
              <p className="mt-2 text-center text-sm font-semibold text-success">Currently Favorable for Sugar</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Country Production Forecast Table */}
      <Card className="p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
          <Globe className="h-5 w-5 text-primary" />
          Country Production & Export Forecast
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-left text-sm font-semibold text-muted-foreground">Country</th>
                <th className="pb-3 text-left text-sm font-semibold text-muted-foreground">Current</th>
                <th className="pb-3 text-left text-sm font-semibold text-muted-foreground">Forecast Q1</th>
                <th className="pb-3 text-left text-sm font-semibold text-muted-foreground">Export</th>
                <th className="pb-3 text-left text-sm font-semibold text-muted-foreground">Policy Risk</th>
                <th className="pb-3 text-left text-sm font-semibold text-muted-foreground">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {countryForecast.map((item, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="py-3 font-medium text-foreground">{item.country}</td>
                  <td className="py-3 text-muted-foreground">{item.current}</td>
                  <td className="py-3 text-muted-foreground">{item.forecast}</td>
                  <td className="py-3">
                    <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      item.export === "High" ? "bg-success/10 text-success" :
                      item.export === "Medium" ? "bg-warning/10 text-warning" :
                      "bg-destructive/10 text-destructive"
                    }`}>
                      {item.export}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      item.risk === "Low" ? "bg-success/10 text-success" :
                      item.risk === "Medium" ? "bg-warning/10 text-warning" :
                      "bg-destructive/10 text-destructive"
                    }`}>
                      {item.risk}
                    </span>
                  </td>
                  <td className="py-3 text-sm text-muted-foreground">{item.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Key Drivers & Supply Demand */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Key Price Drivers
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">Brazil Weather</span>
                <span className="text-sm font-semibold text-destructive">High Impact</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Drought conditions affecting 2025 harvest projections
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">USD/BRL Exchange</span>
                <span className="text-sm font-semibold text-warning">Medium Impact</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Currency fluctuation impacting export competitiveness
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">Freight Costs</span>
                <span className="text-sm font-semibold text-accent">Low Impact</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Shipping rates stable, minor influence on landed costs
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Globe className="h-5 w-5 text-primary" />
            Supply & Demand Forecast
          </h3>
          <div className="mb-6 h-48 rounded-lg bg-muted/30 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={supplyDemandData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Million MT', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="supply" fill="hsl(var(--primary))" name="Supply" />
                <Bar dataKey="demand" fill="hsl(var(--accent))" name="Demand" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">🇧🇷 Brazil</span>
              <span className="font-semibold text-success">Surplus +12%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">🇹🇭 Thailand</span>
              <span className="font-semibold text-success">Surplus +11%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">🇮🇳 India</span>
              <span className="font-semibold text-destructive">Deficit -8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">🇦🇺 Australia</span>
              <span className="font-semibold text-success">Surplus +20%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Risk Factors */}
      <Card className="p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
          <Cloud className="h-5 w-5 text-primary" />
          Weather & Policy Risks
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4">
            <p className="mb-1 text-sm font-semibold text-destructive">High Risk</p>
            <p className="text-sm text-foreground">Brazil: El Niño pattern developing</p>
          </div>
          <div className="rounded-lg border-l-4 border-warning bg-warning/5 p-4">
            <p className="mb-1 text-sm font-semibold text-warning">Medium Risk</p>
            <p className="text-sm text-foreground">Vietnam: Export quota discussions</p>
          </div>
          <div className="rounded-lg border-l-4 border-accent bg-accent/5 p-4">
            <p className="mb-1 text-sm font-semibold text-accent">Low Risk</p>
            <p className="text-sm text-foreground">Colombia: Stable regulatory environment</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
