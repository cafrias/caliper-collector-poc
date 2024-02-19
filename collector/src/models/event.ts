import { Entity } from "./entity";

export interface Event {
  id: string;
  type: string;
  actor: string;
  action: string;
  object: Entity;
  eventTime: string;
  generated?: unknown;
  group?: string;
}
