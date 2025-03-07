import { ResourceAuthorizations } from "../types";

export type IClientRole = {
  id: string;
  name: string;
  permissions: ResourceAuthorizations[];
}