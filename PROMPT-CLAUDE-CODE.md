# Prompt Claude Code - Mise à jour site Eden Glass

## Contexte

Tu travailles sur le site vitrine Eden Glass, une entreprise de remplacement et réparation de pare-brise. Le fichier `CONTEXT.md` a été mis à jour avec les nouvelles informations du client. Tu dois maintenant mettre à jour l'ensemble du site pour refléter ces changements.

## Fichier de référence

Lis attentivement le fichier `CONTEXT.md` à la racine du projet. C'est ta source de vérité pour toutes les informations.

## Tâches à effectuer

### 1. Informations de contact (PRIORITÉ HAUTE)

Remplace partout dans le code :

- **Ancien téléphone** : `+33 7 67 35 33 47` ou `07 67 35 33 47`
- **Nouveau téléphone** : `07 49 57 14 80` (format lien : `tel:+33749571480`)

- **Ancien email** : `contact@edenglass.fr`
- **Nouveau email** : `contact@edenglass.fr`

- **Anciens horaires** : `Lun-Ven 8h-19h, Sam 9h-17h`
- **Nouveaux horaires** : `7j/7 de 9h à 19h`

### 2. Zone d'intervention (PRIORITÉ HAUTE)

Le site couvre maintenant **2 départements** :

- Hérault (34) - Montpellier et environs
- Gard (30) - Nîmes et environs

Mets à jour :

- Le Hero : titre H1 → "Remplacement de Pare-Brise à Montpellier et dans le Gard"
- Le sous-titre Hero → "Intervention rapide à domicile • Franchise offerte jusqu'à 300€\* • Pas d'avance de frais"
- La section À Propos : mentionner l'Hérault ET le Gard
- La section Reassurance : mentionner les deux départements
- Le Footer : Zone → "Hérault (34) & Gard (30)"
- Les metadata SEO : inclure Nîmes dans le titre et la description

### 3. Points forts / Arguments commerciaux

Mets à jour la section À Propos avec ces nouveaux points :

```
✓ Intervention à domicile ou sur lieu de travail
✓ Tous véhicules : voitures, camions, engins agricoles
✓ franchise offerte jusqu'à 300€
✓ Pas d'avance de frais avec votre assurance
✓ Disponible 7j/7 de 9h à 19h
```

### 4. Highlights Section (4 cards)

Mets à jour les 4 cards :

```
Card 1: "2h" - Temps moyen d'intervention pour un remplacement complet
Card 2: "7j/7" - Service disponible tous les jours de 9h à 19h
Card 3: "300€" - Franchise offerte jusqu'à 300€ maximum*
Card 4: "0€" - Pas d'avance de frais avec votre assurance
```

### 5. Services Section

Mets à jour les services (6 au lieu de 5) :

1. **Remplacement de pare-brise** - Ajouter mention "tous véhicules" et "à domicile"
2. **Réparation d'impact** - OK tel quel
3. **Tous vitrages automobiles** (remplace "Vitres latérales")
4. **Lunette arrière** - OK tel quel
5. **Calibrage ADAS (caméra)** - NOUVEAU SERVICE À AJOUTER
6. **Prise en charge assurance** - Mettre à jour avec "franchise jusqu'à 300€" et "assurés et non assurés"

Contenu détaillé dans CONTEXT.md section "Services Section".

### 6. FAQ Section

Mets à jour avec 7 questions (au lieu de 6) :

- Q2 : Franchise offerte jusqu'à 300€ max
- Q3 : Mentionner "clients non assurés" acceptés
- Q5 : NOUVELLE - Types de véhicules (voitures, camions, engins agricoles)
- Q7 : NOUVELLE - Zones d'intervention (Hérault + Gard)

Contenu détaillé dans CONTEXT.md section "FAQ Section".

### 7. Footer

Mets à jour :

- Colonne Services : ajouter "Calibrage ADAS"
- Colonne Contact : nouvelles infos (tel, email, horaires, zone)
- Mention légale : "\*Franchise offerte jusqu'à 300€ maximum..."

### 8. Formulaire de Contact

Ajoute les nouveaux champs :

```tsx
// Nouveaux champs à ajouter :
- "Êtes-vous assuré ?" (select: "Oui, avec bris de glace" / "Oui, sans bris de glace" / "Non assuré")
- "Lieu d'intervention souhaité" (select: "À domicile" / "Sur mon lieu de travail" / "Autre lieu")
- "Ville / Code postal" (text, required)
```

Mets à jour le select "Type de véhicule" avec des exemples incluant camions et engins agricoles.

### 9. SEO / Metadata

Mets à jour dans `layout.tsx` ou `page.tsx` :

```typescript
export const metadata = {
  title:
    "Eden Glass | Remplacement Pare-Brise Montpellier Nîmes - Franchise Offerte 300€*",
  description:
    "Expert en remplacement et réparation de pare-brise dans l'Hérault et le Gard. Intervention à domicile 7j/7, franchise offerte jusqu'à 300€. ☎️ 07 49 57 14 80",
  keywords:
    "remplacement pare-brise Montpellier, remplacement pare-brise Nîmes, réparation impact, vitrage automobile, franchise offerte, pare-brise Hérault, pare-brise Gard",
};
```

## Fichiers à modifier (liste indicative)

```
app/
├── layout.tsx          → metadata SEO
├── page.tsx            → Hero, About, Highlights, CTA, Services, Reassurance, FAQ, PreFooterCTA
├── contact/page.tsx    → Formulaire mis à jour
└── components/
    ├── Hero.tsx        → Titre, sous-titre, téléphone
    ├── About.tsx       → Description, points forts
    ├── Highlights.tsx  → 4 nouvelles cards
    ├── Services.tsx    → 6 services avec nouveau contenu
    ├── Reassurance.tsx → Zone d'intervention élargie
    ├── FAQ.tsx         → 7 questions
    ├── PreFooterCTA.tsx → Nouveau téléphone
    ├── Footer.tsx      → Contact, services, mentions
    └── ContactForm.tsx → Nouveaux champs
```

## Commandes utiles

```bash
# Rechercher les anciennes valeurs à remplacer
grep -r "07 67 35 33 47" --include="*.tsx" --include="*.ts"
grep -r "contact@edenglass.fr" --include="*.tsx" --include="*.ts"
grep -r "Lun-Ven" --include="*.tsx" --include="*.ts"

# Vérifier après modifications
npm run build
npm run dev
```

## Points d'attention

1. **Cohérence** : Le téléphone et l'email doivent être identiques partout
2. **Liens tel:** : Format `tel:+33749571480` (sans espaces)
3. **Astérisque franchise** : Toujours ajouter `*` après "300€" et inclure la mention légale
4. **Accessibilité** : Garder les attributs aria sur les accordéons Radix
5. **Responsive** : Tester le formulaire sur mobile après ajout des nouveaux champs

## Validation finale

Après toutes les modifications :

1. `npm run build` doit passer sans erreur
2. Vérifier visuellement chaque section sur desktop et mobile
3. Tester le click-to-call sur mobile
4. Vérifier que le formulaire de contact fonctionne avec les nouveaux champs
