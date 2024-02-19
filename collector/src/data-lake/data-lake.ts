import fs from "fs/promises";
import { v1 as uuidv1 } from "uuid";
import { extractYMD } from "../utils/extractYMD";
import { DATA_LAKE_PATH } from "../config";

export async function saveToDataLake(
  timestamp: string,
  envelope: string
): Promise<string> {
  const [year, month, day] = extractYMD(timestamp);

  const dirPath = `${DATA_LAKE_PATH}/${year}/${month}/${day}`;
  await fs.mkdir(dirPath, { recursive: true });
  const filePath = `${dirPath}/${timestamp}-${uuidv1()}.json`;
  await fs.writeFile(filePath, envelope);
  return filePath;
}
