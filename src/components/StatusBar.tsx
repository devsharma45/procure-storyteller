import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

export const StatusBar = () => {
  return (
    <div className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-muted-foreground">NY11</span>
              <span className="text-lg font-bold text-foreground">$533</span>
              <span className="text-xs text-muted-foreground">/MT</span>
              <TrendingUp className="h-3.5 w-3.5 text-success" />
              <span className="text-sm font-medium text-success">+2.3%</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-muted-foreground">London 5</span>
              <span className="text-lg font-bold text-foreground">$640</span>
              <span className="text-xs text-muted-foreground">/MT</span>
              <TrendingDown className="h-3.5 w-3.5 text-destructive" />
              <span className="text-sm font-medium text-destructive">-1.2%</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 min-w-[180px]">
              <span className="text-sm text-muted-foreground">Procurement Progress</span>
              <span className="text-sm font-semibold text-foreground">37%</span>
              <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[37%] bg-accent transition-all" />
              </div>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <div className="flex items-center gap-2 min-w-[180px]">
              <span className="text-sm text-muted-foreground">Refined Sales Progress</span>
              <span className="text-sm font-semibold text-foreground">42%</span>
              <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[42%] bg-primary transition-all" />
              </div>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <div className="flex items-center gap-1.5">
              <span className="text-sm text-muted-foreground">Crush Margin</span>
              <span className="rounded-md bg-success/10 px-1.5 py-0.5 text-sm font-semibold text-success">
                +$85/MT
              </span>
              <TrendingUp className="h-3.5 w-3.5 text-success" />
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Risk Score</span>
              <span className="rounded-md bg-warning/10 px-2 py-1 text-sm font-semibold text-warning">
                Medium
              </span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="text-sm text-muted-foreground">Risk Score</span>
                <span className="text-sm font-medium text-warning">Medium</span>
              </div>
              <div className="flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5 text-destructive" />
                <span className="text-sm font-medium text-destructive">3 Alerts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
