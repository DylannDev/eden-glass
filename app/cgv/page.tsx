import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente d'Eden Glass : prestations de vitrage automobile, garanties, modalités d'intervention et paiement.",
  robots: { index: false, follow: true },
};

const content = fs.readFileSync(
  path.join(process.cwd(), "content/cgv.md"),
  "utf-8"
);

export default function CGVPage() {
  return (
    <section className="bg-white pt-32 pb-20 lg:pt-40">
      <div className="rich-text mx-auto max-w-4xl px-5">
        <Markdown>{content}</Markdown>
      </div>
    </section>
  );
}
