import {
  ShieldCheck,
  Crosshair,
  LayoutGrid,
  RectangleHorizontal,
  Camera,
  FileCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ============================================================================
// INTERFACES
// ============================================================================

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  subtitle: string;
  image: string;
  richTextContent: string;
  city?: string;
  isGeolocalized?: boolean;
  testimonial?: {
    name: string;
    text: string;
    vehicle: string;
  };
  faq?: { question: string; answer: string }[];
}

export type CityCluster = "metropole" | "littoral" | "axe-a9" | "gard";

export interface CityData {
  name: string;
  slug: string;
  department: "34" | "30";
  population: string;
  cluster: CityCluster;
  mainDistricts: string[];
  nearbyHighways: string[];
  specificRisks: string;
  landmark: string;
  testimonial: { name: string; text: string; vehicle: string };
  uniqueParagraph1: string;
  uniqueParagraph2: string;
  localContext: string;
  nearbyCities: string[];
  faq: { question: string; answer: string }[];
}

// ============================================================================
// SERVICES (6)
// ============================================================================

export const services: Service[] = [
  {
    slug: "remplacement-pare-brise-montpellier",
    icon: ShieldCheck,
    shortTitle: "Remplacement pare-brise",
    title: "Remplacement de Pare-Brise",
    description:
      "Remplacement complet pour tous véhicules, à domicile ou sur votre lieu de travail. Verres homologués et garantie à vie.",
    metaTitle:
      "Remplacement Pare-Brise Montpellier - Devis Gratuit | Eden Glass",
    metaDescription:
      "Remplacement de pare-brise à Montpellier et dans l'Hérault. Intervention rapide 7j/7, franchise offerte jusqu'à 300€. Devis gratuit en ligne.",
    keywords: [
      "remplacement pare-brise montpellier",
      "changer pare-brise montpellier",
      "pare-brise cassé montpellier",
      "vitrage auto montpellier",
    ],
    h1: "Remplacement de Pare-Brise à Montpellier",
    subtitle:
      "Intervention rapide à domicile ou sur votre lieu de travail. Verres homologués, garantie à vie et franchise offerte jusqu'à 300€*.",
    image: "/pare-brise.jpg",
    richTextContent: `
      <p>Votre pare-brise est fissuré ou présente un impact trop important pour être réparé ? <strong>Eden Glass</strong> vous propose un service de remplacement de pare-brise professionnel à Montpellier et dans toute la région de l'Hérault. Notre équipe intervient rapidement, à domicile ou sur votre lieu de travail, pour vous garantir une prestation de qualité sans contrainte.</p>

      <h2>Pourquoi remplacer votre pare-brise ?</h2>
      <p>Le pare-brise est un élément essentiel de la sécurité de votre véhicule. Il assure non seulement une visibilité optimale, mais contribue également à la rigidité de la carrosserie et au bon fonctionnement des airbags. Un pare-brise endommagé peut compromettre votre sécurité et celle de vos passagers.</p>
      <p><strong>Le remplacement est nécessaire lorsque :</strong></p>
      <ul>
        <li>L'impact mesure plus de 2,5 cm de diamètre ou présente plusieurs branches</li>
        <li>La fissure se trouve dans le champ de vision du conducteur (zone A)</li>
        <li>Le pare-brise présente plusieurs impacts ou une fissure qui s'étend</li>
        <li>Les dommages affectent les capteurs embarqués (pluie, luminosité, caméra ADAS)</li>
      </ul>

      <h2>Notre processus de remplacement en 4 étapes</h2>

      <h3>1. Diagnostic et devis gratuit</h3>
      <p>Contactez-nous par téléphone ou via notre formulaire en ligne. Nous évaluons vos besoins et vous fournissons un devis détaillé sous 24h. Nous identifions le verre adapté à votre véhicule et vérifions la compatibilité avec vos équipements embarqués.</p>

      <h3>2. Prise de rendez-vous flexible</h3>
      <p>Nous nous adaptons à votre emploi du temps. Intervention possible du lundi au dimanche, de 9h à 19h. Nous nous déplaçons à votre domicile, sur votre lieu de travail ou dans notre atelier à Montpellier.</p>

      <h3>3. Remplacement professionnel</h3>
      <p>Le remplacement complet prend environ 2 heures. Nos techniciens certifiés procèdent au démontage soigneux de l'ancien pare-brise, préparent la surface de collage, puis installent le nouveau vitrage avec une colle polyuréthane haute performance.</p>

      <h3>4. Calibrage des systèmes ADAS</h3>
      <p>Si votre véhicule est équipé d'une caméra frontale ou de capteurs d'aide à la conduite, nous procédons au recalibrage obligatoire. Cette étape est incluse dans notre prestation.</p>

      <h2>Prix indicatifs pour un remplacement</h2>
      <ul>
        <li><strong>Pare-brise standard</strong> : 250€ à 450€</li>
        <li><strong>Pare-brise avec capteurs</strong> : 350€ à 550€</li>
        <li><strong>Pare-brise chauffant</strong> : 400€ à 700€</li>
        <li><strong>Pare-brise avec caméra ADAS</strong> : 500€ à 900€</li>
        <li><strong>Pare-brise premium (acoustique, HUD)</strong> : 600€ à 1200€</li>
      </ul>
      <p><strong>Bonne nouvelle :</strong> si vous êtes assuré bris de glace, votre assurance prend généralement en charge l'intégralité du remplacement. Nous pratiquons le tiers-payant : aucune avance de frais. Franchise offerte jusqu'à 300€*.</p>

      <h2>Nos garanties qualité</h2>
      <ul>
        <li><strong>Verres homologués</strong> : certification E (norme européenne)</li>
        <li><strong>Garantie à vie</strong> sur l'étanchéité et le collage</li>
        <li><strong>Techniciens certifiés</strong> formés aux dernières techniques</li>
        <li><strong>Matériel professionnel</strong> : colle haute performance, équipement ADAS</li>
      </ul>

      <h2>Zone d'intervention à Montpellier</h2>
      <p>Eden Glass intervient sur l'ensemble de l'agglomération de Montpellier :</p>
      <ul>
        <li>Montpellier centre et tous les quartiers (Antigone, Port Marianne, Aiguelongue, Les Cévennes...)</li>
        <li>Première couronne : Lattes, Pérols, Castelnau-le-Lez, Le Crès, Jacou, Saint-Jean-de-Védas</li>
        <li>Agglomération élargie : Sète, Frontignan, Béziers, Lunel, Palavas-les-Flots</li>
      </ul>

      <p><em>*Franchise offerte dans la limite de 300€, sous conditions. Voir conditions en agence.</em></p>
    `,
  },
  {
    slug: "reparation-impact-pare-brise-montpellier",
    icon: Crosshair,
    shortTitle: "Réparation d'impact",
    title: "Réparation d'Impact",
    description:
      "Réparation rapide en 30 minutes pour les impacts jusqu'à 2,5 cm. Évitez le remplacement complet de votre pare-brise.",
    metaTitle: "Réparation Impact Pare-Brise Montpellier - 30 min | Eden Glass",
    metaDescription:
      "Réparation d'impact sur pare-brise à Montpellier. Intervention en 30 minutes, 100% pris en charge par l'assurance. Devis gratuit.",
    keywords: [
      "réparation impact pare-brise montpellier",
      "réparer impact pare-brise",
      "éclat pare-brise montpellier",
      "impact gravillons pare-brise",
    ],
    h1: "Réparation d'Impact sur Pare-Brise à Montpellier",
    subtitle:
      "Intervention rapide en 30 minutes. Évitez le remplacement complet et économisez sur votre franchise.",
    image: "/impact-2.jpg",
    richTextContent: `
      <p>Un gravillons a heurté votre pare-brise sur l'autoroute ? Pas de panique. Si l'impact est détecté à temps, <strong>Eden Glass</strong> peut le réparer en seulement 30 minutes, vous évitant ainsi un remplacement complet coûteux. Notre équipe intervient rapidement à Montpellier et dans toute l'agglomération.</p>

      <h2>Quand réparer plutôt que remplacer ?</h2>
      <p>La réparation d'impact est possible et recommandée dans les cas suivants :</p>
      <ul>
        <li>L'impact mesure moins de 2,5 cm de diamètre</li>
        <li>L'impact ne se trouve pas dans le champ de vision direct du conducteur</li>
        <li>L'impact n'a pas commencé à se fissurer</li>
        <li>Le pare-brise ne présente pas d'autres dommages</li>
      </ul>
      <p><strong>Important :</strong> Plus vous intervenez rapidement après l'impact, meilleures sont les chances de réparation. L'humidité et les variations de température peuvent transformer un simple impact en fissure irréparable.</p>

      <h2>Notre technique de réparation professionnelle</h2>
      <p>Nous utilisons la technique d'injection de résine, une méthode éprouvée et approuvée par les assurances :</p>

      <h3>Étape 1 : Nettoyage et préparation</h3>
      <p>L'impact est nettoyé en profondeur pour éliminer toute trace de poussière, d'humidité ou de débris. Cette étape est cruciale pour garantir l'adhérence de la résine.</p>

      <h3>Étape 2 : Injection de résine</h3>
      <p>Une résine transparente spéciale est injectée sous pression dans l'impact. Cette résine comble les micro-fissures et restaure l'intégrité structurelle du verre.</p>

      <h3>Étape 3 : Polymérisation UV</h3>
      <p>La résine est durcie par exposition aux rayons UV. Le résultat est une réparation quasi invisible et permanente.</p>

      <h3>Étape 4 : Polissage final</h3>
      <p>Un polissage léger permet d'obtenir une surface parfaitement lisse et transparente.</p>

      <h2>Avantages de la réparation d'impact</h2>
      <ul>
        <li><strong>Rapidité</strong> : intervention de 30 minutes seulement</li>
        <li><strong>Économies</strong> : coût bien inférieur au remplacement</li>
        <li><strong>Écologique</strong> : prolonge la durée de vie du pare-brise d'origine</li>
        <li><strong>Sans franchise</strong> : 100% pris en charge par l'assurance bris de glace</li>
        <li><strong>Garantie</strong> : réparation garantie à vie</li>
      </ul>

      <h2>Tarifs réparation d'impact</h2>
      <p>La réparation d'un impact coûte généralement entre <strong>80€ et 120€</strong>. Bonne nouvelle : si vous avez souscrit la garantie bris de glace, la réparation est intégralement prise en charge par votre assurance, sans franchise à payer.</p>

      <h2>Zones à risque sur les routes de l'Hérault</h2>
      <p>Certains axes routiers de la région sont particulièrement propices aux impacts de gravillons :</p>
      <ul>
        <li>L'A9 (La Languedocienne) : fort trafic et travaux fréquents</li>
        <li>L'A75 (La Méridienne) : gravillons fréquents en zone de montagne</li>
        <li>La D986 vers le Pic Saint-Loup : routes sinueuses et gravillons</li>
        <li>Les zones de travaux de Montpellier et périphérie</li>
      </ul>

      <h2>Intervention rapide à Montpellier</h2>
      <p>Nous intervenons dans toute l'agglomération de Montpellier, à domicile ou sur votre lieu de travail. Notre équipe mobile est équipée pour réaliser les réparations sur place, sans que vous ayez à vous déplacer.</p>

      <p><em>Ne laissez pas un simple impact se transformer en fissure. Contactez Eden Glass dès aujourd'hui pour une réparation rapide et professionnelle.</em></p>
    `,
  },
  {
    slug: "remplacement-vitre-voiture-montpellier",
    icon: LayoutGrid,
    shortTitle: "Vitre de voiture",
    title: "Remplacement Vitre de Voiture",
    description:
      "Vitres latérales, custodes, déflecteurs : nous remplaçons tous les vitrages de votre véhicule avec des joints d'origine.",
    metaTitle: "Remplacement Vitre Voiture Montpellier | Eden Glass",
    metaDescription:
      "Remplacement de vitre de voiture à Montpellier : vitres latérales, custodes, déflecteurs. Intervention rapide, devis gratuit.",
    keywords: [
      "remplacement vitre voiture montpellier",
      "vitre latérale cassée",
      "changer vitre auto montpellier",
      "vitrage automobile montpellier",
    ],
    h1: "Remplacement de Vitre de Voiture à Montpellier",
    subtitle:
      "Vitres latérales, custodes, déflecteurs : nous intervenons sur tous les vitrages de votre véhicule.",
    image: "/vitre.jpg",
    richTextContent: `
      <p>Vitre latérale brisée suite à une tentative de vol ? Custode fissurée par un choc ? <strong>Eden Glass</strong> intervient rapidement à Montpellier pour remplacer tous les types de vitrages automobiles. Notre équipe de techniciens qualifiés vous garantit un travail soigné avec des pièces de qualité origine.</p>

      <h2>Types de vitrages que nous remplaçons</h2>

      <h3>Vitres latérales avant et arrière</h3>
      <p>Les vitres latérales sont souvent la cible des effractions ou peuvent se briser accidentellement. Nous remplaçons les vitres coulissantes, fixes ou à commande électrique, sur tous les modèles de véhicules.</p>

      <h3>Custodes (vitres de coin)</h3>
      <p>Les custodes sont ces petites vitres triangulaires situées aux coins du véhicule. Bien qu'elles semblent moins importantes, leur remplacement nécessite une expertise particulière pour garantir l'étanchéité.</p>

      <h3>Déflecteurs</h3>
      <p>Les déflecteurs, présents sur certains modèles de véhicules utilitaires et SUV, permettent une ventilation naturelle. Nous les remplaçons à l'identique avec des pièces homologuées.</p>

      <h3>Vitres de toit panoramique</h3>
      <p>Les toits panoramiques vitrés demandent une expertise spécifique. Nous intervenons sur tous les types de toits vitrés, fixes ou ouvrants.</p>

      <h2>Cas fréquents de bris de vitre</h2>
      <ul>
        <li><strong>Tentative de vol ou effraction</strong> : cause la plus fréquente, surtout en zone urbaine</li>
        <li><strong>Vandalisme</strong> : malheureusement courant sur les parkings publics</li>
        <li><strong>Accident ou choc</strong> : collision, objet projeté, accident de stationnement</li>
        <li><strong>Choc thermique</strong> : rare mais possible en cas de variations extrêmes</li>
        <li><strong>Défaut du mécanisme</strong> : la vitre peut se briser lors de la montée/descente électrique</li>
      </ul>

      <h2>Notre processus d'intervention</h2>
      <p>Face à une vitre brisée, nous comprenons l'urgence. Votre véhicule est vulnérable aux intempéries et au vol. C'est pourquoi nous proposons :</p>
      <ul>
        <li><strong>Intervention sous 24h</strong> dans l'agglomération de Montpellier</li>
        <li><strong>Protection temporaire</strong> si l'intervention ne peut pas être immédiate</li>
        <li><strong>Déplacement à domicile</strong> ou sur votre lieu de travail</li>
        <li><strong>Nettoyage complet</strong> des débris de verre dans l'habitacle</li>
      </ul>

      <h2>Tarifs indicatifs</h2>
      <ul>
        <li><strong>Vitre latérale avant</strong> : 150€ à 350€</li>
        <li><strong>Vitre latérale arrière</strong> : 120€ à 300€</li>
        <li><strong>Custode</strong> : 100€ à 250€</li>
        <li><strong>Déflecteur</strong> : 80€ à 200€</li>
        <li><strong>Toit panoramique</strong> : 400€ à 1500€</li>
      </ul>
      <p>Ces tarifs varient selon le modèle du véhicule et le type de vitrage (teinté, athermique, etc.). La garantie bris de glace couvre généralement ces remplacements.</p>

      <h2>Nos garanties</h2>
      <ul>
        <li><strong>Pièces d'origine ou équivalent qualité</strong></li>
        <li><strong>Joints neufs</strong> pour une étanchéité parfaite</li>
        <li><strong>Garantie 2 ans</strong> sur le montage et l'étanchéité</li>
        <li><strong>Nettoyage complet</strong> de l'habitacle inclus</li>
      </ul>

      <h2>Zone d'intervention</h2>
      <p>Nous intervenons dans tout Montpellier et son agglomération : Lattes, Pérols, Castelnau-le-Lez, Le Crès, Jacou, Saint-Jean-de-Védas, Juvignac, Clapiers, et toutes les communes environnantes.</p>

      <p><em>Vitre cassée ? N'attendez pas. Contactez Eden Glass pour une intervention rapide et professionnelle.</em></p>
    `,
  },
  {
    slug: "remplacement-lunette-arriere-montpellier",
    icon: RectangleHorizontal,
    shortTitle: "Lunette arrière",
    title: "Remplacement Lunette Arrière",
    description:
      "Remplacement de lunette arrière avec ou sans dégivreur. Démontage soigné des habillages et étanchéité garantie.",
    metaTitle: "Remplacement Lunette Arrière Montpellier | Eden Glass",
    metaDescription:
      "Remplacement de lunette arrière à Montpellier. Avec ou sans dégivreur, étanchéité garantie. Intervention rapide, devis gratuit.",
    keywords: ["lunette arrière", "vitre arrière voiture"],
    h1: "Remplacement de Lunette Arrière à Montpellier",
    subtitle:
      "Avec ou sans dégivreur, démontage soigné et étanchéité garantie.",
    image: "/lunette-arriere.jpg",
    richTextContent: `
      <p>La lunette arrière de votre véhicule est fissurée ou brisée ? <strong>Eden Glass</strong> intervient rapidement à Montpellier et dans toute l'agglomération pour remplacer votre lunette arrière dans les règles de l'art. Que votre véhicule soit équipé d'un système dégivrant ou non, nous disposons des pièces et de l'expertise nécessaires.</p>

      <h2>Qu'est-ce que la lunette arrière ?</h2>
      <p>La lunette arrière, également appelée vitre arrière ou hayon vitré, est le vitrage situé à l'arrière de votre véhicule. Contrairement au pare-brise qui est en verre feuilleté, la lunette arrière est généralement en <strong>verre trempé</strong>. Ce type de verre se brise en petits morceaux peu coupants en cas de choc, pour des raisons de sécurité.</p>
      <p>La plupart des lunettes arrière modernes intègrent un <strong>système de dégivrage</strong> composé de filaments résistifs qui chauffent le verre pour éliminer la buée et le givre. Ce système nécessite une attention particulière lors du remplacement.</p>

      <h2>Causes fréquentes de bris de lunette arrière</h2>
      <ul>
        <li><strong>Choc thermique</strong> : variations brutales de température (soleil intense puis climatisation froide)</li>
        <li><strong>Accident ou collision</strong> : choc arrière, même léger</li>
        <li><strong>Vandalisme</strong> : tentative d'effraction ou acte malveillant</li>
        <li><strong>Projection d'objet</strong> : débris routiers, ballon, grêle</li>
        <li><strong>Défaut de fabrication</strong> : rare mais possible, tensions internes dans le verre</li>
        <li><strong>Fermeture brutale du coffre</strong> : sur certains modèles sensibles</li>
      </ul>

      <h2>Notre processus de remplacement</h2>

      <h3>1. Diagnostic et commande de la pièce</h3>
      <p>Nous identifions le modèle exact de lunette arrière adapté à votre véhicule. Chaque modèle de voiture nécessite une pièce spécifique, avec ou sans dégivrage, teintée ou non, avec ou sans antenne intégrée.</p>

      <h3>2. Démontage soigné</h3>
      <p>Le remplacement d'une lunette arrière nécessite le démontage de plusieurs éléments : garnitures intérieures, joints, parfois le hayon complet. Nos techniciens procèdent avec précaution pour éviter tout dommage aux éléments environnants.</p>

      <h3>3. Nettoyage et préparation</h3>
      <p>Tous les débris de verre sont soigneusement retirés de l'habitacle et du coffre. La surface de collage est préparée pour garantir une adhérence optimale du nouveau vitrage.</p>

      <h3>4. Installation et branchements</h3>
      <p>La nouvelle lunette est posée avec un joint neuf. Si votre véhicule est équipé d'un dégivrage, nous reconnectons soigneusement les connecteurs électriques et vérifions le bon fonctionnement du système.</p>

      <h3>5. Contrôle qualité</h3>
      <p>Nous vérifions l'étanchéité, le bon fonctionnement du dégivrage et la qualité visuelle du montage avant de vous rendre votre véhicule.</p>

      <h2>Tarifs indicatifs</h2>
      <ul>
        <li><strong>Lunette arrière standard</strong> : 200€ à 400€</li>
        <li><strong>Lunette arrière avec dégivrage</strong> : 300€ à 550€</li>
        <li><strong>Lunette arrière teintée</strong> : 250€ à 500€</li>
        <li><strong>Lunette arrière avec antenne intégrée</strong> : 350€ à 600€</li>
        <li><strong>Hayon vitré complet (SUV, monospace)</strong> : 400€ à 800€</li>
      </ul>
      <p>Ces tarifs varient selon le modèle du véhicule. La garantie bris de glace couvre généralement ce type de remplacement.</p>

      <h2>Particularités du dégivrage arrière</h2>
      <p>Le système de dégivrage de la lunette arrière est composé de fines résistances imprimées sur le verre. Lors du remplacement :</p>
      <ul>
        <li>Les connecteurs doivent être manipulés avec précaution</li>
        <li>Le nouveau vitrage doit être compatible avec le système électrique du véhicule</li>
        <li>Un test de fonctionnement est indispensable après l'installation</li>
      </ul>
      <p>Eden Glass dispose de l'équipement nécessaire pour tester et garantir le bon fonctionnement de votre dégivrage après intervention.</p>

      <h2>Nos garanties</h2>
      <ul>
        <li><strong>Pièces d'origine ou équivalent qualité</strong> certifiées</li>
        <li><strong>Garantie 2 ans</strong> sur l'étanchéité et le montage</li>
        <li><strong>Garantie dégivrage</strong> : fonctionnement vérifié et garanti</li>
        <li><strong>Nettoyage complet</strong> des débris de verre inclus</li>
      </ul>

      <h2>Zone d'intervention</h2>
      <p>Nous intervenons pour le remplacement de lunette arrière dans toute l'agglomération de Montpellier : Lattes, Pérols, Castelnau-le-Lez, Le Crès, Jacou, Saint-Jean-de-Védas, Juvignac, Clapiers, et toutes les communes environnantes.</p>

      <p><em>Lunette arrière brisée ? Contactez Eden Glass pour un devis gratuit et une intervention rapide.</em></p>
    `,
  },
  {
    slug: "calibrage-camera-adas-montpellier",
    icon: Camera,
    shortTitle: "Calibrage ADAS",
    title: "Calibrage Caméra ADAS",
    description:
      "Recalibrage professionnel des systèmes d'aide à la conduite après chaque remplacement de pare-brise.",
    metaTitle: "Calibrage Caméra ADAS Montpellier | Eden Glass",
    metaDescription:
      "Calibrage caméra ADAS après remplacement de pare-brise à Montpellier. Équipement professionnel.",
    keywords: ["calibrage adas", "caméra pare-brise"],
    h1: "Calibrage Caméra ADAS à Montpellier",
    subtitle: "Recalibrage professionnel des systèmes d'aide à la conduite.",
    image: "/adas.jpg",
    richTextContent: `
      <p>Votre véhicule est équipé d'une <strong>caméra frontale</strong> ou de <strong>systèmes d'aide à la conduite (ADAS)</strong> ? Après chaque remplacement de pare-brise, un <strong>calibrage professionnel</strong> est indispensable. <strong>Eden Glass</strong> dispose de l'équipement de dernière génération pour recalibrer tous les systèmes ADAS à Montpellier.</p>

      <h2>Qu'est-ce que l'ADAS ?</h2>
      <p>ADAS signifie <strong>Advanced Driver Assistance Systems</strong> (Systèmes Avancés d'Aide à la Conduite). Ces technologies utilisent des capteurs, radars et caméras pour assister le conducteur et améliorer la sécurité routière. La caméra frontale, située derrière le pare-brise, est au cœur de nombreux systèmes ADAS.</p>

      <h2>Systèmes concernés par le calibrage</h2>
      <ul>
        <li><strong>Freinage automatique d'urgence (AEB)</strong> : détecte les obstacles et freine automatiquement</li>
        <li><strong>Régulateur de vitesse adaptatif (ACC)</strong> : maintient la distance avec le véhicule précédent</li>
        <li><strong>Aide au maintien de voie (LKA)</strong> : corrige la trajectoire si vous quittez votre voie</li>
        <li><strong>Alerte de franchissement de ligne (LDW)</strong> : vous avertit si vous déviez de votre trajectoire</li>
        <li><strong>Reconnaissance des panneaux</strong> : affiche les limitations de vitesse</li>
        <li><strong>Détection des piétons et cyclistes</strong> : alerte en cas de risque de collision</li>
        <li><strong>Feux de route automatiques</strong> : gère automatiquement les pleins phares</li>
        <li><strong>Aide au stationnement</strong> : caméras de recul et vision 360°</li>
      </ul>

      <h2>Pourquoi le calibrage est-il obligatoire ?</h2>
      <p>Lors du remplacement du pare-brise, la caméra frontale est démontée puis remontée. Même un décalage <strong>infime de quelques millimètres</strong> peut fausser complètement le fonctionnement des systèmes ADAS :</p>
      <ul>
        <li>Un décalage de 1° de la caméra peut représenter une erreur de plusieurs mètres à 100 km/h</li>
        <li>Le freinage d'urgence pourrait ne pas se déclencher à temps</li>
        <li>L'aide au maintien de voie pourrait vous diriger vers le mauvais côté</li>
        <li>La reconnaissance des panneaux pourrait afficher des informations erronées</li>
      </ul>
      <p><strong>Sans calibrage, votre sécurité et celle des autres usagers est compromise.</strong></p>

      <h2>Types de calibrage</h2>

      <h3>Calibrage statique</h3>
      <p>Le véhicule est positionné face à une cible de calibrage (panneau avec des motifs spécifiques). L'équipement de diagnostic communique avec la caméra pour ajuster ses paramètres. Cette méthode est utilisée pour la plupart des véhicules.</p>
      <ul>
        <li>Durée : 30 minutes à 1 heure</li>
        <li>Nécessite un espace plat et dégagé</li>
        <li>Précision au millimètre près</li>
      </ul>

      <h3>Calibrage dynamique</h3>
      <p>Certains constructeurs (notamment Tesla, certains BMW) nécessitent un calibrage sur route. Le véhicule doit rouler à une vitesse constante pendant plusieurs kilomètres pour que la caméra s'auto-calibre.</p>
      <ul>
        <li>Durée : 20 à 40 minutes de conduite</li>
        <li>Conditions spécifiques requises (météo, marquage au sol visible)</li>
        <li>Accompagnement par un technicien</li>
      </ul>

      <h3>Calibrage mixte</h3>
      <p>Certains véhicules récents nécessitent les deux types de calibrage pour une précision optimale.</p>

      <h2>Notre équipement professionnel</h2>
      <p>Eden Glass a investi dans un <strong>équipement de calibrage ADAS de dernière génération</strong> compatible avec toutes les marques :</p>
      <ul>
        <li><strong>Système de calibrage multi-marques</strong> : compatible avec plus de 50 constructeurs</li>
        <li><strong>Cibles officielles constructeurs</strong> : pour une précision optimale</li>
        <li><strong>Logiciel de diagnostic à jour</strong> : mises à jour régulières pour les nouveaux modèles</li>
        <li><strong>Techniciens formés et certifiés</strong> : formation continue sur les nouvelles technologies</li>
      </ul>

      <h2>Marques et modèles pris en charge</h2>
      <p>Nous calibrons les systèmes ADAS de tous les constructeurs :</p>
      <ul>
        <li><strong>Français</strong> : Renault, Peugeot, Citroën, DS</li>
        <li><strong>Allemands</strong> : Volkswagen, Audi, BMW, Mercedes, Opel</li>
        <li><strong>Japonais</strong> : Toyota, Honda, Nissan, Mazda, Suzuki</li>
        <li><strong>Coréens</strong> : Hyundai, Kia</li>
        <li><strong>Américains</strong> : Ford, Tesla, Jeep</li>
        <li><strong>Autres</strong> : Volvo, Škoda, Seat, Fiat, etc.</li>
      </ul>

      <h2>Tarifs calibrage ADAS</h2>
      <ul>
        <li><strong>Calibrage statique</strong> : 80€ à 150€</li>
        <li><strong>Calibrage dynamique</strong> : 100€ à 180€</li>
        <li><strong>Calibrage mixte</strong> : 150€ à 250€</li>
      </ul>
      <p><strong>Inclus dans nos prestations</strong> : le calibrage ADAS est systématiquement inclus lors d'un remplacement de pare-brise sur un véhicule équipé. Aucun supplément caché.</p>

      <h2>Certificat de calibrage</h2>
      <p>À l'issue de chaque calibrage, nous vous remettons un <strong>certificat de conformité</strong> attestant que les systèmes ADAS de votre véhicule ont été correctement recalibrés. Ce document peut être demandé par votre assurance ou lors du contrôle technique.</p>

      <p><em>Besoin d'un calibrage ADAS après remplacement de pare-brise ? Contactez Eden Glass, votre spécialiste à Montpellier.</em></p>
    `,
  },
  {
    slug: "prise-en-charge-assurance-pare-brise",
    icon: FileCheck,
    shortTitle: "Prise en charge assurance",
    title: "Prise en Charge Assurance",
    description:
      "Gestion complète de votre dossier, tiers-payant sans avance de frais. Franchise offerte jusqu'à 300€*.",
    metaTitle: "Prise en Charge Assurance Pare-Brise | Eden Glass",
    metaDescription:
      "Gestion complète de votre dossier assurance pare-brise. Tiers-payant, franchise offerte jusqu'à 300€.",
    keywords: ["assurance pare-brise", "franchise offerte"],
    h1: "Prise en Charge Assurance Pare-Brise",
    subtitle:
      "Gestion complète, tiers-payant et franchise offerte jusqu'à 300€*.",
    image: "/assurance.jpg",
    richTextContent: `
      <p>Votre pare-brise est endommagé et vous ne savez pas comment procéder avec votre assurance ? <strong>Eden Glass</strong> simplifie toutes vos démarches. Nous prenons en charge <strong>100% de votre dossier assurance</strong> et pratiquons le <strong>tiers-payant</strong> : vous n'avez rien à avancer. En prime, nous offrons votre franchise jusqu'à 300€*.</p>

      <h2>La garantie bris de glace, c'est quoi ?</h2>
      <p>La <strong>garantie bris de glace</strong> est une option de votre contrat d'assurance auto qui couvre les dommages aux vitrages de votre véhicule. Elle prend en charge :</p>
      <ul>
        <li>Le <strong>pare-brise</strong> (remplacement ou réparation)</li>
        <li>Les <strong>vitres latérales</strong> (avant et arrière)</li>
        <li>La <strong>lunette arrière</strong></li>
        <li>Le <strong>toit panoramique</strong> vitré</li>
        <li>Les <strong>optiques de phares</strong> (selon contrats)</li>
        <li>Les <strong>rétroviseurs</strong> (selon contrats)</li>
      </ul>
      <p>Cette garantie est généralement incluse dans les formules "tous risques" et disponible en option sur les formules intermédiaires.</p>

      <h2>Comment fonctionne la prise en charge ?</h2>

      <h3>1. Vous nous contactez</h3>
      <p>Par téléphone au <strong>07 49 57 14 80</strong> ou via notre formulaire en ligne. Nous vous demandons simplement :</p>
      <ul>
        <li>Votre nom et coordonnées</li>
        <li>Le modèle de votre véhicule et son immatriculation</li>
        <li>Le nom de votre assurance et votre numéro de contrat</li>
        <li>La nature du dommage (impact, fissure, bris complet)</li>
      </ul>

      <h3>2. Nous gérons votre dossier</h3>
      <p>Notre équipe administrative prend contact directement avec votre assurance pour :</p>
      <ul>
        <li>Déclarer le sinistre en votre nom</li>
        <li>Obtenir l'accord de prise en charge</li>
        <li>Vérifier les conditions de votre contrat (franchise, plafond)</li>
        <li>Transmettre le devis et les documents nécessaires</li>
      </ul>
      <p><strong>Vous n'avez aucune démarche à effectuer.</strong></p>

      <h3>3. Intervention sans avance de frais</h3>
      <p>Grâce au <strong>tiers-payant</strong>, nous facturons directement votre assurance. Vous ne déboursez rien le jour de l'intervention. Si vous avez une franchise, nous vous l'offrons jusqu'à 300€*.</p>

      <h3>4. Signature et c'est fini</h3>
      <p>À la fin de l'intervention, vous signez simplement un bon de travaux. Votre assurance nous règle directement.</p>

      <h2>La franchise bris de glace</h2>
      <p>La franchise est la somme qui reste à votre charge après intervention de l'assurance. Pour le bris de glace :</p>
      <ul>
        <li><strong>Réparation d'impact</strong> : généralement sans franchise (0€)</li>
        <li><strong>Remplacement de pare-brise</strong> : franchise variable selon les contrats (0€ à 150€ en moyenne)</li>
        <li><strong>Autres vitrages</strong> : franchise souvent identique au pare-brise</li>
      </ul>

      <h2>Notre offre : franchise offerte jusqu'à 300€</h2>
      <p>Chez Eden Glass, nous prenons en charge votre franchise jusqu'à <strong>300€</strong>. Concrètement :</p>
      <ul>
        <li>Si votre franchise est de 100€ → vous payez 0€</li>
        <li>Si votre franchise est de 200€ → vous payez 0€</li>
        <li>Si votre franchise est de 300€ → vous payez 0€</li>
        <li>Si votre franchise est de 400€ → vous payez 100€</li>
      </ul>
      <p><em>*Offre valable sur les remplacements de pare-brise, dans la limite de 300€ de franchise. Voir conditions en agence.</em></p>

      <h2>Assurances partenaires</h2>
      <p>Eden Glass travaille en direct avec toutes les compagnies d'assurance françaises :</p>
      <ul>
        <li><strong>Groupes majeurs</strong> : AXA, Allianz, Generali, Groupama, MAIF, MACIF, MAAF</li>
        <li><strong>Mutuelles</strong> : GMF, MMA, Matmut, Pacifica (Crédit Agricole)</li>
        <li><strong>Assureurs directs</strong> : Direct Assurance, AllSecur, L'Olivier</li>
        <li><strong>Autres</strong> : Gan, Aviva, Zurich, Helvetia, et tous les autres...</li>
      </ul>
      <p>Quelle que soit votre assurance, nous gérons votre dossier de A à Z.</p>

      <h2>Questions fréquentes</h2>

      <h3>Ma prime d'assurance va-t-elle augmenter ?</h3>
      <p>Non. Le bris de glace est considéré comme un sinistre "sans responsabilité". Il n'impacte pas votre coefficient bonus-malus et ne fait pas augmenter votre prime.</p>

      <h3>Combien de sinistres bris de glace puis-je déclarer ?</h3>
      <p>La plupart des contrats ne limitent pas le nombre de sinistres bris de glace par an. Vérifiez les conditions de votre contrat ou demandez-nous, nous le ferons pour vous.</p>

      <h3>Je n'ai pas la garantie bris de glace, que faire ?</h3>
      <p>Nous proposons des tarifs compétitifs pour les clients sans assurance bris de glace. Contactez-nous pour un devis gratuit. Le paiement en plusieurs fois est possible.</p>

      <h3>Puis-je choisir mon réparateur ?</h3>
      <p>Oui ! Contrairement à ce que certaines assurances laissent entendre, vous êtes <strong>libre de choisir votre réparateur</strong>. C'est votre droit. Les assurances ne peuvent pas vous imposer un prestataire.</p>

      <h2>Pourquoi choisir Eden Glass ?</h2>
      <ul>
        <li><strong>Zéro paperasse</strong> : nous gérons 100% de votre dossier</li>
        <li><strong>Zéro avance</strong> : tiers-payant avec toutes les assurances</li>
        <li><strong>Franchise offerte</strong> : jusqu'à 300€ de franchise prise en charge</li>
        <li><strong>Intervention rapide</strong> : sous 24-48h, à domicile ou en atelier</li>
        <li><strong>Qualité garantie</strong> : verres homologués, garantie à vie</li>
      </ul>

      <p><em>Pare-brise endommagé ? Contactez Eden Glass au 07 49 57 14 80. Nous nous occupons de tout, vous ne payez rien.</em></p>
    `,
  },
];

