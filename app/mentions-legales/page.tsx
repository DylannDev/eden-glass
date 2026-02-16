import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";

export const metadata: Metadata = {
  title: "Mentions Légales | Eden Glass",
  description:
    "Mentions légales du site edenglass.fr – Éditeur, hébergeur, propriété intellectuelle et protection des données personnelles.",
};

const content = fs.readFileSync(
  path.join(process.cwd(), "content/mentions-legales.md"),
  "utf-8"
);

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white pt-32 pb-20 lg:pt-40">
      <div className="rich-text mx-auto max-w-4xl px-5">
        <Markdown>{content}</Markdown>
      </div>
    </section>
  );
}
