import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "../base.api.service";
import { Project } from '../../models/project.model';
 
@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseApiService<Project> {

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

  getSprints(project, team) {
    return this.getAll(`boards/sprint/${project}/${team}`);
  }

  getCurrentSprint(project, team) {
    return this.get(`boards/sprint/currentSprint?project=${project}&team=${team}`);
  }



  getPullRequestVotes(project, repo) {
    return this.getAll(`projects/PullRequestByVote?project=${project}&repositoryId=${repo}`);
  }

  //getPullRequestCounts(projectId) {
  //  var url = `repos/pullrequests/counts?projectId=${projectId}`;

  //  return this.get(url);
  //}

  //getBuildCounts(projectId) {
  //  var url = `pipelines/builds/counts?projectId=${projectId}`;
    
  //  return this.get(url);
  //}

  //getReleaseCounts(projectId) {
  //  var url = `pipelines/releases/counts?projectId=${projectId}`;

  //  return this.get(url);
  //}


}