// ============================================================================
// DONNÉES DES VILLES (9 villes)
// ============================================================================

export const citiesData: CityData[] = [
  {
    name: "Lattes",
    slug: "lattes",
    department: "34",
    population: "17 000",
    cluster: "metropole",
    mainDistricts: ["Boirargues", "Maurin", "Centre-ville", "Port Ariane"],
    nearbyHighways: ["A9", "D986", "D189"],
    specificRisks:
      "Les gravillons sont fréquents sur la D986 menant au littoral, surtout en période estivale avec l'afflux de touristes vers Palavas.",
    landmark: "le centre commercial Grand Sud",
    testimonial: {
      name: "Sophie M.",
      text: "Intervention super rapide à Boirargues. Le technicien est arrivé 20 minutes après mon appel. Pare-brise changé en 2h, impeccable !",
      vehicle: "Peugeot 3008",
    },
    uniqueParagraph1:
      "Située aux portes de Montpellier, Lattes est une commune dynamique qui accueille chaque jour des milliers de véhicules transitant entre le centre-ville et le littoral. Les zones commerciales de Boirargues et Grand Sud génèrent un trafic important, augmentant les risques d'impacts sur les pare-brises.",
    uniqueParagraph2:
      "Notre équipe connaît parfaitement Lattes et ses différents quartiers. Que vous soyez à Port Ariane près de l'étang, dans le centre historique ou dans la zone commerciale, nous intervenons rapidement pour vous dépanner.",
    localContext:
      "Lattes est un carrefour de transit incontournable entre Montpellier et les plages du littoral héraultais. Le flux incessant de véhicules vers Palavas et Carnon, combiné au trafic généré par le centre commercial Grand Sud et la zone de Boirargues, fait de la D986 l'un des axes les plus accidentogènes pour les pare-brises de la métropole. Les travaux d'aménagement réguliers autour du tramway et des nouvelles voiries accentuent encore le risque de projections.",
    nearbyCities: [
      "saint-jean-de-vedas",
      "perols",
      "castelnau-le-lez",
      "juvignac",
    ],
    faq: [
      {
        question: "Intervenez-vous sur le parking de Grand Sud ?",
        answer:
          "Oui, nous intervenons directement sur le parking du centre commercial Grand Sud à Boirargues. C'est même l'un de nos lieux d'intervention les plus fréquents à Lattes. Vous pouvez faire vos courses pendant que nous remplaçons votre pare-brise.",
      },
      {
        question:
          "Mon pare-brise a pris un impact sur la D986 vers Palavas, pouvez-vous intervenir rapidement ?",
        answer:
          "La D986 est l'un des axes les plus exposés aux projections de gravillons dans le secteur de Lattes. Nous pouvons généralement intervenir sous 24h à votre domicile ou sur votre lieu de travail à Lattes, y compris à Port Ariane ou Maurin.",
      },
      {
        question:
          "Proposez-vous des interventions le week-end à Lattes ?",
        answer:
          "Oui, nous intervenons 7j/7 à Lattes, y compris le samedi et le dimanche. C'est particulièrement pratique pour les résidents qui travaillent en semaine et ne peuvent pas se libérer en journée.",
      },
    ],
  },
  {
    name: "Saint-Jean-de-Védas",
    slug: "saint-jean-de-vedas",
    department: "34",
    population: "12 000",
    cluster: "metropole",
    mainDistricts: [
      "Centre",
      "Les Music-Halles",
      "Zone Rieucoulon",
      "La Lauze",
    ],
    nearbyHighways: ["A9", "A750", "D612"],
    specificRisks:
      "Le carrefour entre l'A9 et l'A750 est particulièrement exposé aux projections de gravillons dues aux nombreux travaux d'aménagement.",
    landmark: "la zone commerciale de Rieucoulon",
    testimonial: {
      name: "Marc D.",
      text: "Impact réparé en 30 minutes sur le parking de mon entreprise à Rieucoulon. Service professionnel et gratuit grâce à mon assurance.",
      vehicle: "Renault Kangoo",
    },
    uniqueParagraph1:
      "Saint-Jean-de-Védas bénéficie d'une position stratégique à l'ouest de Montpellier, au croisement de l'A9 et de l'A750. Cette situation privilégiée en fait aussi une zone à risque pour les pare-brises, avec un flux constant de véhicules sur ces axes très fréquentés.",
    uniqueParagraph2:
      "Les entreprises de la zone de Rieucoulon nous font régulièrement confiance pour l'entretien de leurs flottes. Nous proposons des interventions groupées pour les professionnels et des horaires adaptés aux contraintes des entreprises.",
    localContext:
      "Saint-Jean-de-Védas se situe à la croisée de deux autoroutes majeures du sud de la France : l'A9 vers l'Espagne et l'A750 vers le Larzac et Lodève. Ce noeud routier génère un trafic poids-lourds et VL considérable, avec des projections de gravillons accentuées par les travaux quasi permanents de réaménagement des échangeurs. La zone commerciale de Rieucoulon, très fréquentée, concentre également de nombreux stationnements exposés aux débris routiers.",
    nearbyCities: [
      "lattes",
      "juvignac",
      "laverune",
      "perols",
    ],
    faq: [
      {
        question:
          "Intervenez-vous dans la zone d'activité de Rieucoulon ?",
        answer:
          "Absolument, la zone de Rieucoulon est l'un de nos secteurs d'intervention les plus fréquents à Saint-Jean-de-Védas. Nous nous déplaçons directement sur le parking de votre entreprise pour un remplacement ou une réparation, sans que vos salariés aient à se déplacer.",
      },
      {
        question:
          "L'A750 abîme souvent les pare-brises, intervenez-vous en urgence ?",
        answer:
          "L'échangeur A9/A750 est effectivement un point noir pour les impacts de gravillons. Nous proposons des interventions rapides sous 24 à 48h pour les résidents et professionnels de Saint-Jean-de-Védas. En cas d'urgence (pare-brise complètement fissuré), nous faisons notre maximum pour intervenir dans la journée.",
      },
      {
        question:
          "Proposez-vous un tarif flotte pour les entreprises de la zone commerciale ?",
        answer:
          "Oui, nous proposons des conditions avantageuses pour les entreprises de Saint-Jean-de-Védas qui nous confient l'entretien de leur flotte de véhicules. Contactez-nous pour un devis personnalisé adapté au nombre de véhicules de votre parc.",
      },
    ],
  },
  {
    name: "Pérols",
    slug: "perols",
    department: "34",
    population: "9 000",
    cluster: "metropole",
    mainDistricts: [
      "Centre-ville",
      "Zone Fenouillet",
      "Les Salines",
      "Étang de l'Or",
    ],
    nearbyHighways: ["D66", "D21", "D986"],
    specificRisks:
      "Les routes côtières vers l'étang de l'Or et Carnon sont régulièrement recouvertes de sable et gravillons, surtout après les épisodes venteux.",
    landmark: "IKEA et la zone commerciale",
    testimonial: {
      name: "Isabelle L.",
      text: "Fissure apparue sur l'A9 en rentrant de vacances. Eden Glass est intervenu le lendemain à mon domicile. Très satisfaite du service !",
      vehicle: "Dacia Duster",
    },
    uniqueParagraph1:
      "Pérols, porte d'entrée vers le littoral méditerranéen, voit passer chaque jour des milliers de véhicules en direction de Carnon et de La Grande-Motte. La proximité de l'étang et les embruns marins peuvent également fragiliser les vitrages sur le long terme.",
    uniqueParagraph2:
      "Notre connaissance du secteur nous permet d'intervenir efficacement dans tous les quartiers de Pérols, de la zone commerciale au bord de l'étang. Les résidents et les professionnels de la zone nous font confiance depuis plusieurs années.",
    localContext:
      "Pérols occupe une position singulière entre l'étang de l'Or et la zone commerciale la plus fréquentée de la métropole montpelliéraine. L'air salin porté par les vents marins depuis Carnon et la Méditerranée attaque progressivement les joints et les vitrages des véhicules stationnés à proximité de l'étang. De plus, les routes reliant Pérols au littoral sont souvent recouvertes de sable après les coups de vent, créant un effet abrasif sur les pare-brises.",
    nearbyCities: [
      "lattes",
      "saint-jean-de-vedas",
      "la-grande-motte",
      "castelnau-le-lez",
    ],
    faq: [
      {
        question:
          "Le sel de l'étang de l'Or peut-il endommager mon pare-brise ?",
        answer:
          "L'air salin ne casse pas directement un pare-brise, mais il peut fragiliser les joints d'étanchéité et accélérer la propagation d'un impact existant. Si vous habitez près de l'étang de l'Or à Pérols, nous recommandons de faire vérifier votre vitrage régulièrement, surtout si vous avez un petit impact.",
      },
      {
        question:
          "Pouvez-vous intervenir sur le parking d'IKEA ou de la zone commerciale ?",
        answer:
          "Oui, nous intervenons régulièrement sur les parkings de la zone commerciale de Pérols, y compris IKEA, Leroy Merlin et les enseignes voisines. Vous pouvez déposer votre véhicule et faire vos achats pendant que nous travaillons.",
      },
      {
        question:
          "Mon véhicule est garé à Carnon, intervenez-vous aussi sur la plage ?",
        answer:
          "Nous intervenons dans tout le secteur Pérols-Carnon. Les parkings de plage de Carnon sont accessibles et nous pouvons tout à fait y réaliser un remplacement ou une réparation de pare-brise, sous réserve de conditions météo favorables.",
      },
    ],
  },
  {
    name: "Castelnau-le-Lez",
    slug: "castelnau-le-lez",
    department: "34",
    population: "23 000",
    cluster: "metropole",
    mainDistricts: [
      "Centre historique",
      "Pompignane",
      "L'Aube Rouge",
      "Les Arcades",
    ],
    nearbyHighways: ["D65", "D112", "Avenue de l'Europe"],
    specificRisks:
      "L'avenue de l'Europe et le secteur du Sablassou connaissent des travaux réguliers qui génèrent poussière et gravillons dangereux pour les pare-brises.",
    landmark: "le centre commercial L'Aube Rouge",
    testimonial: {
      name: "Pierre G.",
      text: "Excellent service ! Intervention programmée le samedi matin, technicien ponctuel et travail soigné. Mon Audi Q5 a retrouvé un pare-brise neuf.",
      vehicle: "Audi Q5",
    },
    uniqueParagraph1:
      "Deuxième ville de la métropole après Montpellier, Castelnau-le-Lez est une commune résidentielle prisée qui génère un important trafic pendulaire quotidien. Les embouteillages aux heures de pointe sur l'avenue de l'Europe multiplient les risques de petits accrochages et projections.",
    uniqueParagraph2:
      "Nous intervenons régulièrement dans les différents quartiers de Castelnau : le centre historique avec ses rues étroites, la zone moderne de l'Aube Rouge, ou encore le secteur résidentiel de la Pompignane. Notre proximité avec Montpellier nous permet d'être sur place en quelques minutes.",
    localContext:
      "Castelnau-le-Lez est la deuxième commune la plus peuplée de la métropole et l'une des plus densément urbanisées. L'avenue de l'Europe, véritable colonne vertébrale de la ville, supporte un trafic pendulaire massif vers Montpellier chaque matin et soir. Les chantiers permanents liés à l'extension du tramway et à la densification urbaine du secteur Sablassou-Aube Rouge génèrent quantité de poussières et de gravillons qui fragilisent les vitrages automobiles.",
    nearbyCities: [
      "le-cres",
      "jacou",
      "clapiers",
      "lattes",
    ],
    faq: [
      {
        question:
          "Intervenez-vous dans le quartier de l'Aube Rouge à Castelnau ?",
        answer:
          "Oui, le quartier de l'Aube Rouge et le centre commercial sont des lieux où nous intervenons très régulièrement. Nous pouvons nous déplacer directement sur le parking du centre commercial ou à votre domicile dans le quartier.",
      },
      {
        question:
          "Les travaux du tramway sur l'avenue de l'Europe abîment les pare-brises, que faire ?",
        answer:
          "Les travaux d'aménagement sur l'avenue de l'Europe génèrent effectivement beaucoup de projections de gravillons. Si vous constatez un impact, faites-le réparer rapidement avant qu'il ne se transforme en fissure. Nous intervenons sous 24h à Castelnau-le-Lez pour les réparations d'impact.",
      },
      {
        question:
          "Proposez-vous des créneaux tôt le matin pour les actifs de Castelnau ?",
        answer:
          "Oui, nous comprenons que Castelnau est une ville de navetteurs. Nous proposons des créneaux dès 8h pour que vous puissiez faire remplacer votre pare-brise avant de partir au travail ou pendant que vous êtes au bureau.",
      },
    ],
  },
  {
    name: "Juvignac",
    slug: "juvignac",
    department: "34",
    population: "12 000",
    cluster: "metropole",
    mainDistricts: [
      "Centre-ville",
      "Le Terral",
      "Zone de la Fontaine",
      "La Condamine",
    ],
    nearbyHighways: ["A750", "D132", "D27E"],
    specificRisks:
      "La proximité de l'A750 et les nombreux chantiers de construction dans cette commune en pleine expansion multiplient les risques de dommages aux vitrages.",
    landmark: "le centre commercial des Music-Halles",
    testimonial: {
      name: "Émilie R.",
      text: "Pare-brise fendu après un choc sur l'A750. Intervention rapide et prise en charge complète par l'assurance. Je recommande !",
      vehicle: "Citroën C3 Aircross",
    },
    uniqueParagraph1:
      "Juvignac connaît une forte croissance démographique et de nombreux chantiers de construction transforment le paysage urbain. Ces travaux, bien que nécessaires, génèrent poussière et gravillons susceptibles d'endommager les pare-brises des riverains et des automobilistes de passage.",
    uniqueParagraph2:
      "Notre équipe intervient dans tous les nouveaux quartiers de Juvignac comme dans les zones plus anciennes. Nous connaissons les spécificités de circulation de la commune et pouvons vous rejoindre rapidement, que vous soyez à domicile ou sur la zone commerciale.",
    localContext:
      "Juvignac est l'une des communes à la croissance la plus rapide de la métropole montpelliéraine, avec de nombreux programmes immobiliers en cours dans les quartiers du Terral et de La Condamine. Cette urbanisation intense signifie des engins de chantier, des camions de livraison et des routes temporaires gravillonnées qui multiplient les risques pour les pare-brises. La sortie de l'A750 toute proche draine également un trafic important de navetteurs venant du Lodévois.",
    nearbyCities: [
      "saint-jean-de-vedas",
      "laverune",
      "lattes",
      "castelnau-le-lez",
    ],
    faq: [
      {
        question:
          "Intervenez-vous près du centre commercial des Music-Halles à Juvignac ?",
        answer:
          "Oui, le centre commercial des Music-Halles est un de nos points d'intervention fréquents à Juvignac. Nous pouvons réaliser le remplacement de votre pare-brise directement sur le parking pendant vos courses.",
      },
      {
        question:
          "Les chantiers des nouveaux quartiers abîment mon pare-brise, est-ce couvert par l'assurance ?",
        answer:
          "Les impacts causés par les projections de gravillons sur les chantiers sont bien couverts par la garantie bris de glace de votre assurance. Nous gérons intégralement votre dossier et offrons la franchise jusqu'à 300 euros. Les chantiers de Juvignac étant particulièrement actifs, n'hésitez pas à nous contacter dès le premier impact.",
      },
      {
        question:
          "Je rentre de l'A750 tous les soirs, mon pare-brise a pris un éclat, c'est urgent ?",
        answer:
          "Un éclat de moins de 2,5 cm peut être réparé en 30 minutes sans remplacer le pare-brise, mais il est important d'agir vite : les variations de température entre la journée et la nuit à Juvignac peuvent transformer un simple impact en fissure. Contactez-nous rapidement pour une réparation à domicile.",
      },
    ],
  },
  {
    name: "Le Crès",
    slug: "le-cres",
    department: "34",
    population: "9 500",
    cluster: "metropole",
    mainDistricts: [
      "Centre",
      "Zone d'activité",
      "Les Musiciens",
      "La Garrigue",
    ],
    nearbyHighways: ["D65", "D112", "Route de Nîmes"],
    specificRisks:
      "La route de Nîmes (D112) est un axe très fréquenté où les projections de gravillons sont courantes, notamment aux abords des zones en travaux.",
    landmark: "la zone d'activité du Crès",
    testimonial: {
      name: "Laurent B.",
      text: "Impact réparé en moins d'une heure sur mon lieu de travail. Le technicien était très professionnel. Parfait !",
      vehicle: "Ford Focus",
    },
    uniqueParagraph1:
      "Le Crès, commune résidentielle à l'est de Montpellier, est traversée par la D112 qui relie la métropole à Nîmes. Cet axe stratégique connaît un trafic dense et des projections de gravillons fréquentes, surtout au niveau des ronds-points et des zones de ralentissement.",
    uniqueParagraph2:
      "Nous intervenons régulièrement au Crès, tant auprès des particuliers que des entreprises de la zone d'activité. Notre proximité géographique nous permet de proposer des délais d'intervention très courts pour tous les résidents de la commune.",
    localContext:
      "Le Crès se situe sur l'axe est de la métropole, traversé par la D112 qui relie Montpellier à Castries et au-delà vers Nîmes. Ce corridor de circulation très dense, ponctué de nombreux ronds-points, est l'un des plus fréquentés par les navetteurs de l'est montpelliérain. Les zones de ralentissement et d'accélération autour des giratoires projettent régulièrement des gravillons, et les véhicules garés dans la zone d'activité sont également exposés aux débris portés par le mistral.",
    nearbyCities: [
      "castelnau-le-lez",
      "jacou",
      "clapiers",
      "lunel",
    ],
    faq: [
      {
        question:
          "Intervenez-vous dans la zone d'activité du Crès ?",
        answer:
          "Oui, la zone d'activité du Crès est un secteur où nous intervenons fréquemment. Nous pouvons nous déplacer directement sur le parking de votre entreprise pour une réparation d'impact ou un remplacement de pare-brise, sans que vous ayez à interrompre votre journée de travail.",
      },
      {
        question:
          "La D112 vers Castries est pleine de gravillons, comment protéger mon pare-brise ?",
        answer:
          "La D112 est effectivement un axe à risque, surtout au niveau des ronds-points. Nous recommandons de maintenir une distance de sécurité suffisante avec le véhicule devant vous et de réduire votre vitesse dans les zones de travaux. Si vous prenez un impact, faites-le réparer rapidement : nous intervenons sous 24h au Crès.",
      },
      {
        question:
          "Quel est votre délai d'intervention au Crès depuis Montpellier ?",
        answer:
          "Le Crès étant à moins de 10 minutes de Montpellier, nous pouvons être chez vous très rapidement. En règle générale, nous programmons les interventions sous 24h, et souvent dans la demi-journée si la pièce est en stock.",
      },
    ],
  },
  {
    name: "Jacou",
    slug: "jacou",
    department: "34",
    population: "7 000",
    cluster: "metropole",
    mainDistricts: ["Centre", "Le Parc", "Zone Artisanale", "Caylus"],
    nearbyHighways: ["D65", "D145", "Route de Castelnau"],
    specificRisks:
      "Les routes étroites entre Jacou et les communes voisines (Clapiers, Le Crès) sont propices aux croisements serrés et aux projections de pierres.",
    landmark: "le parc Bocaud",
    testimonial: {
      name: "Christine P.",
      text: "Service impeccable ! Intervention à domicile, technicien sympathique et efficace. Mon pare-brise est comme neuf.",
      vehicle: "Volkswagen Polo",
    },
    uniqueParagraph1:
      "Jacou, petite commune résidentielle nichée entre Le Crès et Clapiers, offre un cadre de vie agréable tout en restant proche de Montpellier. Les routes communales parfois étroites et sinueuses peuvent occasionner des accrochages ou des projections de graviers.",
    uniqueParagraph2:
      "Notre équipe connaît parfaitement Jacou et ses accès parfois délicats. Nous intervenons à domicile dans tous les quartiers de la commune, du centre-ville aux zones plus résidentielles en périphérie.",
    localContext:
      "Jacou est une petite commune résidentielle prisée pour son calme et ses espaces verts, notamment le parc Bocaud. Cependant, les routes communales étroites qui relient Jacou à Clapiers, Le Crès et Castelnau-le-Lez sont bordées de végétation et de talus qui déversent cailloux et graviers sur la chaussée, surtout après les épisodes de pluie méditerranéenne. Les croisements serrés avec les véhicules en sens inverse projettent régulièrement des petites pierres sur les pare-brises.",
    nearbyCities: [
      "clapiers",
      "le-cres",
      "castelnau-le-lez",
      "lattes",
    ],
    faq: [
      {
        question:
          "Les petites routes entre Jacou et Clapiers ont abîmé mon pare-brise, est-ce réparable ?",
        answer:
          "Si l'impact fait moins de 2,5 cm et ne se situe pas dans le champ de vision du conducteur, une réparation par injection de résine est possible en 30 minutes à votre domicile à Jacou. Si l'impact est plus important, nous procéderons à un remplacement complet, toujours à domicile.",
      },
      {
        question:
          "Intervenez-vous à domicile dans les impasses résidentielles de Jacou ?",
        answer:
          "Oui, notre véhicule d'intervention est adapté aux rues étroites et aux impasses. Nous connaissons bien la configuration de Jacou et ses voies résidentielles parfois difficiles d'accès. Nous pouvons intervenir chez vous sans problème.",
      },
      {
        question:
          "Y a-t-il un surcoût pour une intervention à Jacou ?",
        answer:
          "Non, nos tarifs sont identiques quelle que soit la commune d'intervention dans la métropole montpelliéraine. Le déplacement à Jacou est inclus dans notre prestation, que ce soit pour une réparation d'impact ou un remplacement complet de pare-brise.",
      },
    ],
  },
  {
    name: "Clapiers",
    slug: "clapiers",
    department: "34",
    population: "5 500",
    cluster: "metropole",
    mainDistricts: [
      "Centre",
      "La Plaine",
      "Bel Air",
      "Zone de Fontcaude",
    ],
    nearbyHighways: ["D65", "D145", "Route de Montferrier"],
    specificRisks:
      "La proximité du Pic Saint-Loup et les routes de garrigue peuvent projeter des cailloux sur les pare-brises, surtout après les épisodes pluvieux.",
    landmark: "le domaine de Méric",
    testimonial: {
      name: "Thierry M.",
      text: "Pare-brise fissuré en revenant du Pic Saint-Loup. Eden Glass est intervenu rapidement. Travail propre et soigné.",
      vehicle: "BMW X1",
    },
    uniqueParagraph1:
      "Clapiers, aux portes de la garrigue et du Pic Saint-Loup, est une commune prisée des amateurs de nature. Les routes sinueuses menant aux villages du nord de Montpellier sont malheureusement propices aux projections de cailloux, surtout après les pluies qui dégagent les graviers.",
    uniqueParagraph2:
      "Nous connaissons bien les spécificités de Clapiers et de ses environs. Que vous habitiez près du centre ou dans les zones plus rurales vers Montferrier, nous intervenons rapidement pour réparer ou remplacer votre vitrage endommagé.",
    localContext:
      "Clapiers est la porte d'entrée vers la garrigue montpelliéraine et les contreforts du Pic Saint-Loup. Les habitants empruntent quotidiennement des routes sinueuses bordées de chênes verts et de pierre calcaire, où les cailloux dégagés par le ruissellement après les orages cévenols se retrouvent régulièrement sur la chaussée. Le secteur de Fontcaude et la route de Montferrier sont particulièrement exposés à ces projections naturelles.",
    nearbyCities: [
      "jacou",
      "le-cres",
      "castelnau-le-lez",
      "lattes",
    ],
    faq: [
      {
        question:
          "Mon pare-brise a pris un caillou sur la route du Pic Saint-Loup, que faire ?",
        answer:
          "Les routes de garrigue vers le Pic Saint-Loup sont malheureusement très exposées aux projections de cailloux. Contactez-nous rapidement : si l'impact est petit, nous pouvons le réparer en 30 minutes à votre domicile à Clapiers. Si la fissure s'est étendue, nous remplacerons votre pare-brise sur place.",
      },
      {
        question:
          "Intervenez-vous dans le quartier de Fontcaude à Clapiers ?",
        answer:
          "Oui, nous intervenons dans tous les quartiers de Clapiers, y compris Fontcaude, Bel Air et La Plaine. Le secteur de Fontcaude, proche de la garrigue, est d'ailleurs une zone où les impacts sont fréquents en raison des graviers sur la chaussée.",
      },
      {
        question:
          "Après un orage, j'ai remarqué un nouvel impact, est-ce lié aux intempéries ?",
        answer:
          "Très probablement. Les épisodes de pluie intense, fréquents dans le secteur de Clapiers, drainent des cailloux et des débris depuis les collines de garrigue vers les routes. Ces graviers sont ensuite projetés par les véhicules. Nous vous recommandons de vérifier votre pare-brise après chaque épisode orageux.",
      },
    ],
  },
  {
    name: "Lavérune",
    slug: "laverune",
    department: "34",
    population: "3 200",
    cluster: "metropole",
    mainDistricts: [
      "Centre historique",
      "Route de Pignan",
      "Zone Artisanale",
      "Les Musiciens",
    ],
    nearbyHighways: ["D5", "D27", "Route de Montpellier"],
    specificRisks:
      "Les routes viticoles entre Lavérune et les villages voisins (Pignan, Saussan) sont souvent gravillonnées et peuvent endommager les pare-brises.",
    landmark: "le château de l'Engarran",
    testimonial: {
      name: "Anne-Marie S.",
      text: "Habitant Lavérune, je pensais devoir me déplacer à Montpellier. Finalement, le technicien est venu chez moi. Service au top !",
      vehicle: "Toyota Yaris",
    },
    uniqueParagraph1:
      "Lavérune, charmant village viticole à l'ouest de Montpellier, est entouré de vignes et de petites routes départementales. Ces axes ruraux, parfois mal entretenus, projettent régulièrement des gravillons sur les véhicules qui les empruntent.",
    uniqueParagraph2:
      "Même dans les communes plus éloignées comme Lavérune, Eden Glass assure un service de proximité. Nous intervenons à domicile pour éviter à nos clients de se déplacer avec un pare-brise endommagé, ce qui peut être dangereux et verbalisable.",
    localContext:
      "Lavérune est un village viticole niché entre les domaines du château de l'Engarran et les coteaux de Pignan. Les petites départementales qui sillonnent les vignes (D5, D27) sont fréquemment recouvertes de terre et de gravillons charriés par les engins agricoles, surtout pendant les périodes de vendange et de travail des sols. Ces routes étroites et sinueuses, empruntées quotidiennement par les résidents qui rejoignent Montpellier, sont propices aux impacts sur les pare-brises.",
    nearbyCities: [
      "saint-jean-de-vedas",
      "juvignac",
      "lattes",
      "perols",
    ],
    faq: [
      {
        question:
          "Les routes viticoles autour de Lavérune abîment mon pare-brise, est-ce fréquent ?",
        answer:
          "Oui, les routes entre Lavérune, Pignan et Saussan sont parmi les plus gravillonnées de l'ouest montpelliérain, surtout pendant les périodes de travail dans les vignes. Les engins agricoles déposent de la terre et des cailloux sur la chaussée. Nous intervenons régulièrement à Lavérune pour ce type de dommage.",
      },
      {
        question:
          "Vous déplacez-vous jusqu'à Lavérune pour un simple impact ?",
        answer:
          "Absolument. Que ce soit pour un petit impact ou un remplacement complet, nous nous déplaçons à Lavérune sans surcoût. La réparation d'un impact prend seulement 30 minutes et est entièrement prise en charge par votre assurance bris de glace, sans franchise.",
      },
      {
        question:
          "J'habite près du château de l'Engarran, dans quel délai pouvez-vous intervenir ?",
        answer:
          "Lavérune est à environ 15 minutes de notre base. Nous pouvons généralement programmer une intervention sous 24 à 48h, et nous nous déplaçons dans toute la commune, y compris les zones résidentielles proches du château de l'Engarran et de la route de Pignan.",
      },
    ],
  },
  {
    name: "La Grande Motte",
    slug: "la-grande-motte",
    department: "34",
    population: "8 500",
    cluster: "littoral",
    mainDistricts: [
      "Centre-ville",
      "Le Point Zéro",
      "Port de plaisance",
      "Quartier du Couchant",
      "La Grande Pyramide",
    ],
    nearbyHighways: ["D62", "D59", "A9 (via Lunel)"],
    specificRisks:
      "L'environnement marin expose les pare-brises au sel et au sable projetés par les vents côtiers. Les parkings de plage en été sont particulièrement exposés aux projections de graviers.",
    landmark: "les pyramides emblématiques et le port de plaisance",
    testimonial: {
      name: "Philippe R.",
      text: "En vacances à La Grande Motte, un impact sur l'autoroute. Eden Glass est intervenu dès le lendemain sur le parking de ma résidence. Service impeccable même en plein mois d'août !",
      vehicle: "Volkswagen Tiguan",
    },
    uniqueParagraph1:
      "La Grande Motte, station balnéaire aux pyramides iconiques, accueille chaque été des dizaines de milliers de vacanciers. Cette affluence touristique génère un trafic intense sur les axes menant à la mer, multipliant les risques d'impacts. L'environnement marin, avec son air salin et le sable fin, peut également fragiliser les vitrages sur le long terme.",
    uniqueParagraph2:
      "Eden Glass s'adapte à la saisonnalité de La Grande Motte. En période estivale, nous renforçons nos équipes pour garantir des interventions rapides aux résidents comme aux vacanciers. Propriétaires de résidences secondaires, nous intervenons également hors saison pour préparer votre véhicule avant l'été.",
    localContext:
      "La Grande Motte est une station balnéaire unique en France, célèbre pour son architecture pyramidale des années 1970 et sa fréquentation touristique massive en été. L'environnement littoral soumet les véhicules à une triple agression : le sel marin porté par les vents côtiers qui corrode les joints de pare-brise, le sable fin des plages qui provoque des micro-rayures, et le soleil intense qui accélère la propagation des fissures par dilatation thermique. En haute saison, le trafic sur la D62 depuis Lunel ou Palavas multiplie les risques d'impacts.",
    nearbyCities: [
      "le-grau-du-roi",
      "lunel",
      "perols",
      "lattes",
    ],
    faq: [
      {
        question: "Intervenez-vous en haute saison touristique ?",
        answer:
          "Oui, nous renforçons notre présence sur le littoral en été pour répondre à la forte demande. En juillet et août, nous intervenons à La Grande Motte aussi bien pour les résidents permanents que pour les vacanciers. Les délais peuvent être légèrement allongés en pleine saison, mais nous faisons notre maximum pour intervenir sous 48h.",
      },
      {
        question:
          "Le sable et le sel abîment-ils les pare-brises à La Grande Motte ?",
        answer:
          "L'environnement marin de La Grande Motte est effectivement agressif pour les vitrages. Le sel attaque les joints d'étanchéité et le sable provoque des micro-rayures qui peuvent réduire la visibilité. Si votre véhicule stationne en extérieur près de la plage, nous recommandons un contrôle annuel de vos vitrages.",
      },
      {
        question:
          "Je suis en vacances et mon pare-brise est fissuré, pouvez-vous intervenir sur ma résidence de vacances ?",
        answer:
          "Bien sûr. Nous intervenons sur les parkings des résidences de vacances, des campings et des hôtels de La Grande Motte. Nous comprenons qu'un pare-brise endommagé en vacances est particulièrement contraignant, c'est pourquoi nous faisons le maximum pour intervenir rapidement et ne pas gâcher votre séjour.",
      },
    ],
  },
  {
    name: "Le Grau-du-Roi",
    slug: "le-grau-du-roi",
    department: "30",
    population: "8 800",
    cluster: "littoral",
    mainDistricts: [
      "Centre-ville",
      "Port-Camargue",
      "Rive droite",
      "L'Espiguette",
      "Boucanet",
    ],
    nearbyHighways: ["D62", "D979", "A9 (via Aigues-Mortes)"],
    specificRisks:
      "Les routes traversant les marais salants et la Camargue projettent régulièrement du sel et des gravillons. Le vent marin chargé de sable peut également provoquer des micro-rayures sur les pare-brises.",
    landmark: "le port de pêche et Port-Camargue",
    testimonial: {
      name: "Jean-Marc L.",
      text: "Pêcheur au Grau-du-Roi, mon utilitaire a souvent des soucis de vitrage à cause du sel. Eden Glass connaît bien nos contraintes et intervient rapidement au port.",
      vehicle: "Renault Trafic",
    },
    uniqueParagraph1:
      "Le Grau-du-Roi, authentique village de pêcheurs devenu station balnéaire prisée, vit au rythme de la mer et des saisons. Port-Camargue, plus grand port de plaisance d'Europe, attire plaisanciers et touristes toute l'année. L'environnement camarguais, entre étangs et mer, soumet les véhicules à des conditions difficiles : sel, humidité et sable.",
    uniqueParagraph2:
      "Notre expertise en environnements marins fait la différence au Grau-du-Roi. Nous comprenons les contraintes des professionnels de la mer et des résidents exposés au climat méditerranéen. Intervention possible directement sur les parkings du port ou à votre domicile, même en haute saison touristique.",
    localContext:
      "Le Grau-du-Roi est une commune littorale aux conditions climatiques particulièrement rudes pour les vitrages automobiles. Située entre la Méditerranée et les étangs camarguais, la ville est balayée par des vents marins chargés de sel et de sable fin, notamment le marin d'est et le mistral. Les routes traversant les marais salants vers Aigues-Mortes sont recouvertes de cristaux de sel qui agissent comme autant de micro-projectiles. Les professionnels de la pêche et de la plaisance à Port-Camargue sont particulièrement touchés par cette corrosion saline permanente.",
    nearbyCities: [
      "la-grande-motte",
      "lunel",
      "nimes",
      "perols",
    ],
    faq: [
      {
        question:
          "Intervenez-vous directement au port de Port-Camargue ?",
        answer:
          "Oui, nous intervenons régulièrement à Port-Camargue, directement sur les parkings du port de plaisance. Les professionnels de la mer et les plaisanciers sont des clients fréquents, car l'environnement salin accélère la dégradation des vitrages. Nous nous adaptons à vos horaires, y compris tôt le matin avant l'embarquement.",
      },
      {
        question:
          "Les routes des marais salants vers Aigues-Mortes ont abîmé mon pare-brise, est-ce normal ?",
        answer:
          "Malheureusement oui. La D979 et les routes traversant les salins sont connues pour les projections de sel cristallisé et de gravillons. Ces micro-projectiles sont particulièrement agressifs pour les pare-brises. Si vous empruntez régulièrement cet axe, nous recommandons de faire vérifier votre vitrage régulièrement.",
      },
      {
        question:
          "Proposez-vous un suivi annuel pour les véhicules exposés à l'air marin ?",
        answer:
          "Nous recommandons effectivement aux résidents du Grau-du-Roi un contrôle annuel de l'ensemble des vitrages et des joints. L'air salin accélère le vieillissement des joints d'étanchéité et peut aggraver des micro-impacts invisibles à l'oeil nu. Contactez-nous pour un diagnostic gratuit.",
      },
    ],
  },
  {
    name: "Lunel",
    slug: "lunel",
    department: "34",
    population: "26 000",
    cluster: "axe-a9",
    mainDistricts: [
      "Centre historique",
      "Zone commerciale Lunel 2000",
      "Les Musiciens",
      "Mas de Fournès",
      "Vidourle",
    ],
    nearbyHighways: ["A9", "D34", "D61", "N113"],
    specificRisks:
      "Nœud autoroutier majeur sur l'A9, Lunel voit transiter des milliers de véhicules quotidiennement. Les projections de gravillons sont très fréquentes, notamment aux entrées/sorties d'autoroute et sur la N113.",
    landmark: "la zone commerciale Lunel 2000 et le centre historique",
    testimonial: {
      name: "Stéphane M.",
      text: "Navetteur Lunel-Montpellier sur l'A9 tous les jours, j'ai pris un impact lundi, pare-brise remplacé mercredi midi sur mon lieu de travail. Efficace !",
      vehicle: "Peugeot 508",
    },
    uniqueParagraph1:
      "Lunel, carrefour stratégique entre Montpellier et Nîmes, est traversée par l'A9 et la N113. Cette position en fait une ville de passage et de transit avec un trafic quotidien intense. Les navetteurs et professionnels qui empruntent ces axes sont particulièrement exposés aux impacts de gravillons, surtout aux heures de pointe.",
    uniqueParagraph2:
      "Pour les Lunellois pressés, Eden Glass propose un service express adapté aux contraintes professionnelles. Intervention possible sur votre lieu de travail dans la zone commerciale, au parking relais ou à domicile. Notre proximité depuis Montpellier nous permet d'être chez vous rapidement, idéal pour les actifs au planning chargé.",
    localContext:
      "Lunel est un carrefour routier majeur du Languedoc, situé exactement à mi-chemin entre Montpellier et Nîmes sur l'A9, l'autoroute la plus fréquentée du sud de la France. La ville abrite une sortie d'autoroute très empruntée et la N113, ancienne route nationale qui draine un trafic de poids-lourds conséquent. Les milliers de navetteurs lunellois qui font le trajet quotidien vers Montpellier ou Nîmes sur l'A9 sont statistiquement parmi les plus exposés aux impacts de gravillons de la région.",
    nearbyCities: [
      "la-grande-motte",
      "le-grau-du-roi",
      "nimes",
      "castelnau-le-lez",
    ],
    faq: [
      {
        question:
          "Proposez-vous un service express pour les navetteurs de l'A9 ?",
        answer:
          "Oui, nous savons que les navetteurs de Lunel n'ont pas de temps à perdre. Nous proposons des interventions sur votre lieu de travail ou directement sur le parking de la gare routière, pour que votre pare-brise soit remplacé pendant votre journée de travail. Nous pouvons également intervenir tôt le matin ou en fin de journée.",
      },
      {
        question:
          "Les sorties d'autoroute de Lunel sont-elles à risque pour les pare-brises ?",
        answer:
          "Les bretelles d'entrée et de sortie de l'A9 à Lunel sont effectivement des zones à risque élevé. Les véhicules qui décélèrent ou accélèrent projettent des gravillons accumulés sur les bandes d'arrêt d'urgence. La N113, qui passe en ville, est également très exposée au trafic poids-lourds générateur de projections.",
      },
      {
        question:
          "Intervenez-vous dans la zone commerciale Lunel 2000 ?",
        answer:
          "Oui, la zone commerciale Lunel 2000 est un lieu d'intervention fréquent pour nous. Les vastes parkings sont idéaux pour réaliser un remplacement de pare-brise. Vous pouvez nous laisser votre véhicule le temps de faire vos courses et le récupérer une fois l'intervention terminée.",
      },
    ],
  },
  {
    name: "Nîmes",
    slug: "nimes",
    department: "30",
    population: "150 000",
    cluster: "gard",
    mainDistricts: [
      "Centre historique",
      "Costières",
      "Mas de Mingue",
      "Chemin Bas d'Avignon",
      "Route d'Arles",
      "Caissargues",
    ],
    nearbyHighways: ["A9", "A54", "N106", "N113", "D999"],
    specificRisks:
      "Grande agglomération avec un réseau routier dense et chargé. Les axes périphériques (rocade, entrées d'autoroute) et les zones en travaux fréquents sont propices aux projections de gravillons et débris.",
    landmark: "les Arènes, la Maison Carrée et le centre commercial Ville Active",
    testimonial: {
      name: "Caroline D.",
      text: "J'habite à Nîmes et je craignais de devoir me rendre à Montpellier. Eden Glass s'est déplacé chez moi à Costières. Pare-brise changé en 2h, calibrage caméra inclus.",
      vehicle: "Mercedes Classe A",
    },
    uniqueParagraph1:
      "Nîmes, préfecture du Gard et ville d'art et d'histoire, compte 150 000 habitants et une aire urbaine de plus de 250 000 personnes. Ce bassin de vie important génère un trafic automobile conséquent sur les nombreux axes qui irriguent l'agglomération : A9, A54 vers Arles, N106 vers Alès, et les rocades urbaines souvent saturées.",
    uniqueParagraph2:
      "Expert montpelliérain, Eden Glass étend son service de qualité jusqu'à Nîmes. Nous intervenons dans tous les quartiers de l'agglomération nîmoise, du centre historique aux zones périphériques comme Caissargues ou Marguerittes. Notre engagement : le même niveau de service qu'à Montpellier, avec des délais d'intervention adaptés à la distance (généralement sous 24-48h).",
    localContext:
      "Nîmes est la préfecture du Gard et un bassin de vie majeur du sud de la France, avec plus de 250 000 habitants dans son aire urbaine. La ville est un véritable noeud routier où convergent l'A9 depuis l'Espagne, l'A54 depuis Arles et la Provence, la N106 depuis les Cévennes et la N113 historique. Cette concentration d'axes à fort trafic, combinée aux rocades urbaines régulièrement saturées et aux chantiers d'aménagement de la ville en pleine transformation, en fait l'une des agglomérations où les pare-brises sont les plus sollicités du Languedoc.",
    nearbyCities: [
      "lunel",
      "le-grau-du-roi",
      "la-grande-motte",
      "castelnau-le-lez",
    ],
    faq: [
      {
        question:
          "Quel est votre délai d'intervention à Nîmes depuis Montpellier ?",
        answer:
          "Nîmes étant à environ 50 minutes de notre base montpelliéraine, nous programmons généralement les interventions sous 24 à 48h. Pour les remplacements de pare-brise, nous optimisons nos tournées pour regrouper les interventions nîmoises et garantir les meilleurs délais possibles.",
      },
      {
        question:
          "Intervenez-vous dans tous les quartiers de Nîmes ?",
        answer:
          "Oui, nous couvrons l'ensemble de l'agglomération nîmoise : centre historique près des Arènes, Costières, Mas de Mingue, Chemin Bas d'Avignon, Route d'Arles, et même les communes périphériques comme Caissargues et Marguerittes. Nous nous déplaçons à votre domicile ou sur votre lieu de travail.",
      },
      {
        question:
          "Y a-t-il un surcoût pour une intervention à Nîmes ?",
        answer:
          "Non, nos tarifs sont identiques que vous soyez à Nîmes ou à Montpellier. Le déplacement est inclus dans notre prestation. Avec la prise en charge assurance et notre franchise offerte jusqu'à 300 euros, vous n'avez généralement rien à débourser, où que vous soyez dans le Gard.",
      },
    ],
  },
];

