import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FloatingCard({ children, className, delay = 0 }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "glass-effect rounded-2xl p-6 text-white animate-float",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
