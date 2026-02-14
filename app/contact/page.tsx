import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "Contact | EDEN GLASS - Devis Gratuit Pare-Brise Montpellier Nîmes",
  description:
    "Contactez EDEN GLASS pour un devis gratuit. Remplacement et réparation de pare-brise dans l'Hérault et le Gard. ☎️ 07 49 57 14 80",
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
        <h3 className="mb-1 text-4xl font-medium text-black">{title}</h3>
        <div className="text-lg font-normal text-gray-dark">{children}</div>
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
                alt="Remplacement de pare-brise EDEN GLASS"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Form */}
            <div className="flex w-full flex-col justify-center lg:w-1/2 lg:shrink-0">
              <h1 className="mb-8 text-3xl font-medium text-black lg:text-5xl">
                Demandez votre devis gratuit
              </h1>
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
                href="mailto:Edenglassparebrise@gmail.com"
                className="hover:underline underline-offset-4"
              >
                Edenglassparebrise@gmail.com
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
