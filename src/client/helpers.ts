import { Resource } from "./config";
import { RESOURCE_AUTHORISATION_MAP } from "./constants";
import {
  AuthorizationsInResource,
  AuthorizationsPerResource,
  ResourceAuthorizations,
} from "./types";



export const getAuthorizationsOfResource = <T extends Resource>(
  resource: T
) => {
  const authorizations = RESOURCE_AUTHORISATION_MAP[
    resource
  ] as AuthorizationsInResource<T>;
  return authorizations.map((auth) => `${resource}_${auth}`) as [
    `${T}_${AuthorizationsPerResource<T>}`
  ];
};


