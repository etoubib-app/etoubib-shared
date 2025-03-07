const authorisations = [
  "CREATE",
  "READ",
  "UPDATE",
  "DELETE",
  "EXPORT",
] as const;
const resources = ["PATIENT", "FACTURE", "AVOIR"] as const;
export type Authorisation = (typeof authorisations)[number];
export type Resource = (typeof resources)[number];
