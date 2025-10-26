import { Sparkles, Calendar, Globe, TrendingUp, Package, FileText, Send, Truck, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, ZAxis } from "recharts";
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

// Risk-return matrix data
const riskReturnData = [
  { country: "🇧🇷 Brazil", cost: 520, reliability: 75, size: 45 },
  { country: "🇹🇭 Thailand", cost: 540, reliability: 85, size: 30 },
  { country: "🇦🇺 Australia", cost: 560, reliability: 90, size: 20 },
  { country: "🇮🇳 India", cost: 500, reliability: 40, size: 5 },
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
            Origin Risk-Return Matrix
          </h3>
          <div className="mb-4 h-64 rounded-lg bg-muted/30 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis 
                  type="number" 
                  dataKey="cost" 
                  name="Cost" 
                  unit="/MT"
                  domain={[480, 580]}
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: 'Cost ($/MT)', position: 'bottom' }}
                />
                <YAxis 
                  type="number" 
                  dataKey="reliability" 
                  name="Reliability" 
                  unit="%"
                  domain={[30, 95]}
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: 'Supply Reliability', angle: -90, position: 'left' }}
                />
                <ZAxis type="number" dataKey="size" range={[400, 1000]} />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  content={({ payload }) => {
                    if (payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="rounded-lg border bg-card p-2">
                          <p className="font-semibold">{data.country}</p>
                          <p className="text-sm">Cost: ${data.cost}/MT</p>
                          <p className="text-sm">Reliability: {data.reliability}%</p>
                          <p className="text-sm">Share: {data.size}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Scatter name="Countries" data={riskReturnData} fill="hsl(var(--primary))">
                  {riskReturnData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={
                        entry.country.includes("🇧🇷") ? "#0052A5" :
                        entry.country.includes("🇹🇭") ? "#ED1C24" :
                        entry.country.includes("🇦🇺") ? "#FFCD00" :
                        "#FF9933"
                      } 
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded bg-success/10 p-2 text-center">
              <p className="font-semibold text-success">Best Value</p>
              <p className="text-muted-foreground">Low Cost + High Reliability</p>
            </div>
            <div className="rounded bg-accent/10 p-2 text-center">
              <p className="font-semibold text-accent">Premium Reliable</p>
              <p className="text-muted-foreground">High Cost + High Reliability</p>
            </div>
            <div className="rounded bg-warning/10 p-2 text-center">
              <p className="font-semibold text-warning">Risky Cheap</p>
              <p className="text-muted-foreground">Low Cost + Low Reliability</p>
            </div>
            <div className="rounded bg-destructive/10 p-2 text-center">
              <p className="font-semibold text-destructive">Avoid</p>
              <p className="text-muted-foreground">High Cost + Low Reliability</p>
            </div>
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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Purchase Order</DialogTitle>
                <DialogDescription>
                  Generate a new purchase order based on AI recommendations.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Volume (MT)</p>
                  <input type="number" className="w-full rounded-md border px-3 py-2" placeholder="50000" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Origin</p>
                  <select className="w-full rounded-md border px-3 py-2">
                    <option>🇧🇷 Brazil</option>
                    <option>🇹🇭 Thailand</option>
                    <option>🇦🇺 Australia</option>
                    <option>🇮🇳 India</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Delivery Date</p>
                  <input type="date" className="w-full rounded-md border px-3 py-2" />
                </div>
                <Button className="w-full" onClick={handleCreatePO}>Generate PO</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">Send RFQ</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Send Request for Quotation</DialogTitle>
                <DialogDescription>
                  Request quotes from your preferred supplier network.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Volume Required (MT)</p>
                  <input type="number" className="w-full rounded-md border px-3 py-2" placeholder="50000" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Preferred Origins</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">🇧🇷 Brazil</Button>
                    <Button variant="outline" size="sm">🇹🇭 Thailand</Button>
                    <Button variant="outline" size="sm">🇦🇺 Australia</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Response Deadline</p>
                  <input type="date" className="w-full rounded-md border px-3 py-2" />
                </div>
                <Button className="w-full" onClick={handleSendRFQ}>Send to 5 Suppliers</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">Schedule Delivery</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule Logistics</DialogTitle>
                <DialogDescription>
                  Coordinate shipping and delivery schedules.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Shipment Volume (MT)</p>
                  <input type="number" className="w-full rounded-md border px-3 py-2" placeholder="50000" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Origin Port</p>
                  <select className="w-full rounded-md border px-3 py-2">
                    <option>🇧🇷 Santos, Brazil</option>
                    <option>🇹🇭 Bangkok, Thailand</option>
                    <option>🇦🇺 Sydney, Australia</option>
                    <option>🇮🇳 Mumbai, India</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Expected Arrival</p>
                  <input type="date" className="w-full rounded-md border px-3 py-2" />
                </div>
                <Button className="w-full" onClick={handleScheduleDelivery}>Confirm Schedule</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" onClick={() => toast({ title: "Generating Reports", description: "Procurement summary being compiled..." })}>
            <FileText className="h-4 w-4" />
            Reports
          </Button>
        </div>
      </Card>
    </div>
  );
};
