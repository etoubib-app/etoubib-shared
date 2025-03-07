import { Authorisation, Resource } from "./config";

export const RESOURCE_AUTHORISATION_MAP = {
  PATIENT: ["CREATE", "READ", "UPDATE"],
  FACTURE: ["CREATE", "READ"],
  AVOIR: ["READ", "EXPORT"],
} as const satisfies Record<Resource, Authorisation[]>;
