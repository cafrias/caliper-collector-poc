import { Entity } from "./entity";

type Metrics = "MinutesOnTask";

export interface AggregateMeasure extends Entity {
  type: "AggregateMeasure";
  metricValue: number;
  maxMetricValue?: number;
  metric: Metrics;
  startedAtTime?: string;
  endedAtTime?: string;
}
