import type { Metadata } from "next";
import SectionHeader from "@/components/ui/section-header";
import BlogFilters from "@/components/blog/BlogFilters";

export const metadata: Metadata = {
  title: "Blog - Conseils Pare-Brise et Vitrage Automobile",
  description:
    "Conseils d'experts sur le pare-brise et le vitrage automobile : réparation d'impact, assurance bris de glace, entretien, calibrage ADAS et actualités locales Montpellier.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-28 lg:pt-40">
        <div className="max-w-xl mx-auto px-5">
          <SectionHeader
            as="h1"
            title="Actualités et conseils d'experts Eden Glass"
            subtitle="Conseils et actualités sur le vitrage automobile, l'entretien de votre pare-brise et les technologies ADAS."
          />
        </div>
      </section>

      <section className="bg-white py-10 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5">
          <BlogFilters />
        </div>
      </section>
    </>
  );
}
