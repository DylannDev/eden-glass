import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ArrowButtonProps {
  href?: string;
  children?: React.ReactNode;
  variant?: "black" | "yellow";
  size?: "sm" | "default";
  className?: string;
}

export default function ArrowButton({
  href = "/contact",
  children = "Obtenir mon devis",
  variant = "black",
  size = "default",
  className,
}: ArrowButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      asChild
      className={cn("group pl-6 pr-3", className)}
    >
      <Link href={href}>
        {children}
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:-rotate-45",
            variant === "black" && "bg-yellow",
            variant === "yellow" && "bg-black"
          )}
        >
          <ArrowRight
            className={cn(
              "size-5!",
              variant === "black" && "text-black",
              variant === "yellow" && "text-white"
            )}
          />
        </span>
      </Link>
    </Button>
  );
}
