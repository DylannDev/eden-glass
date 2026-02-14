import type { Metadata } from "next";
import PreFooterCTA from "../../components/home/PreFooterCTA";
import Footer from "../../components/home/Footer";

export const metadata: Metadata = {
  title: "Tarifs | EDEN GLASS - Remplacement Pare-Brise Montpellier",
  description:
    "Consultez nos tarifs pour le remplacement et la réparation de pare-brise à Montpellier. Franchise offerte sous conditions.",
};

export default function TarifsPage() {
  return (
    <>
      <section className="bg-black pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h1 className="mb-4 text-4xl font-medium text-white lg:text-5xl">
            Nos tarifs
          </h1>
          <p className="text-lg text-white/70">
            Des tarifs transparents pour tous nos services de vitrage
            automobile.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="text-lg text-black/60">
            La grille tarifaire complète sera bientôt disponible. En attendant,
            contactez-nous pour un devis gratuit et personnalisé.
          </p>
        </div>
      </section>

      <PreFooterCTA />
      <Footer />
    </>
  );
}
