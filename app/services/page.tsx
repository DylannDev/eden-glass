import { ServiceCard } from "@/components/home/Services";
import { services } from "@/data/services";
import CallButton from "@/components/ui/call-button";
import type { Metadata } from "next";
import Testimonials from "@/components/home/Testimonials";
import PreFooterCTA from "@/components/home/PreFooterCTA";

export const metadata: Metadata = {
  title: "Nos Services de Vitrage Automobile à Montpellier",
  description:
    "Pare-brise, vitres latérales, lunette arrière, calibrage ADAS : tous nos services de vitrage automobile. Intervention à domicile dans l'Hérault et le Gard.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl ">
              <h1 className="mb-4 text-3xl font-medium text-black md:text-4xl lg:text-5xl">
                Nos services
              </h1>
              <p className="text-base text-gray-dark md:text-lg">
                Des prestations complètes pour tous vos besoins en vitrage
                automobile à Montpellier et ses alentours.
              </p>
            </div>
            <div className="md:hidden">
              <CallButton variant="black" size="sm" />
            </div>
            <div className="hidden md:block">
              <CallButton variant="black" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} bgColor="white" />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <PreFooterCTA />
    </>
  );
}
