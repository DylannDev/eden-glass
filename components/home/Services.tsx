import Link from "next/link";
import SectionHeader from "@/components/ui/section-header";
import { ArrowRight } from "lucide-react";
import { services, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps extends Service {
  bgColor?: "gray" | "white";
}

export function ServiceCard({
  slug,
  icon: Icon,
  shortTitle,
  description,
  bgColor = "gray",
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className={cn(
        "group flex flex-col rounded-xl p-8 transition-all duration-500 hover:bg-yellow h-full",
        bgColor === "gray" ? "bg-gray" : "bg-white"
      )}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-black">
        <Icon className="h-5 w-5 text-white" />
      </div>

      <h3 className="mb-2 text-2xl sm:text-[28px] font-medium text-black">
        {shortTitle}
      </h3>
      <p className="mb-6 flex-1 text-base text-gray-dark">{description}</p>

      <div className="flex items-center gap-2">
        <span className="text-base font-medium text-black">En savoir plus</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow transition-transform group-hover:-rotate-45 group-hover:bg-black">
          <ArrowRight className="h-5 w-5 text-black group-hover:text-white" />
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section className="bg-gray py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionHeader
          title="Nos services"
          subtitle="Des prestations complètes pour tous vos besoins en vitrage automobile"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} bgColor="white" />
          ))}
        </div>
      </div>
    </section>
  );
}
