import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavbarDemo from "@/components/home/NavbarDemo";
import "./globals.css";
import PreFooterCTA from "@/components/home/PreFooterCTA";
import Footer from "@/components/home/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "EDEN GLASS | Remplacement Pare-Brise Montpellier Nîmes - Franchise Offerte 300€*",
  description:
    "Expert en remplacement et réparation de pare-brise dans l'Hérault et le Gard. Intervention à domicile 7j/7, franchise offerte jusqu'à 300€. ☎️ 07 49 57 14 80",
  keywords:
    "remplacement pare-brise Montpellier, remplacement pare-brise Nîmes, réparation impact, vitrage automobile, franchise offerte, pare-brise Hérault, pare-brise Gard",
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