// ============================================================================
// FONCTION DE GÉNÉRATION DES SERVICES GÉOLOCALISÉS
// ============================================================================

function getClusterSpecificSection(cityData: CityData): string {
  const { name, cluster } = cityData;

  switch (cluster) {
    case "littoral":
      return `
      <h2>Environnement marin : protéger votre pare-brise sur le littoral</h2>
      <p>Vivre sur le littoral méditerranéen a ses avantages, mais aussi ses contraintes pour votre véhicule. L'air chargé en sel marin attaque les joints d'étanchéité du pare-brise, accélérant leur vieillissement. Le sable fin, soulevé par le vent, provoque des micro-rayures qui réduisent progressivement la visibilité, surtout en contre-jour.</p>
      <p>À ${name}, les écarts de température entre la journée ensoleillée et la nuit côtière peuvent transformer un simple impact en fissure en quelques jours. C'est pourquoi nous recommandons de <strong>faire réparer tout impact rapidement</strong>, avant que le climat n'aggrave la situation. En saison estivale, notre équipe renforce sa présence sur le littoral pour garantir des délais d'intervention courts malgré l'afflux touristique.</p>`;

    case "axe-a9":
      return `
      <h2>Navetteurs de l'A9 : un service adapté à votre quotidien</h2>
      <p>Si vous faites partie des milliers de navetteurs qui empruntent l'A9 chaque jour, vous le savez : les projections de gravillons sont le lot quotidien de cet axe. Les bretelles d'entrée et de sortie, les zones de travaux permanents et le trafic poids-lourds multiplient les risques d'impact sur votre pare-brise.</p>
      <p>Pour les actifs de ${name} au planning chargé, Eden Glass propose un <strong>service express adapté</strong> : intervention possible tôt le matin (dès 8h), en fin de journée, ou directement sur votre lieu de travail pendant vos heures de bureau. Vous n'avez pas besoin de poser une journée pour faire remplacer votre pare-brise. Notre objectif : <strong>zéro contrainte</strong> pour les navetteurs.</p>`;

    case "gard":
      return `
      <h2>Le Gard aussi : notre engagement qualité au-delà de l'Hérault</h2>
      <p>Basés à Montpellier, nous avons fait le choix d'étendre notre service au Gard pour offrir aux habitants de ${name} la même qualité de prestation. Le réseau routier dense de l'agglomération, les zones en travaux fréquents et les axes périphériques saturés aux heures de pointe génèrent de nombreux impacts sur les pare-brises.</p>
      <p>Notre engagement pour ${name} : des <strong>délais d'intervention optimisés</strong> grâce à une organisation de tournées dédiée au secteur gardois. Nous regroupons les interventions pour être présents régulièrement dans l'agglomération et réduire les temps d'attente. Le même service, les mêmes tarifs, la même garantie qu'à Montpellier.</p>`;

    case "metropole":
    default:
      return `
      <h2>Proximité et réactivité dans la métropole montpelliéraine</h2>
      <p>La métropole de Montpellier connaît une croissance rapide, avec de nombreux chantiers d'aménagement et un trafic en constante augmentation. Les ronds-points, zones de ralentissement et axes en travaux de l'agglomération sont autant de sources de projections de gravillons pour les automobilistes de ${name}.</p>
      <p>L'avantage d'être dans la métropole : notre équipe peut être chez vous <strong>très rapidement</strong> depuis notre base. En règle générale, nous programmons les interventions à ${name} <strong>sous 24h</strong>, et souvent dans la demi-journée si la pièce est disponible en stock. Pas besoin de vous déplacer : nous venons à vous, chez vous ou sur votre lieu de travail.</p>`;
  }
}

