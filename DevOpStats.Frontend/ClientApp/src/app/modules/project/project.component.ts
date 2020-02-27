import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Location, DatePipe } from '@angular/common';
import { Project, Sprint } from "../../../core/basic.model";
import { ApiService } from "../../../core/api.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectId: string;
  defaultTeamId: string;

  repos: any[];
  project: Project;
  pastSprintsCount: number;

  currentSprint: any;

  faSpinner = faSpinner;
  areReposLoading = true;

  workItems: any;

  constructor(private activatedRoute: ActivatedRoute,
    private service: ApiService,
    private location: Location,
    private datePipe: DatePipe) {
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.defaultTeamId = this.activatedRoute.snapshot.params.teamId;
  }

  ngOnInit() {
    this.service.getProject(this.projectId).subscribe((data: any) => {
      this.project = data.result;
    });
     
    this.service.getSprintsCount(this.projectId, this.defaultTeamId).subscribe((data: number) => {
      this.pastSprintsCount = data;
    });

    this.service.getCurrentSprint(this.projectId, this.defaultTeamId).subscribe((data: any) => {
      this.currentSprint = data;
    });

    this.service.getRepos(this.projectId).subscribe((data: any) => {
      this.repos = data.result.value;


    }).add(() => { this.areReposLoading = false; });
 
  }
    
  goBack() {
    this.location.back();
  }
}
