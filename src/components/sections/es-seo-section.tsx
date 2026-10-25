import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const linkClassName = "font-medium text-white underline decoration-redline/70 underline-offset-4 transition hover:text-[#ff4d4d]";

export function EsSeoSection() {
  return (
    <Section
      id="es-paint-body-service"
      className="border-b border-white/[0.08] bg-[#050505] py-14 sm:py-20"
      aria-labelledby="es-paint-body-heading"
    >
      <Container>
        <div className="max-w-5xl">
          <h2 id="es-paint-body-heading" className="silver-text max-w-4xl text-3xl font-semibold uppercase leading-tight sm:text-5xl">
            Pintura de coches y reparación de carrocería en Torrevieja
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-white/66">
            <p>En PaintLab realizamos trabajos de pintura de coches en Torrevieja y reparación de carrocería para vehículos con golpes, arañazos y daños en diferentes partes del automóvil.</p>
            <p>Nuestro taller de chapa y pintura trabaja con paragolpes, puertas, aletas y capós. Cada reparación incluye la preparación necesaria de la superficie, la igualación del color y la aplicación de pintura para conseguir un acabado uniforme.</p>
            <p>
              Si buscas un chapista en Torrevieja, puedes consultar nuestros servicios de{" "}
              <Link href="/servicios/chapa-y-pintura" className={linkClassName}>reparación de chapa y pintura</Link>,{" "}
              <Link href="/servicios/pintura-coche" className={linkClassName}>pintura de coches</Link>{" "}
              y <Link href="/servicios/reparacion-carroceria" className={linkClassName}>reparación de carrocería</Link>.
            </p>
            <p>
              También puedes ver nuestros{" "}
              <Link href="/trabajos-realizados" className={linkClassName}>trabajos reales de reparación y pintura</Link>{" "}
              y enviarnos fotografías del vehículo por WhatsApp para recibir una estimación previa.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
