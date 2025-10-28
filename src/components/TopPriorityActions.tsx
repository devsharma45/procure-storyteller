import { AlertCard } from "./AlertCard";
import { toast } from "@/hooks/use-toast";

export const TopPriorityActions = () => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-foreground">Top Priority Actions</h3>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <AlertCard
          type="error"
          title="Price Spike Alert"
          description="NY11 up 5.2% in 24h. Consider accelerating purchases."
          actionLabel="Review Now"
          onAction={() => toast({ title: "Review Initiated", description: "Opening detailed price analysis..." })}
        />
        <AlertCard
          type="warning"
          title="Contract Expiry"
          description="3 supplier contracts expire in 30 days. Renew or renegotiate."
          actionLabel="Manage"
          onAction={() => toast({ title: "Contract Manager", description: "Loading contract management panel..." })}
        />
        <AlertCard
          type="info"
          title="Optimal Buy Window"
          description="AI suggests purchasing 50,000 MT next week based on forecast."
          actionLabel="Schedule"
          onAction={() => toast({ title: "Purchase Planner", description: "Opening purchase scheduling tool..." })}
        />
      </div>
    </div>
  );
};