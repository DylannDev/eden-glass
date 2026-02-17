/* eslint-disable react/no-unescaped-entities */
import { Check } from "lucide-react";
import ArrowButton from "@/components/ui/arrow-button";
import { points } from "@/data";
import Image from "next/image";

export default function PreFooterCTA() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="bg-yellow rounded-xl p-4">
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {/* Left - Yellow card */}
            <div className="flex flex-col text-[28px] sm:text-4xl lg:text-5xl font-medium justify-between p-3 lg:p-6">
              <div className="text-center sm:text-left leading-8 sm:leading-12">
                <p className="mb-1 text-gray-dark">Un impact ? Une fissure ?</p>
                <h3 className="mb-8 text-black">
                  Contactez Eden Glass, on s'occupe de tout.
                </h3>

                <div className="md:hidden">
                  <ArrowButton
                    href="/contact"
                    variant="black"
                    size="sm"
                    className="w-fit"
                  >
                    Obtenir mon devis
                  </ArrowButton>
                </div>
                <div className="hidden md:block">
                  <ArrowButton
                    href="/contact"
                    variant="black"
                    className="w-fit"
                  >
                    Obtenir mon devis
                  </ArrowButton>
                </div>
              </div>

              <ul className="mt-10 space-y-3 flex flex-col items-center sm:items-start ">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <div className="bg-black rounded-full p-1">
                      <Check className="size-3 shrink-0 text-yellow" />
                    </div>
                    <span className="text-sm text-black">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative max-h-[500px] w-full aspect-5/4 md:aspect-video lg:aspect-5/4 overflow-hidden rounded-xl lg:min-h-0">
              <Image
                src="/tesla.jpg"
                alt="Impact sur pare-brise nécessitant une réparation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
