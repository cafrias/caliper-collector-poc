import { Envelope } from "../models/envelope";
import { getActivityId, getClassId, getUserId } from "../models/event";
import { ToolUseEvent } from "../models/tool-use-event";
import { saveTimeSpent } from "./db/saveTimeSpent";
import { truncateTimestamp } from "./models/time-spent";
import { WithDB } from "./types";

export async function processEnvelope(
  envelope: Envelope,
  { db }: WithDB
): Promise<void> {
  const results = await Promise.allSettled(
    envelope.data.map((item) => {
      switch (item.type) {
        case "ToolUseEvent":
          return processToolUseEvent(item as ToolUseEvent, { db });
        default:
      }
    })
  );

  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error(result.reason);
    }
  });
}

export async function processToolUseEvent(
  event: ToolUseEvent,
  { db }: WithDB
): Promise<void> {
  if (!event.generated) {
    return Promise.resolve();
  }

  const userId = getUserId(event);
  const classId = getClassId(event);
  const activityId = getActivityId(event);

  const results = await Promise.allSettled(
    event.generated.items
      .filter((measure) => measure.metric === "MinutesOnTask")
      .map((measure) => {
        return saveTimeSpent(
          {
            timestamp: truncateTimestamp(event.eventTime),
            userId,
            classId,
            value: measure.metricValue,
            activityId,
          },
          { db }
        );
      })
  );

  results.forEach((result) => {
    if (result.status === "rejected") {
      console.error(result.reason);
    }
  });
}
