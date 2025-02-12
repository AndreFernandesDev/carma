import { cn } from "@/lib/utils";
import React from "react";

type BadgeProps = {
  icon: React.ReactNode;
  label: React.ReactNode;
  className?: string;
};

function Badge(props: BadgeProps) {
  const { icon, label, className } = props;

  return (
    <div
      className={cn(
        "bg-secondary flex items-center gap-4 py-3 px-6 md:px-8 text-secondary-foreground rounded-full",
        className
      )}
    >
      {icon}
      {label}
    </div>
  );
}

export default Badge;
