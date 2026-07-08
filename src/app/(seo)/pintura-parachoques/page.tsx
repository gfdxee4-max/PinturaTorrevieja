import { ServiceLandingPage, getServicePageMetadata } from "@/components/page/service-landing-page";
import { getServicePage } from "@/config/service-pages";

const page = getServicePage("pintura-parachoques");

export const metadata = getServicePageMetadata(page);

export default function PinturaParachoquesPage() {
  return <ServiceLandingPage page={page} />;
}
