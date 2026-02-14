import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOutgoing } from "lucide-react";
import { PHONE_NUMBER } from "@/data";

export interface CallButtonProps {
  variant?: "black" | "yellow";
  size?: "default" | "sm";
  className?: string;
}

export default function CallButton({
  variant = "yellow",
  size = "default",
  className,
}: CallButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      asChild
      className={cn(
        "group",
        size === "sm" ? "pl-5 pr-2" : "pl-6 pr-3",
        className
      )}
    >
      <a href={PHONE_NUMBER}>
        07 49 57 14 80
        <span
          className={cn(
            "relative flex h-10 w-10 items-center justify-center rounded-full",
            variant === "yellow" && "bg-black",
            variant === "black" && "bg-yellow"
          )}
        >
          {/* Icône par défaut */}
          <Phone
            className={cn(
              "absolute size-4.5 transition-all duration-500 group-hover:opacity-0 group-hover:scale-70",
              variant === "yellow" && "text-white",
              variant === "black" && "text-black"
            )}
          />

          {/* Icône au hover */}
          <PhoneOutgoing
            className={cn(
              "absolute size-4.5 opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100",
              variant === "yellow" && "text-white",
              variant === "black" && "text-black"
            )}
          />
        </span>
      </a>
    </Button>
  );
}
