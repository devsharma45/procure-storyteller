import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Download } from "lucide-react";

export const WhatIfCommand = () => {
  const scenarios = [
    { id: 1, name: "Brazil Drought Scenario", impact: "High", status: "active" },
    { id: 2, name: "Export Ban - Vietnam", impact: "Critical", status: "active" },
    { id: 3, name: "USD Strengthening", impact: "Medium", status: "inactive" },
    { id: 4, name: "Freight Cost Spike", impact: "Low", status: "inactive" },
  ];

  return (
    <div className="space-y-6">
      {/* Scenario Builder */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Scenario Library</h3>
          <div className="space-y-2">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                className="w-full rounded-lg border bg-card p-3 text-left transition-colors hover:bg-accent/10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{scenario.name}</span>
                  {scenario.status === "active" && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                      Active
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Impact: {scenario.impact}</p>
              </button>
            ))}
          </div>
          <Button className="mt-4 w-full" variant="outline">
            + Create Custom Scenario
          </Button>
        </Card>

        <Card className="col-span-2 p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Impact Visualization</h3>
          <div className="mb-6 h-80 rounded-lg bg-muted/30 p-4">
            <div className="flex h-full items-center justify-center text-muted-foreground">
              [Scenario impact chart - price, cost, risk exposure]
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm text-muted-foreground">Procurement Cost Impact</p>
              <p className="mt-2 text-2xl font-bold text-destructive">+$4.2M</p>
              <p className="mt-1 text-xs text-muted-foreground">+15.3% vs baseline</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm text-muted-foreground">Risk Exposure</p>
              <p className="mt-2 text-2xl font-bold text-warning">High</p>
              <p className="mt-1 text-xs text-muted-foreground">Score: 7.8/10</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm text-muted-foreground">Timeline</p>
              <p className="mt-2 text-2xl font-bold text-foreground">4-6M</p>
              <p className="mt-1 text-xs text-muted-foreground">Expected duration</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recommended Mitigations */}
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-foreground">Recommended Mitigations</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 rounded-lg border bg-accent/5 p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
            <div className="flex-1">
              <p className="font-semibold text-foreground">Accelerate Brazil Purchases</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Lock in 75,000 MT at current prices before drought impact materializes
              </p>
            </div>
            <Button size="sm">Execute</Button>
          </div>
          <div className="flex items-start gap-4 rounded-lg border bg-accent/5 p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
            <div className="flex-1">
              <p className="font-semibold text-foreground">Diversify to Colombia</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Increase Colombian sourcing from 15% to 30% to reduce Brazil dependency
              </p>
            </div>
            <Button size="sm">Plan</Button>
          </div>
          <div className="flex items-start gap-4 rounded-lg border bg-warning/5 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-warning" />
            <div className="flex-1">
              <p className="font-semibold text-foreground">Activate Hedging Strategy</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Consider futures contracts to protect against 10%+ price increases
              </p>
            </div>
            <Button size="sm" variant="outline">Review</Button>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Scenario analysis last updated: 2 hours ago</p>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
          <Button>Schedule Alert</Button>
        </div>
      </div>
    </div>
  );
};
