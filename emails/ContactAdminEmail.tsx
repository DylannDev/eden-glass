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

interface ContactAdminEmailProps {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  vehicleYear?: string;
  glass: string;
  insurance: string;
  location: string;
  city: string;
  address?: string;
  message?: string;
}

export default function ContactAdminEmail({
  name,
  email,
  phone,
  vehicle,
  vehicleYear,
  glass,
  insurance,
  location,
  city,
  address,
  message,
}: ContactAdminEmailProps) {
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
            <Section className="bg-white px-4 pb-8 pt-4">
              <Heading as="h1" className="text-center text-lg text-brand mb-8">
                Nouvelle demande de devis
              </Heading>
              <Heading
                as="h2"
                className="m-0 mb-4 text-base font-semibold text-brand"
              >
                Informations client
              </Heading>

              <table className="w-full">
                <tbody>
                  <Row label="Nom" value={name} />
                  <Row
                    label="Email"
                    value={
                      <Link
                        href={`mailto:${email}`}
                        className="text-brand underline"
                      >
                        {email}
                      </Link>
                    }
                  />
                  <Row
                    label="Téléphone"
                    value={
                      <Link
                        href={`tel:${phone}`}
                        className="text-brand underline"
                      >
                        {phone}
                      </Link>
                    }
                  />
                </tbody>
              </table>

              <Hr className="my-6 border-gray-200" />

              <Heading
                as="h2"
                className="m-0 mb-4 text-base font-semibold text-brand"
              >
                Détails de la demande
              </Heading>

              <table className="w-full">
                <tbody>
                  <Row
                    label="Véhicule"
                    value={
                      vehicleYear ? `${vehicle} (${vehicleYear})` : vehicle
                    }
                  />
                  <Row label="Vitre endommagée" value={glass} />
                  <Row label="Assurance" value={insurance} />
                  <Row label="Lieu d'intervention" value={location} />
                  {address && <Row label="Adresse" value={address} />}
                  <Row label="Ville" value={city} />
                </tbody>
              </table>

              {message && (
                <>
                  <Hr className="my-6 border-gray-200" />
                  <Heading
                    as="h2"
                    className="m-0 mb-4 text-base font-semibold text-brand"
                  >
                    Message
                  </Heading>
                  <Text className="m-0 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">
                    {message}
                  </Text>
                </>
              )}

              <Hr className="my-6 border-transparent" />

              {/* CTA */}
              <Section className="text-center">
                <Link
                  href={`mailto:${email}`}
                  className="mr-2 mb-2 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-yellow no-underline"
                >
                  Répondre au client
                </Link>
                <Link
                  href={`tel:${phone}`}
                  className="inline-block rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-brand no-underline"
                >
                  Appeler le client
                </Link>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="rounded-b-xl bg-gray-50 px-4 py-5">
              <Text className="m-0 text-center text-xs text-gray-400">
                Email envoyé automatiquement depuis le formulaire de contact
                edenglass.fr
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <tr>
      <td className="w-[140px] py-2 pr-4 align-top text-sm text-gray-500">
        {label}
      </td>
      <td className="py-2 text-sm font-medium text-brand">{value}</td>
    </tr>
  );
}
