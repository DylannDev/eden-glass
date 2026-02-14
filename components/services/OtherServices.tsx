import { getOtherServices } from "@/data/services";
import SectionHeader from "@/components/ui/section-header";
import { ServiceCard } from "../home/Services";

interface OtherServicesProps {
  currentSlug: string;
}

export default function OtherServices({ currentSlug }: OtherServicesProps) {
  const otherServices = getOtherServices(currentSlug);

  return (
    <section className="bg-gray py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5">
        <SectionHeader
          title="Nos autres services"
          subtitle="Découvrez l'ensemble de nos prestations en vitrage automobile"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service) => (
            <ServiceCard key={service.slug} {...service} bgColor="white" />
          ))}
        </div>
      </div>
    </section>
  );
}
