export class Build {
  id: number;
  result: string;
  buildNumber: string;
  requestedFor: User;
  queueTime: Date;
  startTime: Date;
  links: Link;
  status: string;
  finishTime: Date;
  definition: Definition;
  log: Log;
}

export class Log {
  url: string;
}

export class User {
  displayName: string;
  uniqueName: string;
}

export class Link {
  badge: Badge;
}

export class Badge {
  href: string;
}

export class Definition {
  id: number;
  name: string;
  url: string;
}
