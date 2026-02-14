import { Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { citiesData } from "@/data/services";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Remplacement pare-brise", slug: "remplacement-pare-brise-montpellier" },
  { name: "Réparation d'impact", slug: "reparation-impact-pare-brise-montpellier" },
  { name: "Vitre de voiture", slug: "remplacement-vitre-voiture-montpellier" },
  { name: "Lunette arrière", slug: "remplacement-lunette-arriere-montpellier" },
  { name: "Calibrage ADAS", slug: "calibrage-camera-adas-montpellier" },
  { name: "Prise en charge assurance", slug: "prise-en-charge-assurance-pare-brise" },
];

const citiesHerault = citiesData.filter((city) => city.department === "34");
const citiesGard = citiesData.filter((city) => city.department === "30");

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1 - About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-4 text-xl font-medium text-white">EDEN GLASS</p>
            <p className="text-sm leading-relaxed text-white/60">
              Expert en remplacement et réparation de pare-brise dans
              l&apos;Hérault et le Gard
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="tel:+33749571480"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  07 49 57 14 80
                </a>
              </li>
              <li>
                <a
                  href="mailto:Edenglassparebrise@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  Edenglassparebrise@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4 shrink-0" />
                7j/7 de 9h à 19h
              </li>
            </ul>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </p>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Services
            </p>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Zone d'intervention Hérault */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Hérault (34)
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/remplacement-pare-brise-montpellier"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Montpellier
                </Link>
              </li>
              {citiesHerault.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/services/remplacement-pare-brise-${city.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 - Zone d'intervention Gard */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Gard (30)
            </p>
            <ul className="space-y-2">
              {citiesGard.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/services/remplacement-pare-brise-${city.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
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
          <div className="flex flex-col items-center gap-4 text-center text-xs text-white/40 md:flex-row md:justify-between md:text-left">
            <p>&copy; 2025 EDEN GLASS. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white/60">
                Mentions légales
              </Link>
              <Link href="#" className="hover:text-white/60">
                Politique de confidentialité
              </Link>
              <Link href="#" className="hover:text-white/60">
                CGV
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/30">
            *Franchise offerte jusqu&apos;à 300€ maximum, selon offres en cours
            et contrat d&apos;assurance.
          </p>
        </div>
      </div>
    </footer>
  );
}
