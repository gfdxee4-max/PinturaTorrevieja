import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/ui/brand-logo";

export default function NotFound() {
  return (
    <main className="min-h-[70svh] bg-ink py-20">
      <Container>
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-signal">404</p>
          <BrandLogo className="mt-5 h-[6rem] w-[19rem]" />
          <Link
            href="/"
            className="mt-8 inline-flex h-11 items-center border border-redline bg-redline px-5 text-sm font-semibold text-white transition hover:bg-[#f00000]"
          >
            Inicio
          </Link>
        </div>
      </Container>
    </main>
  );
}
