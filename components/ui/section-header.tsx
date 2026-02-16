import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  as: Tag = "h2",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <Tag className="mb-4 text-3xl font-medium text-black md:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-base text-black/60 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
