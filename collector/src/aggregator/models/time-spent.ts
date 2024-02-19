export interface TimeSpent {
  timestamp: string;
  classId: string;
  userId: string;
  activityId: string;
  value: number;
}

/**
 * Floors the timestamp to the nearest day
 * TODO: this should actually be handled at DB level.
 * More info here: https://www.postgresql.org/docs/current/functions-datetime.html
 * Read `date_trunc` function.
 */
export function truncateTimestamp(timestamp: string): string {
  return timestamp.replace(/T\d\d:\d\d:\d\d.\d\d\dZ/, "T00:00:00.000Z");
}
