import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, CheckSquare, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

// Purchase timeline data
const purchaseTimelineData = [
  { month: "Nov '24", optimal: 45000, actual: 42000, recommended: 48000 },
  { month: "Dec '24", optimal: 52000, actual: 0, recommended: 55000 },
  { month: "Jan '25", optimal: 48000, actual: 0, recommended: 50000 },
  { month: "Feb '25", optimal: 38000, actual: 0, recommended: 40000 },
  { month: "Mar '25", optimal: 55000, actual: 0, recommended: 58000 },
  { month: "Apr '25", optimal: 62000, actual: 0, recommended: 65000 },
];

// Origin mix data
const originMixData = [
  { name: "Brazil", value: 45, cost: 620 },
  { name: "Vietnam", value: 25, cost: 645 },
  { name: "Colombia", value: 20, cost: 635 },
  { name: "India", value: 10, cost: 655 },
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--success))', 'hsl(var(--warning))'];

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
      {/* Optimal Purchase Calendar */}
      <Card className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Calendar className="h-5 w-5" />
              AI-Optimized Purchase Calendar
            </h3>
            <p className="text-sm text-muted-foreground">Recommended buying windows for 2025</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Generate PO</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Generate Purchase Order</DialogTitle>
                <DialogDescription>
                  Create a new PO based on AI recommendations.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Volume (MT)</p>
                  <input type="number" className="w-full rounded-md border px-3 py-2" placeholder="50000" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Delivery Month</p>
                  <select className="w-full rounded-md border px-3 py-2">
                    {months.map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <Button className="w-full" onClick={handleCreatePO}>Generate PO</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="h-80 rounded-lg bg-muted/30 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={purchaseTimelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Volume (MT)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="actual" fill="hsl(var(--success))" name="Actual Purchases" />
              <Bar dataKey="optimal" fill="hsl(var(--primary))" name="Optimal Window" />
              <Bar dataKey="recommended" fill="hsl(var(--accent))" name="AI Recommended" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Origin Mix Optimizer */}
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <MapPin className="h-5 w-5" />
            Origin Mix Optimization
          </h3>
          <div className="h-64 rounded-lg bg-muted/30 p-4">
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
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full" style={{ backgroundColor: COLORS[0] }} />
                <span className="text-sm text-foreground">Brazil</span>
              </div>
              <span className="font-semibold text-foreground">45% • $620/MT</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full" style={{ backgroundColor: COLORS[1] }} />
                <span className="text-sm text-foreground">Vietnam</span>
              </div>
              <span className="font-semibold text-foreground">25% • $645/MT</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full" style={{ backgroundColor: COLORS[2] }} />
                <span className="text-sm text-foreground">Colombia</span>
              </div>
              <span className="font-semibold text-foreground">20% • $635/MT</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full" style={{ backgroundColor: COLORS[3] }} />
                <span className="text-sm text-foreground">India</span>
              </div>
              <span className="font-semibold text-foreground">10% • $655/MT</span>
            </div>
          </div>
          <Button className="mt-4 w-full" variant="outline" onClick={() => toast({ title: "Optimizing Mix", description: "Analyzing optimal sourcing distribution..." })}>
            Optimize Mix
          </Button>
        </Card>

        {/* Progress Tracker */}
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <CheckSquare className="h-5 w-5" />
            Progress vs Recommendations
          </h3>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Overall Progress</span>
                <span className="font-semibold text-foreground">37%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[37%] bg-accent transition-all" />
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="rounded-lg border bg-card p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Brazil</span>
                  <span className="text-xs text-muted-foreground">82,500 / 225,000 MT</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[37%] bg-success" />
                </div>
              </div>
              
              <div className="rounded-lg border bg-card p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Colombia</span>
                  <span className="text-xs text-muted-foreground">55,500 / 150,000 MT</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[37%] bg-warning" />
                </div>
              </div>
              
              <div className="rounded-lg border bg-card p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Vietnam</span>
                  <span className="text-xs text-muted-foreground">27,750 / 75,000 MT</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[37%] bg-destructive" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
          <Users className="h-5 w-5" />
          Quick Actions & Team Assignments
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
                    <option>Brazil</option>
                    <option>Vietnam</option>
                    <option>Colombia</option>
                    <option>India</option>
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
                    <Button variant="outline" size="sm">Brazil</Button>
                    <Button variant="outline" size="sm">Vietnam</Button>
                    <Button variant="outline" size="sm">Colombia</Button>
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
                    <option>Santos, Brazil</option>
                    <option>Ho Chi Minh, Vietnam</option>
                    <option>Buenaventura, Colombia</option>
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
