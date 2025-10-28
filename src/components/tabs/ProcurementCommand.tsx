import { Sparkles, Calendar, Globe, TrendingUp, Package, FileText, Send, Truck, Target, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

// Dummy purchase timeline data by country
const purchaseTimelineData = [
  { month: "Nov '24", brazil: 12, thailand: 6, australia: 4, india: 0, total: 22 },
  { month: "Dec '24", brazil: 15, thailand: 8, australia: 5, india: 0, total: 28 },
  { month: "Jan '25", brazil: 18, thailand: 10, australia: 5, india: 2, total: 35 },
  { month: "Feb '25", brazil: 16, thailand: 9, australia: 4, india: 1, total: 30 },
  { month: "Mar '25", brazil: 20, thailand: 12, australia: 5, india: 1, total: 38 },
  { month: "Apr '25", brazil: 22, thailand: 11, australia: 5, india: 2, total: 40 },
];

// Origin mix data with country colors
const originMixData = [
  { name: "🇧🇷 Brazil", value: 45, color: "#0052A5" },
  { name: "🇹🇭 Thailand", value: 30, color: "#ED1C24" },
  { name: "🇦🇺 Australia", value: 20, color: "#FFCD00" },
  { name: "🇮🇳 India", value: 5, color: "#FF9933" },
];

// Simplified risk-return comparison data (normalized scores out of 100)
const riskReturnData = [
  { country: "🇧🇷 Brazil", costScore: 85, reliabilityScore: 75, color: "#0052A5" },
  { country: "🇹🇭 Thailand", costScore: 70, reliabilityScore: 85, color: "#ED1C24" },
  { country: "🇦🇺 Australia", costScore: 50, reliabilityScore: 90, color: "#FFCD00" },
  { country: "🇮🇳 India", costScore: 95, reliabilityScore: 40, color: "#FF9933" },
];

export const ProcurementCommand = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const handleCreatePO = () => {
    toast({ title: "Creating Purchase Order", description: "PO draft is being prepared for review..." });
  };

  const handleSendRFQ = () => {
    toast({ title: "Sending RFQ", description: "Request for quotation sent to 5 preferred suppliers" });
  };

  const handleScheduleDelivery = () => {
    toast({ title: "Delivery Scheduled", description: "Logistics team notified for Q1 2025 shipments" });
  };
  
  return (
    <div className="space-y-6">
      {/* AI Purchase Calendar by Country */}
      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Sparkles className="h-5 w-5 text-accent" />
              AI-Optimized Purchase Calendar by Origin
            </h3>
            <p className="text-sm text-muted-foreground">Country-specific optimal buy windows</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => toast({ title: "Exporting Calendar", description: "Downloading 6-month procurement timeline..." })}>
            <Calendar className="h-4 w-4" />
            Export Calendar
          </Button>
        </div>
        <div className="mb-4 h-80 rounded-lg bg-muted/30 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={purchaseTimelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Quantity (K MT)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="brazil" stackId="a" fill="#0052A5" name="🇧🇷 Brazil" />
              <Bar dataKey="thailand" stackId="a" fill="#ED1C24" name="🇹🇭 Thailand" />
              <Bar dataKey="australia" stackId="a" fill="#FFCD00" name="🇦🇺 Australia" />
              <Bar dataKey="india" stackId="a" fill="#FF9933" name="🇮🇳 India" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mb-4 rounded-lg border bg-accent/5 p-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-accent">📊 Demand-Driven Optimization: </span>
            Purchase quantities are optimized to meet projected demand of <span className="font-semibold">260K MT</span> for this period (based on domestic + export forecasts), plus 15% safety buffer.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <div className="rounded-lg border-l-4 border-[#0052A5] bg-card p-3">
            <p className="text-sm font-semibold text-foreground">🇧🇷 Brazil</p>
            <p className="text-xs text-success">✓ Buy now - ethanol parity favorable</p>
          </div>
          <div className="rounded-lg border-l-4 border-[#ED1C24] bg-card p-3">
            <p className="text-sm font-semibold text-foreground">🇹🇭 Thailand</p>
            <p className="text-xs text-success">✓ Reliable - negotiate volume discounts</p>
          </div>
          <div className="rounded-lg border-l-4 border-[#FFCD00] bg-card p-3">
            <p className="text-sm font-semibold text-foreground">🇦🇺 Australia</p>
            <p className="text-xs text-warning">⚠ Quality hedge - premium pricing</p>
          </div>
          <div className="rounded-lg border-l-4 border-[#FF9933] bg-card p-3">
            <p className="text-sm font-semibold text-foreground">🇮🇳 India</p>
            <p className="text-xs text-destructive">✕ Avoid - quota risk imminent</p>
          </div>
        </div>
      </Card>

      {/* Origin Mix & Risk-Return Matrix */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Globe className="h-5 w-5 text-primary" />
            Optimal Origin Mix
          </h3>
          <div className="mb-4 h-64 rounded-lg bg-muted/30 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={originMixData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {originMixData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#0052A5]" />
                <span className="text-muted-foreground">🇧🇷 Brazil (Lowest Cost)</span>
              </div>
              <span className="font-semibold text-foreground">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ED1C24]" />
                <span className="text-muted-foreground">🇹🇭 Thailand (Proximity)</span>
              </div>
              <span className="font-semibold text-foreground">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FFCD00]" />
                <span className="text-muted-foreground">🇦🇺 Australia (Quality)</span>
              </div>
              <span className="font-semibold text-foreground">20%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF9933]" />
                <span className="text-muted-foreground">🇮🇳 India (Opportunistic)</span>
              </div>
              <span className="font-semibold text-foreground">5%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Target className="h-5 w-5 text-accent" />
            Origin Comparison: Cost vs Reliability
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">Higher scores are better (Cost Score = value for money, Reliability Score = supply stability)</p>
          <div className="mb-4 h-64 rounded-lg bg-muted/30 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskReturnData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis 
                  dataKey="country" 
                  stroke="hsl(var(--muted-foreground))"
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: 'Score (out of 100)', angle: -90, position: 'insideLeft' }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="costScore" fill="hsl(var(--primary))" name="Cost Competitiveness" />
                <Bar dataKey="reliabilityScore" fill="hsl(var(--accent))" name="Supply Reliability" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {riskReturnData.map((country) => (
              <div key={country.country} className="flex items-center gap-3 rounded-lg border p-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: country.color }} />
                <span className="text-sm font-medium">{country.country}</span>
                <div className="ml-auto flex gap-4 text-xs text-muted-foreground">
                  <span>Cost: {country.costScore}/100</span>
                  <span>Reliability: {country.reliabilityScore}/100</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
          <Package className="h-5 w-5" />
          Quick Actions & Execution
        </h3>
        <div className="flex flex-wrap gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">Create PO</Button>
            </DialogTrigger>
...
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">Adjust Production Run</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adjust Refinery Production</DialogTitle>
                <DialogDescription>
                  Increase or decrease refinery output based on demand fluctuations.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Target Output (MT/month)</p>
                  <input type="number" className="w-full rounded-md border px-3 py-2" placeholder="250000" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Adjustment Reason</p>
                  <select className="w-full rounded-md border px-3 py-2">
                    <option>Increased Demand (Domestic)</option>
                    <option>Increased Demand (Export)</option>
                    <option>Reduced Demand</option>
                    <option>Maintenance Schedule</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Effective Date</p>
                  <input type="date" className="w-full rounded-md border px-3 py-2" />
                </div>
                <Button className="w-full" onClick={() => toast({ title: "Production Adjusted", description: "Refinery production schedule updated" })}>
                  Confirm Adjustment
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" onClick={() => toast({ title: "Generating Reports", description: "Procurement summary being compiled..." })}>
            <FileText className="h-4 w-4" />
            Reports
          </Button>
        </div>
      </Card>

      {/* Inventory & Sales Alignment */}
      <Card className="p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
          <TrendingUp className="h-5 w-5 text-success" />
          Inventory & Sales Alignment: From Procurement to Profit
        </h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Full-cycle inventory flow from raw sugar purchase to refined sugar sales
        </p>
        
        {/* Flow Diagram */}
        <div className="mb-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 rounded-lg border bg-primary/5 p-4">
              <p className="text-xs font-semibold text-muted-foreground">On Order (Raw Sugar)</p>
              <p className="text-2xl font-bold text-primary">120K MT</p>
              <p className="text-xs text-muted-foreground">From Brazil, Thailand, Australia</p>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="flex-1 rounded-lg border bg-accent/5 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Raw Sugar Inventory</p>
              <p className="text-2xl font-bold text-accent">85K MT</p>
              <p className="text-xs text-success">35 Days of Supply ✓</p>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="flex-1 rounded-lg border bg-warning/5 p-4">
              <p className="text-xs font-semibold text-muted-foreground">In Production</p>
              <p className="text-2xl font-bold text-warning">42K MT</p>
              <p className="text-xs text-muted-foreground">Being refined this month</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-2xl text-muted-foreground">↓</div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex-1 rounded-lg border bg-success/5 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Refined Sugar Inventory</p>
              <p className="text-2xl font-bold text-success">115K MT</p>
              <p className="text-xs text-success">45 Days of Supply ✓</p>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="flex-1 rounded-lg border bg-gradient-to-r from-success/10 to-accent/10 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Sales Forecast (Next 30 Days)</p>
              <p className="text-2xl font-bold text-foreground">78K MT</p>
              <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                <p>• Domestic: 45K MT</p>
                <p>• Export: 33K MT</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Status Indicators */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">Inventory Health</p>
              <span className="rounded-full bg-success/10 px-2 py-1 text-xs font-semibold text-success">Healthy</span>
            </div>
            <p className="text-xs text-muted-foreground">All inventory levels above minimum thresholds</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">Crush Margin</p>
              <span className="text-xl font-bold text-success">+$85/MT</span>
            </div>
            <p className="text-xs text-success">Profitable refining operations</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">Next Action</p>
              <span className="rounded-full bg-accent/10 px-2 py-1 text-xs font-semibold text-accent">Plan</span>
            </div>
            <p className="text-xs text-muted-foreground">Review Q2 procurement schedule</p>
          </div>
        </div>
        
        {/* Alert Section */}
        <div className="mt-4 rounded-lg border border-success/20 bg-success/5 p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
            <div>
              <p className="font-semibold text-success">Optimal Inventory Position</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Current inventory levels are well-balanced to meet sales forecasts. Refined sugar inventory at 45 days is above the 30-day minimum threshold. Continue current procurement pace.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Disclaimer */}
      <div className="mt-8 text-center text-xs text-muted-foreground">
        For informational purposes only. All data, forecasts, and dashboard features are subject to change based on data availability, quality, and ongoing development.
      </div>
    </div>
  );
};
