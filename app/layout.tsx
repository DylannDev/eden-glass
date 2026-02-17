import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavbarDemo from "@/components/home/NavbarDemo";
import "./globals.css";
import Footer from "@/components/home/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edenglass.fr"),
  title: {
    default:
      "Réparation et Remplacement de Pare-Brise, Vitres et Lunette Arrière | Eden Glass",
    template: "%s | Eden Glass",
  },
  description:
    "Eden Glass répare et remplace votre pare-brise, vitre latérale et lunette arrière à Montpellier et alentours. Intervention à domicile 7j/7, franchise offerte jusqu'à 300€.",
  keywords: [
    "remplacement pare-brise Montpellier",
    "réparation pare-brise Nîmes",
    "vitre latérale voiture",
    "lunette arrière voiture",
    "vitrage automobile Montpellier",
    "calibrage ADAS",
    "pare-brise à domicile Hérault Gard",
    "franchise offerte pare-brise",
  ],
  authors: [{ name: "Eden Glass", url: "https://edenglass.fr" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://edenglass.fr",
    siteName: "Eden Glass",
    title:
      "Réparation et Remplacement de Pare-Brise, Vitres et Lunette Arrière | Eden Glass",
    description:
      "Eden Glass répare et remplace votre pare-brise, vitre latérale et lunette arrière à Montpellier et alentours. Intervention à domicile 7j/7, franchise offerte jusqu'à 300€.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <NavbarDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
