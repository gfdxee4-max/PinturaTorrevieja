import { romanceInsuranceContent } from "@/config/insurance-locales/romance";
import { southernInsuranceContent } from "@/config/insurance-locales/southern";
import { northwestInsuranceContent } from "@/config/insurance-locales/northwest";
import { nordicInsuranceContent } from "@/config/insurance-locales/nordic";
import { centralInsuranceContent } from "@/config/insurance-locales/central";
import { southeastInsuranceContent } from "@/config/insurance-locales/southeast";
import { greekInsuranceContent } from "@/config/insurance-locales/greek";
import { insurancePage } from "@/config/insurance-locales/types";

export const newInsuranceContent = [
  ...romanceInsuranceContent, ...southernInsuranceContent, ...northwestInsuranceContent,
  ...nordicInsuranceContent, ...centralInsuranceContent, ...southeastInsuranceContent,
  ...greekInsuranceContent,
];

export const newInsurancePages = newInsuranceContent.map(insurancePage);
