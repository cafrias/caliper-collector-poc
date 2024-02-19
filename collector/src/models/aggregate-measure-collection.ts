import { AggregateMeasure } from "./aggregate-measure";

export interface AggregateMeasureCollection {
  type: "AggregateMeasureCollection";
  items: Array<AggregateMeasure>;
}