function getClusterBlogLinks(cluster: CityCluster): string {
  const links: Record<CityCluster, { slug: string; title: string }[]> = {
    metropole: [
      { slug: "reparation-ou-remplacement-arbre-de-decision", title: "Réparation ou remplacement : comment décider ?" },
      { slug: "routes-risque-herault-pare-brise", title: "Routes à risque dans l'Hérault" },
      { slug: "que-faire-apres-impact-pare-brise", title: "Que faire après un impact sur votre pare-brise ?" },
    ],
    littoral: [
      { slug: "sel-marin-pare-brise-cote-mediterraneenne", title: "Le sel marin et votre pare-brise sur la côte" },
      { slug: "preparer-pare-brise-ete-mediterraneen", title: "Préparer son pare-brise pour l'été méditerranéen" },
      { slug: "grele-pare-brise-prevention-assurance", title: "Grêle et pare-brise : prévention et assurance" },
    ],
    "axe-a9": [
      { slug: "nimes-montpellier-guide-navetteur", title: "Guide du navetteur Nîmes-Montpellier" },
      { slug: "routes-risque-herault-pare-brise", title: "Routes à risque dans l'Hérault" },
      { slug: "conduire-pare-brise-fissure-risques-amendes", title: "Conduire avec un pare-brise fissuré : risques et amendes" },
    ],
    gard: [
      { slug: "nimes-montpellier-guide-navetteur", title: "Guide du navetteur Nîmes-Montpellier" },
      { slug: "assurance-bris-de-glace-guide-complet", title: "Guide complet de l'assurance bris de glace" },
      { slug: "cout-remplacement-pare-brise-tarifs", title: "Coût de remplacement d'un pare-brise : tous les tarifs" },
    ],
  };

  return links[cluster]
    .map((l) => `<li><a href="/blog/${l.slug}">${l.title}</a></li>`)
    .join("\n        ");
}

