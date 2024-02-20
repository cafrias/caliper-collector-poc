import { TimeSpent } from "../models/time-spent";
import { WithDB } from "../types";

export async function saveTimeSpent(
  timeSpent: TimeSpent,
  { db }: WithDB
): Promise<void> {
  await db.query(
    "INSERT INTO time_spent (registered_at, user_id, class_id, total_minutes, activity_id) VALUES ($1, $2, $3, $4, $5)",
    [
      timeSpent.timestamp,
      timeSpent.userId,
      timeSpent.classId,
      timeSpent.value,
      timeSpent.activityId,
    ]
  );

  return;
}
