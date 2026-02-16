import { z } from "zod/v4";

export const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.email("Email invalide"),
  phone: z
    .string()
    .min(1, "Le téléphone est requis")
    .regex(/^[0-9]{10}$/, "Le numéro doit contenir 10 chiffres"),
  vehicle: z.string().min(1, "Le type de véhicule est requis"),
  vehicleYear: z.string().optional(),
  glass: z.string().min(1, "Sélectionnez la vitre endommagée"),
  insurance: z.string().min(1, "Sélectionnez votre situation d'assurance"),
  location: z.string().min(1, "Sélectionnez le lieu d'intervention"),
  city: z.string().min(1, "La ville est requise"),
  address: z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, {
    error: "Vous devez accepter d'être recontacté",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
