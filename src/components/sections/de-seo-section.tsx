import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const linkClassName = "font-medium text-white underline decoration-redline/70 underline-offset-4 transition hover:text-[#ff4d4d]";

export function DeSeoSection() {
  return (
    <Section id="de-lackiererei" className="border-b border-white/[0.08] bg-[#050505] py-14 sm:py-20" aria-labelledby="de-lackiererei-heading">
      <Container>
        <div className="max-w-5xl">
          <h2 id="de-lackiererei-heading" className="silver-text max-w-4xl text-3xl font-semibold uppercase leading-tight sm:text-5xl">
            Lackiererei in Torrevieja für Ihr Fahrzeug
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-white/66">
            <p>Bei PaintLab beginnt jede Lackierarbeit mit der Prüfung von Lack und Untergrund. Wir besprechen, ob einzelne Teile lackiert werden können oder eine umfassendere Aufbereitung sinnvoll ist. Vorbereitung, Farbanpassung und Endkontrolle richten sich nach dem Zustand Ihres Fahrzeugs.</p>
            <p>
              Mehr zum Ablauf erfahren Sie auf unserer Seite zur{" "}
              <Link href="/de/autolackierung-torrevieja" className={linkClassName}>Autolackierung</Link>.
              Bei Dellen oder verformten Blechen erläutert die Seite zur{" "}
              <Link href="/de/karosseriereparatur-torrevieja" className={linkClassName}>Karosseriereparatur</Link>{" "}
              die Instandsetzung vor dem Lackieren.
            </p>
            <p>
              Sehen Sie sich unsere{" "}
              <Link href="/de/trabajos-realizados" className={linkClassName}>Arbeiten mit Vorher-Nachher-Fotos</Link>{" "}
              an und senden Sie Bilder Ihres Fahrzeugs per WhatsApp für eine erste Einschätzung. Den endgültigen Reparaturumfang bestätigen wir nach der Besichtigung.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
