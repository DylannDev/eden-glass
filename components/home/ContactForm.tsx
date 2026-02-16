"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FieldError from "@/components/ui/field-error";
import SelectField from "@/components/home/SelectField";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import {
  glassOptions,
  insuranceOptions,
  locationOptions,
} from "@/data/contact-options";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

export default function ContactForm() {
  const [serverState, setServerState] = useState<ContactFormState>(null);
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    // defaultValues: {
    //   name: "",
    //   email: "",
    //   phone: "",
    //   vehicle: "",
    //   vehicleYear: "",
    //   glass: "",
    //   insurance: "",
    //   location: "",
    //   city: "",
    //   address: "",
    //   message: "",
    //   consent: undefined,
    // },
    defaultValues: {
      name: "Jean Dupont",
      email: "dxavero@gmail.com",
      phone: "0749571480",
      vehicle: "Renault Clio",
      vehicleYear: "2019",
      glass: "Pare-brise avant",
      insurance: "Oui, avec bris de glace",
      location: "À domicile",
      city: "Montpellier, 34000",
      address: "12 rue de la Paix",
      message:
        "Impact sur le pare-brise côté conducteur, disponible en semaine le matin.",
      consent: undefined,
    },
  });

  const glass = watch("glass");
  const insurance = watch("insurance");
  const location = watch("location");
  const consent = watch("consent");

  const onSubmit = async (data: ContactFormData) => {
    setIsPending(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.set(key, String(value));
      }
    });
    const result = await sendContactEmail(null, formData);
    setServerState(result);
    setIsPending(false);
  };

  if (serverState?.success) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl bg-yellow p-8 text-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black">
          <CheckIcon className="h-5 w-5 text-white" />
        </div>
        <p className="text-lg font-medium text-black">{serverState.message}</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-8 text-3xl font-medium text-black lg:text-5xl">
        Demandez votre devis gratuit
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Server error */}
        {serverState?.success === false && (
          <div className="rounded-lg bg-red/10 px-4 py-3 text-sm text-red">
            {serverState.message}
          </div>
        )}

        {/* Row 1: Nom + Email */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Jean Dupont"
              {...register("name")}
              className={errors.name ? "border-red" : ""}
            />
            <FieldError message={errors.name?.message} />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="jeandupont@gmail.com"
              {...register("email")}
              className={errors.email ? "border-red" : ""}
            />
            <FieldError message={errors.email?.message} />
          </div>
        </div>

        {/* Row 2: Téléphone + Véhicule */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="07 49 57 14 80"
              {...register("phone")}
              className={errors.phone ? "border-red" : ""}
            />
            <FieldError message={errors.phone?.message} />
          </div>
          <div>
            <Label htmlFor="vehicle">Marque du véhicule *</Label>
            <Input
              id="vehicle"
              type="text"
              placeholder="Renault Clio"
              {...register("vehicle")}
              className={errors.vehicle ? "border-red" : ""}
            />
            <FieldError message={errors.vehicle?.message} />
          </div>
        </div>

        {/* Row 3: Année véhicule + Vitre */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="vehicleYear">Année du véhicule</Label>
            <Input
              id="vehicleYear"
              type="text"
              placeholder="2018"
              {...register("vehicleYear")}
            />
          </div>
          <SelectField
            label="Vitre endommagée *"
            placeholder="Sélectionnez la vitre"
            value={glass}
            onValueChange={(v) =>
              setValue("glass", v, { shouldValidate: true })
            }
            options={glassOptions}
            error={errors.glass?.message}
          />
        </div>

        {/* Row 4: Assurance + Lieu */}
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            label="Êtes-vous assuré ? *"
            placeholder="Sélectionnez votre situation"
            value={insurance}
            onValueChange={(v) =>
              setValue("insurance", v, { shouldValidate: true })
            }
            options={insuranceOptions}
            error={errors.insurance?.message}
          />
          <SelectField
            label="Lieu d'intervention souhaité *"
            placeholder="Sélectionnez le lieu"
            value={location}
            onValueChange={(v) =>
              setValue("location", v, { shouldValidate: true })
            }
            options={locationOptions}
            error={errors.location?.message}
          />
        </div>

        {/* Row 5: Ville + Adresse */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="address">Adresse</Label>
            <Input
              id="address"
              type="text"
              placeholder="12 rue de la Paix"
              {...register("address")}
            />
          </div>
          <div>
            <Label htmlFor="city">Ville / Code postal *</Label>
            <Input
              id="city"
              type="text"
              placeholder="Montpellier, 34000"
              {...register("city")}
              className={errors.city ? "border-red" : ""}
            />
            <FieldError message={errors.city?.message} />
          </div>
        </div>

        {/* Row 6: Message (full width) */}
        <div>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            rows={4}
            placeholder="Décrivez votre problème ou précisez vos disponibilités"
            className="w-full rounded-2xl border border-black/15 px-4 py-3 text-base text-black outline-none transition-colors placeholder:text-black/40 focus:border-yellow"
            {...register("message")}
          />
        </div>

        {/* Consent + Submit */}
        <div>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-black">
            <input
              type="checkbox"
              {...register("consent")}
              className="peer sr-only"
            />
            <span
              className={`mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full border transition-colors ${consent ? "border-black bg-black" : "border-black/30 bg-transparent"}`}
            >
              {consent && <CheckIcon className="h-3.5 w-3.5 text-yellow" />}
            </span>
            J&apos;accepte d&apos;être recontacté par Eden Glass
          </label>
          <FieldError message={errors.consent?.message} />
        </div>

        <Button
          type="submit"
          variant="black"
          className="group w-fit pl-6 pr-3"
          disabled={isPending}
        >
          {isPending ? "Envoi en cours..." : "Envoyer ma demande"}
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow transition-transform duration-300 group-hover:-rotate-45">
            {isPending ? (
              <Loader2 className="size-5 animate-spin text-black" />
            ) : (
              <ArrowRight className="size-5! text-black" />
            )}
          </span>
        </Button>
      </form>
    </>
  );
}
