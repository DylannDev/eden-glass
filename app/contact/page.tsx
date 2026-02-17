import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "Devis Gratuit Pare-Brise Montpellier & Nîmes",
  description:
    "Demandez votre devis gratuit pour le remplacement ou la réparation de pare-brise. Intervention à domicile dans l'Hérault et le Gard, 7j/7 de 9h à 19h.",
  alternates: { canonical: "/contact" },
};

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <div className="flex flex-col items-start gap-12 rounded-xl bg-yellow p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <h3 className="mb-1 text-2xl font-medium text-black md:text-3xl lg:text-4xl">
          {title}
        </h3>
        <div className="text-base font-normal text-gray-dark md:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero: Image + Form */}
      <section className="bg-white pt-28 lg:pt-40">
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="flex flex-col-reverse lg:flex-row lg:items-stretch lg:gap-10">
            {/* Image */}
            <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-2xl lg:mt-0 lg:aspect-auto lg:w-full lg:max-w-[50%]">
              <Image
                src="/vitre.jpg"
                alt="Remplacement de pare-brise Eden Glass"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Form */}
            <div className="flex w-full flex-col justify-center lg:w-1/2 lg:shrink-0 lg:min-h-[890px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={Phone} title="Téléphone">
              <a
                href="tel:+33749571480"
                className="hover:underline underline-offset-4"
              >
                07 49 57 14 80
              </a>
            </InfoCard>

            <InfoCard icon={Mail} title="Email">
              <a
                href="mailto:contact@edenglass.fr"
                className="hover:underline underline-offset-4"
              >
                contact@edenglass.fr
              </a>
            </InfoCard>

            <InfoCard icon={Clock} title="Horaires">
              <p>7j/7 de 9h à 19h</p>
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  );
}
