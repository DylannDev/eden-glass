import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
  Img,
  Tailwind,
} from "@react-email/components";

interface ContactClientEmailProps {
  name: string;
  vehicle: string;
  vehicleYear?: string;
  glass: string;
  insurance: string;
  location: string;
  city: string;
  address?: string;
}

export default function ContactClientEmail({
  name,
  vehicle,
  vehicleYear,
  glass,
  insurance,
  location,
  city,
  address,
}: ContactClientEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#0A100D",
                yellow: "#FDF567",
              },
            },
          },
        }}
      >
        <Body className="font-sans">
          <Container className="mx-auto max-w-[600px] py-5">
            {/* Header */}
            <Section className="rounded-t-xl bg-brand px-4 py-8 text-center">
              <Img
                src="https://edenglass.fr/logo-2.svg"
                alt="Eden Glass"
                width={300}
                height={70}
                className="mx-auto mb-3"
              />
            </Section>

            {/* Content */}
            <Section className="bg-white px-4 py-8 mb-4">
              <Heading
                as="h2"
                className="m-0 mb-4 text-xl font-semibold text-brand"
              >
                Bonjour {name},
              </Heading>

              <Text className="m-0 mb-4 text-[15px] leading-relaxed text-gray-700">
                Nous avons bien reçu votre demande de devis et nous vous en
                remercions. Un membre de notre équipe vous recontactera{" "}
                <strong>sous 24h</strong> pour convenir d&apos;un rendez-vous.
              </Text>

              <Hr className="my-6 border-gray-200" />

              <Heading
                as="h2"
                className="m-0 mb-4 text-base font-semibold text-brand"
              >
                Récapitulatif de votre demande
              </Heading>

              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="w-[140px] py-2 pr-4 align-top text-sm text-gray-500">
                      Véhicule
                    </td>
                    <td className="py-2 text-sm font-medium text-brand">
                      {vehicleYear ? `${vehicle} (${vehicleYear})` : vehicle}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[140px] py-2 pr-4 align-top text-sm text-gray-500">
                      Vitre concernée
                    </td>
                    <td className="py-2 text-sm font-medium text-brand">
                      {glass}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[140px] py-2 pr-4 align-top text-sm text-gray-500">
                      Assurance
                    </td>
                    <td className="py-2 text-sm font-medium text-brand">
                      {insurance}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[140px] py-2 pr-4 align-top text-sm text-gray-500">
                      Lieu d&apos;intervention
                    </td>
                    <td className="py-2 text-sm font-medium text-brand">
                      {location}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[140px] py-2 pr-4 align-top text-sm text-gray-500">
                      Ville
                    </td>
                    <td className="py-2 text-sm font-medium text-brand">
                      {city}
                    </td>
                  </tr>
                  {address && (
                    <tr>
                      <td className="w-[140px] py-2 pr-4 align-top text-sm text-gray-500">
                        Adresse
                      </td>
                      <td className="py-2 text-sm font-medium text-brand">
                        {address}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <Hr className="my-6 border-gray-200" />

              <Text className="m-0 mb-4 text-[15px] leading-relaxed text-gray-700">
                En attendant, si votre situation est urgente, n&apos;hésitez pas
                à nous appeler directement :
              </Text>

              {/* CTA */}
              <Section className="my-2 text-center">
                <Link
                  href="tel:+33749571480"
                  className="inline-block rounded-full bg-brand px-8 py-3.5 text-[15px] font-semibold text-yellow no-underline"
                >
                  Appeler le 07 49 57 14 80
                </Link>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="rounded-b-xl bg-brand px-4 py-6">
              <Text className="m-0 mb-1 text-center text-[13px] text-white/60">
                <Link
                  href="tel:+33749571480"
                  className="text-white no-underline"
                >
                  07 49 57 14 80
                </Link>
                {" • "}
                <Link
                  href="mailto:contact@edenglass.fr"
                  className="text-white no-underline"
                >
                  contact@edenglass.fr
                </Link>
              </Text>
              <Text className="m-0 text-center text-[11px] text-white/25">
                Vous recevez cet email suite à votre demande de devis sur
                edenglass.fr
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
