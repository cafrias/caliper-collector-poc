import fs from "fs/promises";
import { TimeSpent } from "../models/time-spent";
import { TIMESPENT_STORAGE_PATH } from "../../config";

export function saveTimeSpent(timeSpent: TimeSpent): Promise<void> {
  return fs.appendFile(
    TIMESPENT_STORAGE_PATH,
    `${timeSpent.timestamp},${timeSpent.classId},${timeSpent.userId},${timeSpent.activityId},${timeSpent.value}\n`
  );
}
