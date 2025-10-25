import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

export const StatusBar = () => {
  return (
    <div className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">NY11</span>
              <span className="text-xl font-bold text-foreground">142.50</span>
              <TrendingUp className="h-4 w-4 text-success" />
              <span className="text-sm font-medium text-success">+2.3%</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">London No.5</span>
              <span className="text-xl font-bold text-foreground">2,450</span>
              <TrendingDown className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">-1.2%</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Procurement Progress</span>
              <span className="text-sm font-semibold text-foreground">37%</span>
              <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[37%] bg-accent transition-all" />
              </div>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Risk Score</span>
              <span className="rounded-md bg-warning/10 px-2 py-1 text-sm font-semibold text-warning">
                Medium
              </span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">3 Alerts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
