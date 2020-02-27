export class Project {
  id: string;
  name: string;
  url: string;
  description: string;

  //buildCount: number;
  //releaseCount: number;
  repoCount: number;

  pullRequestCounts: PullRequestCounts;
  buildCounts = BuildCounts;
  deploymentCounts = DeploymentCounts;

  sprint: Sprint;
  teamCount: number;
  testRunCount: number;
  testPlanCount: number;

  defaultTeam: Basic;
}

export class Basic {
  id: string;
  name: string;
  url: string;
}

export class PullRequestCounts {
  completedCount: number;
  activeCount: number;
  abandonedCount: number;
  notSetCount: number; 
  approved: number;
  approvedWithSuggestions: number;
  noVote: number;
  waitingForAuthor: number;
  rejected: number;
}

export class BuildCounts {
  buildInProgressCount: number;
  buildCancelledCount: number;
  buildSucceededCount: number;
  buildFailedCount: number;
}

export class DeploymentCounts {
  inProgressCount: number;
  notDeployedCount: number;
  failedCount: number;
  succeededCount: number;
}

export class PullRequest {
  repository: Repository;
  pullRequestId: string;
  status: string;
  createdBy: User;
  creationDate: Date;
  title: string;
  description: string;
  mergeStatus: string;
  mergeId: string;
  url: string;
  lastMergeSourceCommit: MergeCommit;
  lastMergeTargetCommit: MergeCommit;
  lastMergeCommit: MergeCommit;
  reviewers: Reviewer[];
}

export class Repository {
  id: string;
  name: string;
  url: string;
  project: Project;
}

export class User {
  displayName: string;
  uniqueName: string;
}

export class MergeCommit {
  commitId: string;
  url: string;
}

export class Reviewer {
  reviewerUrl: string;
  vote: number;
  id: string;
  displayName: string;
  uniqueName: string;
  url: string;
  imageUrl: string;
}

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
  url: string;
  definition: Definition;
  log: Log;
}

export class Release {

}

export class Link {
  badge: Badge;
}

export class Definition {
  id: number;
  name: string;
  url: string;
}

export class Log {
  url: string;
}

export class Badge {
  href: string;
}

export class Repo {
  id: string;
  name: string;
  url: string;
  project: Project;
}

export class Sprint {
  id: string;
  name: string;
  url: string;
  path: string;
  attributes: Attribute;
}

export class Attribute {
  startDate: string;
  finishDate: string;
  timeFrame: string;
}
