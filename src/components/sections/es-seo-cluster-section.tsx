import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function EsSeoClusterSection() {
  return (
    <section className="border-b border-white/[0.08] bg-[#050505] py-10 sm:py-12">
      <Container>
        <div className="mx-auto max-w-4xl border-l border-redline/70 pl-5 sm:pl-7">
          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Taller de chapa y pintura para reparar tu vehículo
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
            Realizamos pintura de coches y reparación de carrocería según el estado real de
            cada pieza, desde daños y arañazos hasta trabajos de pintura más amplios.
          </p>
          <Link
            href="/servicios/chapa-y-pintura"
            className="group mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-white transition hover:text-redline"
          >
            Chapa y pintura en Torrevieja
            <ArrowRight
              className="size-4 text-redline transition group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
