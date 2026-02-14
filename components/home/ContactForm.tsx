"use client";

import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const glassOptions = [
  "Pare-brise avant",
  "Lunette arrière",
  "Vitre latérale avant gauche",
  "Vitre latérale avant droite",
  "Vitre latérale arrière gauche",
  "Vitre latérale arrière droite",
  "Autre vitrage",
];

const insuranceOptions = [
  "Oui, avec bris de glace",
  "Oui, sans bris de glace",
  "Non assuré",
];

const locationOptions = ["À domicile", "Sur mon lieu de travail", "Autre lieu"];

function SelectField({
  label,
  placeholder,
  value,
  onValueChange,
  options,
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onValueChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <Select.Root
        value={value}
        onValueChange={onValueChange}
        required={required}
      >
        <Select.Trigger className="flex w-full items-center justify-between rounded-lg border border-black/15 px-4 py-3 text-base text-black outline-none transition-colors data-placeholder:text-black/40 focus:border-yellow">
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <ChevronDown className="h-4 w-4 text-black/40" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-lg">
            <Select.Viewport className="p-1">
              {options.map((option) => (
                <Select.Item
                  key={option}
                  value={option}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-black outline-none data-highlighted:bg-yellow/10"
                >
                  <Select.ItemIndicator>
                    <Check className="h-4 w-4 text-yellow" />
                  </Select.ItemIndicator>
                  <Select.ItemText>{option}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

export default function ContactForm() {
  const [glass, setGlass] = useState("");
  const [insurance, setInsurance] = useState("");
  const [location, setLocation] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Form submission will be implemented with Resend later
      }}
      className="space-y-5"
    >
      {/* Row 1: Nom + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nom complet *</Label>
          <Input id="name" name="name" type="text" required />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>

      {/* Row 2: Téléphone + Véhicule */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Téléphone *</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
        <div>
          <Label htmlFor="vehicle">Type de véhicule *</Label>
          <Input
            id="vehicle"
            name="vehicle"
            type="text"
            required
            placeholder="ex: Renault Clio 2018"
          />
        </div>
      </div>

      {/* Row 3: Vitre + Assurance */}
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Vitre endommagée *"
          placeholder="Sélectionnez la vitre"
          value={glass}
          onValueChange={setGlass}
          options={glassOptions}
          required
        />
        <SelectField
          label="Êtes-vous assuré ? *"
          placeholder="Sélectionnez votre situation"
          value={insurance}
          onValueChange={setInsurance}
          options={insuranceOptions}
          required
        />
      </div>

      {/* Row 4: Lieu + Ville */}
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Lieu d'intervention souhaité *"
          placeholder="Sélectionnez le lieu"
          value={location}
          onValueChange={setLocation}
          options={locationOptions}
          required
        />
        <div>
          <Label htmlFor="city">Ville / Code postal *</Label>
          <Input
            id="city"
            name="city"
            type="text"
            required
            placeholder="ex: Montpellier, 34000"
          />
        </div>
      </div>

      {/* Row 5: Message (full width) */}
      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Décrivez votre problème ou précisez vos disponibilités"
          className="w-full rounded-lg border border-black/15 px-4 py-3 text-base text-black outline-none transition-colors placeholder:text-black/40 focus:border-yellow"
        />
      </div>

      {/* Consent + Submit */}
      <label className="flex items-start gap-3 text-sm text-black/70">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-yellow"
        />
        J&apos;accepte d&apos;être recontacté par EDEN GLASS *
      </label>

      <Button type="submit" variant="black" className="group w-fit pl-6 pr-3">
        Envoyer ma demande
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow transition-transform duration-300 group-hover:-rotate-45">
          <ArrowRight className="size-5! text-black" />
        </span>
      </Button>
    </form>
  );
}
