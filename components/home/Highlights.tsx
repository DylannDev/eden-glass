import { Clock, CalendarDays, BadgeEuro, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Highlight {
  icon: LucideIcon;
  value: string;
  label: string;
}

const highlights: Highlight[] = [
  {
    icon: Clock,
    value: "2h",
    label: "Temps moyen d'intervention pour un remplacement complet",
  },
  {
    icon: CalendarDays,
    value: "7j/7",
    label: "Service disponible tous les jours de 9h à 19h",
  },
  {
    icon: BadgeEuro,
    value: "300€",
    label: "Franchise offerte jusqu'à 300€ maximum*",
  },
  {
    icon: Wallet,
    value: "0€",
    label: "Pas d'avance de frais avec votre assurance",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.value}
              className="flex flex-col rounded-xl bg-gray p-8 transition-all duration-500 hover:bg-yellow"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <item.icon className="h-5 w-5 text-white" />
              </div>

              <p className="mb-2 text-[42px] sm:text-[50px] font-medium text-black">
                {item.value}
              </p>
              <p className="text-base text-gray-dark">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
