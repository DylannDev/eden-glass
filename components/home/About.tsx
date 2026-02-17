import { Check } from "lucide-react";
import Image from "next/image";

const points = [
  "Intervention à domicile ou sur lieu de travail",
  "Tous véhicules : voitures, camions, engins agricoles",
  "franchise offerte jusqu'à 300€",
  "Pas d'avance de frais avec votre assurance",
  "Disponible 7j/7 de 9h à 19h",
];

export default function About() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/pare-brise.jpg"
              alt="Technicien Eden Glass remplaçant un pare-brise"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-medium text-black md:text-3xl lg:text-4xl">
              Eden Glass, Expert en Vitrage Automobile
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-dark md:text-lg">
              Spécialiste du vitrage automobile, nous intervenons rapidement
              dans Montpellier et ses alentours. Nous nous déplaçons directement
              chez vous avec du matériel professionnel et des verres homologués
              pour garantir votre sécurité.
            </p>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black">
                    <Check className="h-3 w-3 text-yellow" />
                  </span>
                  <span className="text-gray-dark">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