function getClusterServiceBullet(cluster: CityCluster): string {
  switch (cluster) {
    case "littoral":
      return `<li><strong>Expertise littorale</strong> : connaissance des problématiques liées au sel et au sable</li>`;
    case "axe-a9":
      return `<li><strong>Service express navetteurs</strong> : intervention tôt le matin ou en fin de journée</li>`;
    case "gard":
      return `<li><strong>Couverture Gard</strong> : mêmes tarifs et garanties qu'à Montpellier</li>`;
    case "metropole":
    default:
      return `<li><strong>Intervention rapide</strong> : sous 24h dans toute la métropole</li>`;
  }
}

function getClusterTarifIntro(name: string, cluster: CityCluster): string {
  switch (cluster) {
    case "littoral":
      return `Nos tarifs sont identiques sur tout le littoral, de ${name} à Montpellier. Le déplacement est inclus, y compris en haute saison.`;
    case "axe-a9":
      return `Que vous soyez navetteur ou résident à ${name}, nos tarifs sont transparents et identiques à ceux pratiqués à Montpellier. Le déplacement sur l'axe A9 est inclus.`;
    case "gard":
      return `Nos tarifs à ${name} sont strictement identiques à ceux de Montpellier. Aucun surcoût pour le déplacement dans le Gard.`;
    case "metropole":
    default:
      return `À ${name}, nos tarifs sont identiques à ceux de Montpellier-centre. Le déplacement dans la métropole est inclus dans nos prestations.`;
  }
}

