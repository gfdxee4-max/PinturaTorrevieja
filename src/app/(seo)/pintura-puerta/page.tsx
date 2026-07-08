import { ServiceLandingPage, getServicePageMetadata } from "@/components/page/service-landing-page";
import { getServicePage } from "@/config/service-pages";

const page = getServicePage("pintura-puerta");

export const metadata = getServicePageMetadata(page);

export default function PinturaPuertaPage() {
  return <ServiceLandingPage page={page} />;
}
