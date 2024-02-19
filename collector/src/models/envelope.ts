import { Entity } from "./entity";
import { Event } from "./event";

export interface Envelope {
  sensor: string;
  sendTime: string;
  dataVersion: string;
  data: Array<Entity | Event>;
}
