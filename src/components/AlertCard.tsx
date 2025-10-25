import { AlertCircle, CheckCircle, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AlertCardProps {
  type: "error" | "warning" | "info";
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const AlertCard = ({ type, title, description, actionLabel, onAction }: AlertCardProps) => {
  const config = {
    error: {
      icon: AlertCircle,
      bgColor: "bg-destructive/10",
      iconColor: "text-destructive",
      borderColor: "border-destructive/20",
    },
    warning: {
      icon: AlertCircle,
      bgColor: "bg-warning/10",
      iconColor: "text-warning",
      borderColor: "border-warning/20",
    },
    info: {
      icon: Info,
      bgColor: "bg-accent/10",
      iconColor: "text-accent",
      borderColor: "border-accent/20",
    },
  }[type];

  const Icon = config.icon;

  return (
    <Card className={`border-l-4 ${config.borderColor} p-4 ${config.bgColor}`}>
      <div className="flex items-start gap-3">
        <Icon className={`h-5 w-5 ${config.iconColor} mt-0.5 flex-shrink-0`} />
        <div className="flex-1 space-y-1">
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {actionLabel && onAction && (
          <Button size="sm" variant="outline" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    </Card>
  );
};
