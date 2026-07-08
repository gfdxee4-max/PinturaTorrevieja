import { ServiceLandingPage, getServicePageMetadata } from "@/components/page/service-landing-page";
import { getServicePage } from "@/config/service-pages";

const page = getServicePage("pintura-aleta");

export const metadata = getServicePageMetadata(page);

export default function PinturaAletaPage() {
  return <ServiceLandingPage page={page} />;
}
