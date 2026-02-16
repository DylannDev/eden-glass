import ArrowButton from "../ui/arrow-button";

export default function CTASection() {
  return (
    <section className="bg-yellow py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="mb-4 text-2xl font-medium text-black md:text-3xl lg:text-4xl">
          Un impact sur votre pare-brise ?
        </h2>
        <p className="mb-8 text-base text-black/70 md:text-lg">
          Ne laissez pas un simple impact se transformer en fissure.
          Contactez-nous pour une intervention rapide à domicile dans
          l&apos;Hérault et le Gard.
        </p>
        <div className="md:hidden">
          <ArrowButton href="/contact" variant="black" size="sm">
            Obtenir mon devis
          </ArrowButton>
        </div>
        <div className="hidden md:block">
          <ArrowButton href="/contact" variant="black">
            Obtenir mon devis
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
