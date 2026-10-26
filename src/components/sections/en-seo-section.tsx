import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const linkClassName = "font-medium text-white underline decoration-redline/70 underline-offset-4 transition hover:text-[#ff4d4d]";

export function EnSeoSection() {
  return (
    <Section
      id="en-paint-body-service"
      className="border-b border-white/[0.08] bg-[#050505] py-14 sm:py-20"
      aria-labelledby="en-paint-body-heading"
    >
      <Container>
        <div className="max-w-5xl">
          <h2 id="en-paint-body-heading" className="silver-text max-w-4xl text-3xl font-semibold uppercase leading-tight sm:text-5xl">
            Car Paint Shop and Body Repair in Torrevieja
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-white/66">
            <p>PaintLab is a car paint shop in Torrevieja specialising in professional car painting and bodywork repairs. We repair damaged panels, dents, scratches and bodywork damage, helping vehicle owners restore the appearance of their cars.</p>
            <p>Our car body repair services in Torrevieja include repairs and repainting of bumpers, doors, bonnets and wings. Each job involves careful surface preparation, colour matching and professional spray painting to achieve a consistent finish.</p>
            <p>
              Whether your vehicle needs a single panel repainted or a{" "}
              <Link href="/en/car-respray-torrevieja" className={linkClassName}>full car respray</Link>,{" "}
              we assess the condition of the paintwork and explain the available repair options before starting the job.
            </p>
            <p>
              You can explore our{" "}
              <Link href="/en/car-body-repair-torrevieja" className={linkClassName}>body repair services</Link>,{" "}
              see genuine{" "}
              <Link href="/en/trabajos-realizados" className={linkClassName}>before-and-after photographs</Link>{" "}
              of completed work and send pictures of your vehicle via WhatsApp for an initial estimate.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
