import { TrendingUp, Package, DollarSign, Activity } from "lucide-react";
import { KPICard } from "../KPICard";
import { AlertCard } from "../AlertCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MarketCommandCenter = () => {
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Live Price Chart */}
        <Card className="col-span-2 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">NY11 Price Movement</h3>
              <p className="text-sm text-muted-foreground">6-month history + 3-month forecast</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">6M</Button>
              <Button variant="outline" size="sm">1Y</Button>
              <Button variant="outline" size="sm">All</Button>
            </div>
          </div>
          <div className="h-80 rounded-lg bg-muted/30 p-4">
            <div className="flex h-full items-center justify-center text-muted-foreground">
              [Interactive price chart with forecast overlay]
            </div>
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
                <p className="font-medium text-foreground">Brazil Production</p>
                <p className="text-muted-foreground">↑ 8% YoY forecast</p>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <p className="font-medium text-foreground">Vietnam Exports</p>
                <p className="text-muted-foreground">↓ 12% due to drought</p>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <p className="font-medium text-foreground">US Consumption</p>
                <p className="text-muted-foreground">Steady at 23M bags</p>
              </div>
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
            onAction={() => console.log("Review action")}
          />
          <AlertCard
            type="warning"
            title="Contract Expiry"
            description="3 supplier contracts expire in 30 days. Renew or renegotiate."
            actionLabel="Manage"
            onAction={() => console.log("Manage action")}
          />
          <AlertCard
            type="info"
            title="Optimal Buy Window"
            description="AI suggests purchasing 50,000 MT next week based on forecast."
            actionLabel="Schedule"
            onAction={() => console.log("Schedule action")}
          />
        </div>
      </div>
    </div>
  );
};
