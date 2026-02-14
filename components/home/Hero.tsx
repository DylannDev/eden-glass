/* eslint-disable react/no-unescaped-entities */
import { points } from "@/data";
import CallButton from "../ui/call-button";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-black">
      {/* Background image */}
      <Image
        src="/pare-brise-4.jpg"
        alt="Remplacement pare-brise automobile"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/70 to-black" />

      <div className="relative text-center z-10 mx-auto w-full max-w-[1320px] px-5 py-24">
        <div className="max-w-4xl mx-auto flex flex-col justify-center">
          <h1 className="mb-6 text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Expert en{" "}
            <span className="text-yellow">
              Vitrage Automobile & Pare-Brise{" "}
            </span>
            à Montpellier
          </h1>
          <h2 className="text-xl text-white mb-1">
            Réparation d'impact, remplacement pare-brise et vitres sur
            Montpellier et alentours.
          </h2>
          <ul className="flex flex-wrap justify-center items-center gap-2 mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <div className="bg-yellow rounded-full p-0.5">
                  <Check
                    strokeWidth="2.75"
                    className="size-2 shrink-0 text-black"
                  />
                </div>
                <span className="text-lg text-white">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CallButton variant="yellow" />
          </div>
        </div>
      </div>
    </section>
  );
}
