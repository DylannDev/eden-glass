import { Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { citiesData } from "@/data/services";
import { navItems } from "@/data/navigation";

const services = [
  {
    name: "Remplacement pare-brise",
    slug: "remplacement-pare-brise-montpellier",
  },
  {
    name: "Réparation d'impact",
    slug: "reparation-impact-pare-brise-montpellier",
  },
  { name: "Vitre de voiture", slug: "remplacement-vitre-voiture-montpellier" },
  { name: "Lunette arrière", slug: "remplacement-lunette-arriere-montpellier" },
  { name: "Calibrage ADAS", slug: "calibrage-camera-adas-montpellier" },
  {
    name: "Prise en charge assurance",
    slug: "prise-en-charge-assurance-pare-brise",
  },
];

const citiesHerault = citiesData.filter((city) => city.department === "34");
const citiesGard = citiesData.filter((city) => city.department === "30");

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Col 1 - About */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:col-span-2">
            <Link href="/">
              <Image
                src="/logo-2.svg"
                alt="Eden Glass"
                width={933}
                height={218}
                className="mb-4 h-22 w-auto"
              />
            </Link>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="tel:+33749571480"
                  className="flex items-center gap-2 text-sm text-white transition-colors hover:text-yellow"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  07 49 57 14 80
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@edenglass.fr"
                  className="flex items-center gap-2 text-sm text-white transition-colors hover:text-yellow"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  contact@edenglass.fr
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <Clock className="h-4 w-4 shrink-0" />
                7j/7 de 9h à 19h
              </li>
            </ul>
          </div>

          {/* Col 2 - Navigation */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left pt-9">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-sm text-white/60 transition-colors hover:text-yellow"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left pt-9">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </p>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-yellow"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Zone d'intervention Hérault */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left pt-9">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Hérault (34)
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/remplacement-pare-brise-montpellier"
                  className="text-sm text-white/60 transition-colors hover:text-yellow"
                >
                  Montpellier
                </Link>
              </li>
              {citiesHerault.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/services/remplacement-pare-brise-${city.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-yellow"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 - Zone d'intervention Gard */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left pt-9">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Gard (30)
            </p>
            <ul className="space-y-2">
              {citiesGard.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/services/remplacement-pare-brise-${city.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-yellow"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-white md:flex-row md:justify-between md:text-left">
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="hover:text-yellow">
                Mentions légales
              </Link>
              <Link href="/cgv" className="hover:text-yellow">
                CGV
              </Link>
            </div>
            <p>
              © {new Date().getFullYear()} Eden Glass. Tous droits réservés.
            </p>
          </div>
          <p className="mt-6 text-center md:text-right text-sm text-white">
            Réalisé par{" "}
            <a
              href="https://vizionweb.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow transition-colors hover:text-white hover:underline underline-offset-4"
            >
              Vizion Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