function generateGeolocalizedService(cityData: CityData): Service {
  const {
    name,
    slug,
    department,
    population,
    cluster,
    mainDistricts,
    nearbyHighways,
    specificRisks,
    landmark,
    testimonial,
    uniqueParagraph1,
    uniqueParagraph2,
    localContext,
    nearbyCities,
    faq,
  } = cityData;

  const districtsText = mainDistricts.join(", ");
  const highwaysText = nearbyHighways.join(", ");

  const nearbyCitiesLinks = nearbyCities
    .map((citySlug) => {
      const city = citiesData.find((c) => c.slug === citySlug);
      if (!city) return "";
      return `<a href="/services/remplacement-pare-brise-${city.slug}">Pare-brise ${city.name}</a>`;
    })
    .filter(Boolean)
    .join(", ");

  const faqHtml = faq
    .map(
      (item) => `
      <h3>${item.question}</h3>
      <p>${item.answer}</p>`
    )
    .join("");

  return {
    slug: `remplacement-pare-brise-${slug}`,
    icon: ShieldCheck,
    shortTitle: `Pare-brise ${name}`,
    title: `Remplacement Pare-Brise ${name}`,
    description: `Remplacement de pare-brise à ${name} (${department}). Intervention rapide à domicile 7j/7, franchise offerte jusqu'à 300€. Devis gratuit.`,
    metaTitle: `Remplacement Pare-Brise ${name} (${department}) - Devis Gratuit | Eden Glass`,
    metaDescription: `Remplacement de pare-brise à ${name} et alentours. Intervention à domicile 7j/7, franchise offerte jusqu'à 300€. Devis gratuit ☎️ 07 49 57 14 80`,
    keywords: [
      `remplacement pare-brise ${name.toLowerCase()}`,
      `pare-brise ${name.toLowerCase()}`,
      `vitrage auto ${name.toLowerCase()}`,
      `pare-brise cassé ${name.toLowerCase()}`,
      `réparation pare-brise ${name.toLowerCase()}`,
    ],
    h1: `Remplacement de Pare-Brise à ${name}, intervention à Domicile`,
    subtitle: `Service professionnel 7j/7 à ${name}. Intervention rapide, franchise offerte jusqu'à 300€*.`,
    image: "/pare-brise-3.jpg",
    city: name,
    isGeolocalized: true,
    testimonial,
    faq,
    richTextContent: `
      <p>Vous habitez <strong>${name}</strong> et votre pare-brise est endommagé ? <strong>Eden Glass</strong> intervient rapidement à domicile dans toute la commune pour remplacer ou réparer votre pare-brise. Avec ${population} habitants, ${name} fait partie des communes de l'${department === "34" ? "Hérault" : "Gard"} où nous intervenons régulièrement.</p>

      <p>${uniqueParagraph1}</p>

      <h2>Intervention à domicile à ${name} : quartiers desservis</h2>
      <p>Notre équipe mobile se déplace dans tous les quartiers de ${name} : <strong>${districtsText}</strong>. Que vous soyez chez vous, sur votre lieu de travail ou près de ${landmark}, nous venons à vous pour un remplacement ou une réparation de pare-brise. Aucun besoin de vous déplacer avec un vitrage endommagé.</p>

      <h2>Conditions routières à ${name}</h2>
      <p>${localContext}</p>
      <p>Les axes desservant ${name} (${highwaysText}) sont des zones où les impacts sont fréquents. ${specificRisks} Si vous empruntez régulièrement ces routes, n'hésitez pas à faire examiner votre pare-brise au moindre doute : un impact non traité peut se transformer en fissure en quelques jours.</p>

      ${getClusterSpecificSection(cityData)}

      <p>${uniqueParagraph2}</p>

      <h2>Notre prestation à ${name}</h2>
      <ul>
        <li><strong>Intervention à domicile</strong> dans tous les quartiers de ${name}</li>
        <li><strong>Disponible 7j/7</strong> de 9h à 19h</li>
        <li><strong>Devis gratuit</strong> par téléphone au 07 49 57 14 80 ou en ligne</li>
        <li><strong>Prise en charge assurance</strong> : tiers-payant, pas d'avance de frais</li>
        <li><strong>Franchise offerte</strong> jusqu'à 300€*</li>
        <li><strong>Calibrage ADAS inclus</strong> si votre véhicule est équipé de caméra</li>
        ${getClusterServiceBullet(cluster)}
      </ul>

      <h2>Tarifs remplacement pare-brise à ${name}</h2>
      <p>${getClusterTarifIntro(name, cluster)}</p>
      <ul>
        <li><strong>Pare-brise standard</strong> : 250€ à 450€</li>
        <li><strong>Pare-brise avec capteurs</strong> (pluie, luminosité) : 350€ à 550€</li>
        <li><strong>Pare-brise avec caméra ADAS</strong> : 500€ à 900€</li>
      </ul>
      <p>Avec la garantie bris de glace, vous n'avez rien à payer : nous pratiquons le <strong>tiers-payant</strong> et offrons votre franchise jusqu'à 300€*. <a href="/services/prise-en-charge-assurance-pare-brise">En savoir plus sur la prise en charge assurance</a>.</p>

      <h2>Questions fréquentes – Pare-brise à ${name}</h2>
      ${faqHtml}

      <h2>Nos interventions près de ${name}</h2>
      <p>Nous intervenons également dans les communes voisines de ${name} : ${nearbyCitiesLinks}. Toutes nos prestations sont disponibles aux mêmes tarifs dans l'ensemble de l'Hérault et du Gard.</p>

      <h2>Guides et conseils</h2>
      <p>Retrouvez nos articles pour tout savoir sur l'entretien et le remplacement de votre pare-brise :</p>
      <ul>
        ${getClusterBlogLinks(cluster)}
      </ul>

      <p><strong>N'attendez pas qu'une simple fissure s'aggrave.</strong> Contactez Eden Glass dès maintenant au <a href="tel:+33749571480">07 49 57 14 80</a> pour un devis gratuit de remplacement de pare-brise à ${name}.</p>

      <p><em>*Franchise offerte dans la limite de 300€, sous conditions. Voir conditions en agence.</em></p>
    `,
  };
}

// ============================================================================
// GÉNÉRATION DES SERVICES GÉOLOCALISÉS
// ============================================================================

export const geolocalizedServices: Service[] = citiesData.map(
  generateGeolocalizedService
);

// ============================================================================
// EXPORTS
// ============================================================================

// Services avec contenu riche (pour le routing dynamique)
// export const servicesWithContent = services.filter(
//   (service) => service.richTextContent
// );

// Tous les services avec page dédiée (pour le routing dynamique)
export const allServices: Service[] = [...services, ...geolocalizedServices];

// Fonctions utilitaires
export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((service) => service.slug === slug);
}

export function getOtherServices(currentSlug: string): Service[] {
  // Retourne les 3 services principaux sauf celui en cours
  return services.filter((service) => service.slug !== currentSlug);
}

export function getAllServiceSlugs(): string[] {
  return allServices.map((service) => service.slug);
}
