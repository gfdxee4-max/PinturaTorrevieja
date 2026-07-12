import Link from "next/link";
import { MessageCircle } from "lucide-react";

type FloatingWhatsAppProps = {
  whatsappUrl: string;
};

export function FloatingWhatsApp({ whatsappUrl }: FloatingWhatsAppProps) {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a PaintLab Torrevieja por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-signal text-black shadow-[0_18px_48px_rgba(0,0,0,0.45)] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </Link>
  );
}
