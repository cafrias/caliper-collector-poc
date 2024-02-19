export function extractYMD(date: string): string[] {
  const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
  const match = date.match(dateRegex);
  if (!match) {
    throw new Error("Invalid date format");
  }

  return [match[1], match[2], match[3]];
}
