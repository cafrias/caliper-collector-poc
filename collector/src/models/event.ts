export interface Event {
  id: string;
  type: string;
  actor: string;
  action: string;
  object: string;
  eventTime: string;
  generated?: unknown;
  group?: string;
}

const userIdRegex = /\/users\/([^/]+)\/?/;
export function getUserId(event: Event): string {
  const match = userIdRegex.exec(event.actor);
  if (!match) {
    throw new Error(`Failed to extract user ID from actor: ${event.actor}`);
  }

  return match[1];
}

const activityIdRegex = /\/activities\/([^/]+)\/?/;
export function getActivityId(event: Event): string {
  const match = activityIdRegex.exec(event.object);
  if (!match) {
    throw new Error(
      `Failed to extract activity ID from object ID: ${event.object}`
    );
  }

  return match[1];
}

const classIdRegex = /\/classes\/([^/]+)\/?/;
export function getClassId(event: Event): string {
  if (!event.group) {
    return "no_class";
  }

  const match = classIdRegex.exec(event.group);
  if (!match) {
    throw new Error(`Failed to extract class ID from group: ${event.group}`);
  }

  return match[1];
}
