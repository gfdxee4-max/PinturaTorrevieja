import { ServiceLandingPage, getServicePageMetadata } from "@/components/page/service-landing-page";
import { getServicePage } from "@/config/service-pages";

const page = getServicePage("pulido-faros");

export const metadata = getServicePageMetadata(page);

export default function PulidoFarosPage() {
  return <ServiceLandingPage page={page} />;
}
