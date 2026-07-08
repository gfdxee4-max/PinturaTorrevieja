import { ServiceLandingPage, getServicePageMetadata } from "@/components/page/service-landing-page";
import { getServicePage } from "@/config/service-pages";

const page = getServicePage("pintura-capo");

export const metadata = getServicePageMetadata(page);

export default function PinturaCapoPage() {
  return <ServiceLandingPage page={page} />;
}
