import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, CheckSquare } from "lucide-react";

export const ProcurementCommand = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
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
          <Button>Generate PO</Button>
        </div>
        <div className="space-y-3">
          {months.map((month, index) => {
            const isOptimal = [1, 2, 5, 8, 11].includes(index);
            const progress = Math.random() * 100;
            
            return (
              <div key={month} className="flex items-center gap-4">
                <div className="w-16 text-sm font-medium text-foreground">{month}</div>
                <div className="flex-1">
                  <div className="relative h-10 overflow-hidden rounded-lg border bg-muted/30">
                    <div
                      className={`h-full transition-all ${
                        isOptimal ? "bg-accent" : "bg-primary/30"
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                    {isOptimal && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-semibold text-accent-foreground">
                          OPTIMAL WINDOW
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-32 text-right">
                  <p className="text-sm font-semibold text-foreground">
                    {Math.round(progress)}% Complete
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {Math.round((progress / 100) * 45000)} MT
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Origin Mix Optimizer */}
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <MapPin className="h-5 w-5" />
            Origin Mix Optimization
          </h3>
          <div className="mb-6 h-64 rounded-lg bg-muted/30 p-4">
            <div className="flex h-full items-center justify-center text-muted-foreground">
              [Origin mix pie chart]
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-chart-1" />
                <span className="text-sm text-foreground">Brazil</span>
              </div>
              <span className="font-semibold text-foreground">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-chart-2" />
                <span className="text-sm text-foreground">Colombia</span>
              </div>
              <span className="font-semibold text-foreground">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-chart-3" />
                <span className="text-sm text-foreground">Vietnam</span>
              </div>
              <span className="font-semibold text-foreground">15%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-chart-4" />
                <span className="text-sm text-foreground">Others</span>
              </div>
              <span className="font-semibold text-foreground">10%</span>
            </div>
          </div>
          <Button className="mt-4 w-full" variant="outline">
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button className="h-auto flex-col gap-2 py-4">
            <span className="text-lg">📝</span>
            <span>Generate RFQ</span>
          </Button>
          <Button className="h-auto flex-col gap-2 py-4" variant="outline">
            <span className="text-lg">📊</span>
            <span>Schedule Negotiation</span>
          </Button>
          <Button className="h-auto flex-col gap-2 py-4" variant="outline">
            <span className="text-lg">🚚</span>
            <span>Book Logistics</span>
          </Button>
          <Button className="h-auto flex-col gap-2 py-4" variant="outline">
            <span className="text-lg">✅</span>
            <span>Quality Checklist</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};
