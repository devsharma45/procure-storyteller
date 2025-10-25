import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Cloud, Globe, AlertTriangle } from "lucide-react";

export const PredictiveIntelligence = () => {
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
            <Button variant="outline" size="sm">1M</Button>
            <Button variant="default" size="sm">3M</Button>
            <Button variant="outline" size="sm">6M</Button>
            <Button variant="outline" size="sm">12M</Button>
          </div>
        </div>
        <div className="h-96 rounded-lg bg-muted/30 p-4">
          <div className="flex h-full items-center justify-center text-muted-foreground">
            [Forecast chart with confidence intervals]
          </div>
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
            <div className="flex h-full items-center justify-center text-muted-foreground">
              [Supply/Demand balance chart by region]
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Brazil</span>
              <span className="font-semibold text-success">Surplus +12%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Vietnam</span>
              <span className="font-semibold text-destructive">Deficit -8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Colombia</span>
              <span className="font-semibold text-foreground">Balanced</span>
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
