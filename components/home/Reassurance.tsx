import CallButton from "../ui/call-button";
import Image from "next/image";

export default function Reassurance() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-medium text-white md:text-3xl lg:text-4xl">
              Intervention rapide dans l&apos;Hérault et le Gard
            </h2>
            <p className="mb-6 text-base font-medium text-yellow md:text-lg">
              Service professionnel 7j/7 pour votre sécurité
            </p>
            <p className="mb-8 text-base leading-relaxed text-white/70 md:text-lg">
              Nous savons qu&apos;un pare-brise endommagé nécessite une
              intervention urgente. C&apos;est pourquoi Eden Glass se déplace
              directement chez vous ou sur votre lieu de travail, avec du
              matériel professionnel et des techniques éprouvées.
            </p>
            <div className="md:hidden">
              <CallButton size="sm" />
            </div>
            <div className="hidden md:block">
              <CallButton />
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/impact-2.jpg"
              alt="Intervention vitrage automobile sur Tesla"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
