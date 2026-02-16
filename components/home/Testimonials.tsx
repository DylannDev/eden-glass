"use client";

import { citiesData } from "@/data/services";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = citiesData.map((city) => ({
  ...city.testimonial,
  city: city.name,
}));

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <p className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-black">
          Témoignages
        </p>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="px-4 font-medium">
                  <h2 className="mb-8 text-center text-xl text-black sm:text-2xl lg:text-3xl">
                    &ldquo;{testimonial.text}&rdquo;
                  </h2>
                  <p className="text-center text-lg tracking-tighter text-black">
                    {testimonial.name},{" "}
                    <span className="text-gray-dark">
                      {testimonial.vehicle}
                    </span>
                  </p>
                  <p className="mt-2 text-center text-sm text-gray-dark">
                    {testimonial.city}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-0 sm:mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious className="static translate-y-0 size-10 sm:size-12 p-0 cursor-pointer" />
            <CarouselNext className="static translate-y-0 size-10 sm:size-12 p-0 cursor-pointer" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
