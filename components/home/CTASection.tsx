import ArrowButton from "../ui/arrow-button";

export default function CTASection() {
  return (
    <section className="bg-yellow py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="mb-4 text-3xl font-medium text-black lg:text-4xl">
          Un impact sur votre pare-brise ?
        </h2>
        <p className="mb-8 text-lg text-black/70">
          Ne laissez pas un simple impact se transformer en fissure.
          Contactez-nous pour une intervention rapide à domicile dans
          l&apos;Hérault et le Gard.
        </p>
        <ArrowButton href="/contact" variant="black">
          Obtenir mon devis
        </ArrowButton>
      </div>
    </section>
  );
}
