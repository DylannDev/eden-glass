"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/ui/section-header";

const faqs = [
  {
    question: "Combien de temps dure un remplacement de pare-brise ?",
    answer:
      "Un remplacement complet prend en moyenne 2 heures. Vous pouvez récupérer votre véhicule le jour même, mais nous recommandons d'attendre 1h avant de prendre la route pour un séchage optimal de la colle.",
  },
  {
    question: "La franchise est-elle vraiment offerte ?",
    answer:
      "Oui ! Nous offrons la franchise jusqu'à 300€ maximum, selon les offres en cours et votre contrat d'assurance. Contactez-nous pour vérifier votre éligibilité.",
  },
  {
    question: "Acceptez-vous tous les assureurs ?",
    answer:
      "Oui, nous travaillons avec l'ensemble des compagnies d'assurance. Nous gérons directement votre dossier en tiers-payant, vous n'avez pas d'avance de frais. Nous acceptons également les clients non assurés.",
  },
  {
    question: "Le calibrage ADAS est-il inclus ?",
    answer:
      "Oui, le recalibrage des systèmes d'aide à la conduite (caméra, capteurs) est systématiquement inclus dans nos prestations de remplacement de pare-brise pour les véhicules équipés.",
  },
  {
    question: "Quels types de véhicules prenez-vous en charge ?",
    answer:
      "Nous intervenons sur tous types de véhicules : voitures particulières, utilitaires, camions et même engins agricoles. Contactez-nous avec les références de votre véhicule pour un devis personnalisé.",
  },
  {
    question: "Intervenez-vous à domicile ?",
    answer:
      "Oui, nous proposons un service d'intervention mobile dans tout l'Hérault (34) et le Gard (30). Nous pouvons intervenir à votre domicile, sur votre lieu de travail ou à l'endroit de votre choix.",
  },
  {
    question: "Quelles sont vos zones d'intervention ?",
    answer:
      "Nous intervenons dans tout l'Hérault (Montpellier, Lattes, Sète, Béziers...) et le Gard (Nîmes, Alès, Lunel...). Contactez-nous pour confirmer que nous couvrons votre secteur.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeader
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir sur nos prestations"
        />

        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-2xl font-medium text-black">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base leading-relaxed text-gray-dark">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
