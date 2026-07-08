import { ServiceLandingPage, getServicePageMetadata } from "@/components/page/service-landing-page";
import { getServicePage } from "@/config/service-pages";

const page = getServicePage("pulido-carroceria");

export const metadata = getServicePageMetadata(page);

export default function PulidoCarroceriaPage() {
  return <ServiceLandingPage page={page} />;
}
