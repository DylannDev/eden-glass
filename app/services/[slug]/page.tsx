import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getOtherServices,
  getAllServiceSlugs,
} from "@/data/services";
import CallButton from "@/components/ui/call-button";
import ArrowButton from "@/components/ui/arrow-button";
import SectionHeader from "@/components/ui/section-header";
import OtherServices from "@/components/services/OtherServices";
import Image from "next/image";
import Testimonials from "@/components/home/Testimonials";
import PreFooterCTA from "@/components/home/PreFooterCTA";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service non trouvé | Eden Glass",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      images: [service.image],
    },
  };
}

function getStructuredData(
  service: Awaited<ReturnType<typeof getServiceBySlug>>
) {
  if (!service) return null;

  const schemas: object[] = [];

  // LocalBusiness schema for geolocalized pages
  if (service.isGeolocalized && service.city) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Eden Glass – ${service.city}`,
      description: service.metaDescription,
      telephone: "+33749571480",
      email: "contact@edenglass.fr",
      url: `https://www.edenglass.fr/services/${service.slug}`,
      areaServed: {
        "@type": "City",
        name: service.city,
      },
      priceRange: "€€",
      openingHours: "Mo-Su 09:00-19:00",
    });
  }

  // FAQPage schema
  if (service.faq && service.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || !service.richTextContent) {
    notFound();
  }

  const otherServices = getOtherServices(slug);
  const structuredData = getStructuredData(service);

  return (
    <>
      {/* Structured Data */}
      {structuredData &&
        structuredData.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-5">
          <SectionHeader
            as="h1"
            title={service.h1}
            subtitle={service.subtitle}
            className="mb-8"
          />
          <div className="text-center md:hidden">
            <CallButton variant="black" size="sm" />
          </div>
          <div className="hidden text-center md:block">
            <CallButton variant="black" />
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-5">
          <div className="relative aspect-video sm:aspect-21/9 w-full overflow-hidden rounded-xl bg-gray">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-5">
          <article
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: service.richTextContent }}
          />
        </div>
      </section>

      {/* Other Services */}
      {otherServices.length > 0 && <OtherServices currentSlug={slug} />}

      {/* Testimonial Section */}
      <Testimonials />
      <PreFooterCTA />
    </>
  );
}
