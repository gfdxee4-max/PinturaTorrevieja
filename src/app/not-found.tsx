import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="min-h-[70svh] bg-ink py-20">
      <Container>
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-signal">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-chrome">
            PINTURA TORREVIEJA
          </h1>
          <Link
            href="/"
            className="mt-8 inline-flex h-11 items-center rounded-md bg-chrome px-5 text-sm font-semibold text-ink transition hover:bg-white"
          >
            Inicio
          </Link>
        </div>
      </Container>
    </main>
  );
}
