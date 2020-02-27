import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base.api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseApiService<object> {

  constructor(private http: HttpClient) {
    super(http);
  }

  getProject(project) {
    return this.get(`projects/${project}`);
  }

  getProjectsCount() {
    return this.getCount(`projects/count`);
  }

  getProjects() {
    return this.getAll(`projects`);
  }

  getRepos(project) {
    return this.getAll(`repos/repos?project=${project}`);
  }
   

  getSprintsCount(project, team) {
    return this.getCount(`boards/sprint/pastSprintCount?project=${project}&team=${team}`);
  }

  getCurrentSprint(project, team) {
    return this.getAll(`boards/sprint/currentSprint?project=${project}&team=${team}`);
  }
   
  getPullRequestVotes(project, repo) {
    return this.getAll(`projects/PullRequestByVote?project=${project}&repositoryId=${repo}`);
  }

  buildResource = 'pipelines/builds';

  getBuild(project) {
    return this.get(`${this.buildResource}?project=${project}`);
  }

  getBuilds(project) {
    return this.getAll(`${this.buildResource}?project=${project}`);
  }

  getBuildsCount(project) {
    return this.getCount(`${this.buildResource}/count?project=${project}`);
  }

  getBuildsByMonthChart(project) {
    return this.getChart(`${this.buildResource}/chart/byMonth/${project}`);
  }

  getBuildsByRequestChart(project) {
    return this.getChart(`${this.buildResource}/chart/byRequest/${project}`);
  }

  getBuildsByResultChart(project) {
    return this.getChart(`${this.buildResource}/chart/byResult/${project}`);
  }

  releaseResource = 'pipelines/releases';

  getRelease(project) {
    return this.get(`${this.releaseResource}?project=${project}`);
  }

  getReleases(project) {
    return this.getAll(`${this.releaseResource}?project=${project}`);
  }

  getReleasesCount(project) {
    return this.getCount(`${this.releaseResource}/count?project=${project}`);
  }

  getReleasesByMonthChart(project) {
    return this.getChart(`${this.releaseResource}/chart/byMonth/${project}`);
  }

  getReleasesByRequestChart(project) {
    return this.getChart(`${this.releaseResource}/chart/byRequest/${project}`);
  }

  getReleasesByResultChart(project) {
    return this.getChart(`${this.releaseResource}/chart/byResult/${project}`);
  }


}
