import { AggregateMeasureCollection } from "./aggregate-measure-collection";
import { Event } from "./event";

export interface ToolUseEvent extends Event {
  type: "ToolUseEvent";
  action: "Used";
  generated?: AggregateMeasureCollection;
}
