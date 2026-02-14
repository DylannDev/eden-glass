# CONTEXT.md - EDEN GLASS Website

## Project Overview

Site vitrine pour EDEN GLASS, entreprise de remplacement et réparation de pare-brise basée à Montpellier.
Template inspiré de : https://towmate-template.framer.website/

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Deployment**: Vercel

## Design System

### Colors

```css
--color-black: #0A100D
--color-yellow: #FDF567
--color-red: #EA1E05
--color-white: #FFFFFF
```

### Typography

- **Font Family**: Plus Jakarta Sans (Google Fonts)
- **Weights needed**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Brand Guidelines

- Utiliser le jaune (#FDF567) pour les CTA principaux et éléments d'emphase
- Le rouge (#EA1E05) pour les accents et urgences
- Le noir (#0A100D) pour les textes et fonds sombres
- Design moderne, professionnel, rassurant

## Informations de Contact

- **Téléphone**: 07 49 57 14 80
- **Email**: Edenglassparebrise@gmail.com
- **Horaires**: 9h-19h, 7j/7

## Zone d'Intervention

### Départements couverts

- **Hérault (34)** : Montpellier et agglomération
- **Gard (30)** : Nîmes et communes environnantes

### Communes principales (SEO)

**Hérault (34)** :
Montpellier, Lattes, Saint-Jean-de-Védas, Pérols, Juvignac, Castelnau-le-Lez, Le Crès, Jacou, Clapiers, Lavérune, Grabels, Pignan, Fabrègues, Mauguio, Palavas-les-Flots, Carnon, Frontignan, Sète, Béziers, Agde

**Gard (30)** :
Nîmes, Alès, Beaucaire, Vauvert, Saint-Gilles, Lunel, Aigues-Mortes, Le Grau-du-Roi, Sommières, Uzès, Bagnols-sur-Cèze, Pont-Saint-Esprit

## Points Forts / Arguments Commerciaux

1. **Intervention rapide** à domicile ou sur lieu de travail
2. **Pas d'avance de frais** (prise en charge assurance directe)
3. **Franchise offerte** jusqu'à 300€ maximum
4. **Tous types de véhicules** : voitures, camions, engins agricoles
5. **Clients assurés et non assurés** acceptés
6. **Disponibilité 7j/7** de 9h à 19h

## Conditions Franchise Offerte

> **Franchise offerte jusqu'à 300€ maximum**, selon offres en cours et contrat d'assurance. Contactez-nous pour vérifier votre éligibilité.

## Site Structure

### Pages

1. **Accueil** (`/`) - Homepage complète
2. **Services** (`/services`) - Détail des prestations
3. **Tarifs** (`/tarifs`) - Grille tarifaire
4. **Contact** (`/contact`) - Formulaire de contact
5. **Blog** (`/blog`) - Articles et conseils

### Homepage Sections (ordre exact)

#### 1. Hero Section

- **Titre H1**: "Remplacement de Pare-Brise à Montpellier et dans le Gard"
- **Sous-titre**: "Intervention rapide à domicile • Franchise offerte jusqu'à 300€\* • Pas d'avance de frais"
- **CTA principal**: "Obtenir mon devis" (jaune)
- **CTA secondaire**: "Nous appeler" (outline blanc)
- **Background**: Image de pare-brise en cours de remplacement ou véhicule avec pare-brise neuf (utiliser des placeholders pour l'instant)
- **Téléphone visible**: 07 49 57 14 80

#### 2. À Propos Section

- **Titre H2**: "EDEN GLASS, Expert en Vitrage Automobile"
- **Description**:
  "Spécialistes du remplacement et de la réparation de pare-brise, nous intervenons rapidement dans tout l'Hérault et le Gard. Notre équipe de techniciens certifiés se déplace à votre domicile ou sur votre lieu de travail, et utilise uniquement des verres homologués pour garantir votre sécurité."
- **Sous-points**:
  - ✓ Intervention à domicile ou sur lieu de travail
  - ✓ Tous véhicules : voitures, camions, engins agricoles
  - ✓ Franchise offerte jusqu'à 300€\*
  - ✓ Pas d'avance de frais avec votre assurance
  - ✓ Disponible 7j/7 de 9h à 19h

#### 3. Highlights Section (4 cards avec icônes)

- **Card 1**: "2h" - Temps moyen d'intervention pour un remplacement complet
- **Card 2**: "7j/7" - Service disponible tous les jours de 9h à 19h
- **Card 3**: "300€" - Franchise offerte jusqu'à 300€ maximum\*
- **Card 4**: "0€" - Pas d'avance de frais avec votre assurance

#### 4. CTA Section Intermédiaire

- **Titre**: "Un impact sur votre pare-brise ?"
- **Description**: "Ne laissez pas un simple impact se transformer en fissure. Nous intervenons rapidement à domicile ou sur votre lieu de travail dans l'Hérault et le Gard."
- **CTA**: "Prendre rendez-vous" (bouton jaune)

#### 5. Services Section (accordéons collapsibles)

Utiliser Radix UI Accordion pour cette section.

**Service 1**: Remplacement de pare-brise

- Remplacement complet de votre pare-brise avec verre d'origine ou équivalent homologué
- Intervention à domicile ou sur lieu de travail
- Tous véhicules : voitures, camions, engins agricoles
- Prise en charge directe avec votre assurance, pas d'avance de frais

**Service 2**: Réparation d'impact

- Réparation d'impacts jusqu'à 2,5cm de diamètre
- Intervention rapide en 30 minutes
- Évite le remplacement complet
- Souvent pris en charge à 100% par l'assurance

**Service 3**: Tous vitrages automobiles

- Vitres latérales avant et arrière
- Custodes et déflecteurs
- Verres teintés ou surteintés disponibles
- Pose soignée avec joints d'origine

**Service 4**: Lunette arrière

- Lunette arrière avec ou sans dégivrage
- Démontage et repose des habillages intérieurs
- Étanchéité garantie
- Nettoyage complet après intervention

**Service 5**: Calibrage ADAS (caméra)

- Recalibrage des systèmes d'aide à la conduite
- Caméras et capteurs de sécurité
- Indispensable après remplacement de pare-brise
- Équipement professionnel de diagnostic

**Service 6**: Prise en charge assurance

- Gestion complète de votre dossier assurance
- Tiers-payant : pas d'avance de frais
- Franchise offerte jusqu'à 300€\*
- Tous assureurs acceptés - Assurés et non assurés

#### 6. Reassurance Section

- **Titre**: "Intervention rapide dans l'Hérault et le Gard"
- **Sous-titre**: "Service professionnel 7j/7 pour votre sécurité"
- **Description**:
  "Nous savons qu'un pare-brise endommagé nécessite une intervention urgente. C'est pourquoi EDEN GLASS se déplace directement chez vous ou sur votre lieu de travail, avec du matériel professionnel et des techniques éprouvées. Que vous soyez à Montpellier, Nîmes ou dans les communes alentours, nous intervenons rapidement pour garantir votre sécurité."
- **CTA**: "Nous contacter" (bouton jaune)

#### 7. FAQ Section

Utiliser Radix UI Accordion.

**Q1**: Combien de temps dure un remplacement de pare-brise ?
**R1**: Un remplacement complet prend en moyenne 2 heures. Vous pouvez récupérer votre véhicule le jour même, mais nous recommandons d'attendre 1h avant de prendre la route pour un séchage optimal de la colle.

**Q2**: La franchise est-elle vraiment offerte ?
**R2**: Oui ! Nous offrons la franchise jusqu'à 300€ maximum, selon les offres en cours et votre contrat d'assurance. Contactez-nous pour vérifier votre éligibilité.

**Q3**: Acceptez-vous tous les assureurs ?
**R3**: Oui, nous travaillons avec l'ensemble des compagnies d'assurance. Nous gérons directement votre dossier en tiers-payant, vous n'avez pas d'avance de frais. Nous acceptons également les clients non assurés.

**Q4**: Le calibrage ADAS est-il inclus ?
**R4**: Oui, le recalibrage des systèmes d'aide à la conduite (caméra, capteurs) est systématiquement inclus dans nos prestations de remplacement de pare-brise pour les véhicules équipés.

**Q5**: Quels types de véhicules prenez-vous en charge ?
**R5**: Nous intervenons sur tous types de véhicules : voitures particulières, utilitaires, camions et même engins agricoles. Contactez-nous avec les références de votre véhicule pour un devis personnalisé.

**Q6**: Intervenez-vous à domicile ?
**R6**: Oui, nous proposons un service d'intervention mobile dans tout l'Hérault (34) et le Gard (30). Nous pouvons intervenir à votre domicile, sur votre lieu de travail ou à l'endroit de votre choix.

**Q7**: Quelles sont vos zones d'intervention ?
**R7**: Nous intervenons dans tout l'Hérault (Montpellier, Lattes, Sète, Béziers...) et le Gard (Nîmes, Alès, Lunel...). Contactez-nous pour confirmer que nous couvrons votre secteur.

#### 8. Pre-footer CTA

- **Titre**: "Besoin d'un remplacement de pare-brise ?"
- **Description**: "Contactez EDEN GLASS dès maintenant pour un devis gratuit et une intervention rapide à domicile."
- **CTA 1**: "Appeler maintenant" - lien vers tel:+33749571480
- **CTA 2**: "Demander un devis" - lien vers /contact

#### 9. Footer

**Colonnes**:

**Colonne 1 - À propos**

- Logo EDEN GLASS
- "Expert en remplacement et réparation de pare-brise dans l'Hérault et le Gard"
- Icônes réseaux sociaux (placeholders)

**Colonne 2 - Navigation**

- Accueil
- Services
- Tarifs
- Blog
- Contact

**Colonne 3 - Services**

- Remplacement pare-brise
- Réparation d'impact
- Tous vitrages automobiles
- Lunette arrière
- Calibrage ADAS
- Prise en charge assurance

**Colonne 4 - Contact**

- Téléphone: 07 49 57 14 80
- Email: Edenglassparebrise@gmail.com
- Horaires: 7j/7 de 9h à 19h
- Zone: Hérault (34) & Gard (30)

**Bottom Footer**:

- © 2025 EDEN GLASS. Tous droits réservés.
- Mentions légales | Politique de confidentialité | CGV
- \*Franchise offerte jusqu'à 300€ maximum, selon offres en cours et contrat d'assurance.

## Contact Form Structure

Utiliser Radix UI Form avec validation TypeScript. On utilisera Resend pour l'envoi d'email et react-email pour les templates email.

**Champs du formulaire** (`/contact`):

1. **Nom complet** (required, text)
2. **Email** (required, email)
3. **Téléphone** (required, tel)
4. **Type de véhicule** (required, text) - ex: "Renault Clio 2018", "Camion Renault Master", "Tracteur John Deere"
5. **Vitre endommagée** (required, select):
   - Pare-brise avant
   - Lunette arrière
   - Vitre latérale avant gauche
   - Vitre latérale avant droite
   - Vitre latérale arrière gauche
   - Vitre latérale arrière droite
   - Autre vitrage
6. **Êtes-vous assuré ?** (required, select):
   - Oui, avec bris de glace
   - Oui, sans bris de glace
   - Non assuré
7. **Lieu d'intervention souhaité** (required, select):
   - À domicile
   - Sur mon lieu de travail
   - Autre lieu (préciser dans le message)
8. **Ville / Code postal** (required, text)
9. **Message** (optional, textarea) - Décrivez votre problème ou précisez vos disponibilités
10. **Checkbox**: "J'accepte d'être recontacté par EDEN GLASS" (required)

**CTA Submit**: "Envoyer ma demande" (bouton jaune)

## SEO Requirements

### Meta Tags (Homepage)

```typescript
export const metadata = {
  title:
    "EDEN GLASS | Remplacement Pare-Brise Montpellier Nîmes - Franchise Offerte 300€*",
  description:
    "Expert en remplacement et réparation de pare-brise dans l'Hérault et le Gard. Intervention à domicile 7j/7, franchise offerte jusqu'à 300€. ☎️ 07 49 57 14 80",
  keywords:
    "remplacement pare-brise Montpellier, remplacement pare-brise Nîmes, réparation impact, vitrage automobile, franchise offerte, pare-brise Hérault, pare-brise Gard",
};
```

### Target Keywords

**Hérault (34)** :

- Remplacement pare-brise Montpellier
- Réparation pare-brise Lattes
- Vitrage automobile Saint-Jean-de-Védas
- Impact pare-brise Pérols
- Pare-brise Castelnau-le-Lez
- Pare-brise Sète
- Pare-brise Béziers

**Gard (30)** :

- Remplacement pare-brise Nîmes
- Réparation pare-brise Alès
- Vitrage automobile Lunel
- Pare-brise Beaucaire
- Pare-brise Vauvert

**Génériques** :

- Franchise pare-brise offerte
- Pare-brise à domicile
- Calibrage ADAS Montpellier
- Pare-brise camion
- Pare-brise engin agricole

### Local SEO

Inclure dans le contenu les communes suivantes (naturellement dans le texte) :

**Hérault** : Montpellier, Lattes, Saint-Jean-de-Védas, Pérols, Juvignac, Castelnau-le-Lez, Le Crès, Jacou, Clapiers, Lavérune, Grabels, Pignan, Fabrègues, Mauguio, Palavas-les-Flots, Frontignan, Sète, Béziers, Agde

**Gard** : Nîmes, Alès, Beaucaire, Vauvert, Saint-Gilles, Lunel, Aigues-Mortes, Le Grau-du-Roi, Sommières, Uzès

### Sitemap & Robots.txt

Générer automatiquement via Next.js App Router.

## Assets Needed

### Images (placeholders pour le moment)

- Hero background: Technicien en train de remplacer un pare-brise
- À propos: Équipe EDEN GLASS ou intervention à domicile
- Services: Images pour chaque type de prestation (voiture, camion, engin agricole)
- Réassurance: Image de véhicule avec pare-brise neuf

### Icons

Utiliser Lucide React pour toutes les icônes (cohérent avec Radix UI).

## Development Notes

### Component Structure

```
app/
├── layout.tsx (root layout avec Plus Jakarta Sans)
├── page.tsx (homepage avec toutes les sections)
├── services/
│   └── page.tsx
├── tarifs/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── blog/
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Highlights.tsx
    ├── CTASection.tsx
    ├── Services.tsx (avec Radix Accordion)
    ├── Reassurance.tsx
    ├── FAQ.tsx (avec Radix Accordion)
    ├── PreFooterCTA.tsx
    ├── Footer.tsx
    └── ContactForm.tsx (avec Radix Form ou validation native)
```

### Radix UI Components to Use

- `@radix-ui/react-accordion` pour Services et FAQ
- `@radix-ui/react-dialog` si besoin de modale
- `@radix-ui/react-select` pour les dropdowns du formulaire
- `@radix-ui/react-checkbox` pour les cases à cocher

### Responsive Breakpoints (Tailwind v4)

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Animations

Privilégier les transitions CSS natives et Tailwind pour ce projet (pas besoin de Framer Motion pour un site vitrine simple).

## Content Gaps to Fill Later

- [ ] Logo EDEN GLASS (vectoriel SVG si possible)
- [ ] Photos réelles de l'équipe et des interventions
- [ ] Photos d'interventions sur camions et engins agricoles
- [ ] Témoignages clients (pour une future V2)
- [ ] Grille tarifaire complète pour la page Tarifs
- [ ] Articles de blog (conseils pare-brise, entretien, etc.)

## Deployment Checklist

- [ ] Variables d'environnement (Resend API key pour le formulaire)
- [ ] Vérifier le fichier sitemap.xml
- [ ] Vérifier le fichier robots.txt
- [ ] Google Analytics / Tag Manager (si besoin)
- [ ] Tester la performance Lighthouse (viser 90+ sur toutes les métriques)
- [ ] Tester sur mobile réel (iOS et Android)
- [ ] Vérifier les liens téléphone (click-to-call)
- [ ] Vérifier l'envoi du formulaire de contact

---

**Note importante :** Installe les dépendances nécessaires au développement du projet
