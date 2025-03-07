import { Resource } from "./config";
import { RESOURCE_AUTHORISATION_MAP } from "./constants";


export type AuthorizationsInResource<
  T extends Resource
> = (typeof RESOURCE_AUTHORISATION_MAP)[T];

export type AuthorizationsPerResource<
  T extends Resource
> = AuthorizationsInResource<T>[number];

export type ResourceAuthorizations = {
  [R in Resource]: `${R}_${AuthorizationsPerResource<R>}`;
}[Resource];
