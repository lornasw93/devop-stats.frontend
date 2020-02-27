import { Injectable } from '@angular/core';
import { BaseApiService } from "../../base.api.service";
import { Build } from "../../../models/build.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildsService extends BaseApiService<Build> {

  resourceName = 'pipelines/builds';

  constructor(private http: HttpClient) {
    super(http);
  }

  getBuild(project) {
    return this.get(`${this.resourceName}?project=${project}`);
  }

  getBuilds(project) { 
    return this.getAll(`${this.resourceName}?project=${project}`);
  }

  getBuildsCount(project) {
    return this.getCount(`${this.resourceName}/count?project=${project}`);
  }

  getBuildsByMonthChart(project) {
    return this.getChart(`${this.resourceName}/chart/byMonth/${project}`);
  }
  
  getBuildsByRequestChart(project) {
    return this.getChart(`${this.resourceName}/chart/byRequest/${project}`);
  }
  
  getBuildsByResultChart(project) {
    return this.getChart(`${this.resourceName}/chart/byResult/${project}`);
  }
}
