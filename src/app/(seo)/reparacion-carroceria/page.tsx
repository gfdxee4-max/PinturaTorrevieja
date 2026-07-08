import { ServiceLandingPage, getServicePageMetadata } from "@/components/page/service-landing-page";
import { getServicePage } from "@/config/service-pages";

const page = getServicePage("reparacion-carroceria");

export const metadata = getServicePageMetadata(page);

export default function ReparacionCarroceriaPage() {
  return <ServiceLandingPage page={page} />;
}
