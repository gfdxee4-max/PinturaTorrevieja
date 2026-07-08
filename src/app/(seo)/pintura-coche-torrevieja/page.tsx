import { ServiceLandingPage, getServicePageMetadata } from "@/components/page/service-landing-page";
import { getServicePage } from "@/config/service-pages";

const page = getServicePage("pintura-coche-torrevieja");

export const metadata = getServicePageMetadata(page);

export default function PinturaCocheTorreviejaPage() {
  return <ServiceLandingPage page={page} />;
}
