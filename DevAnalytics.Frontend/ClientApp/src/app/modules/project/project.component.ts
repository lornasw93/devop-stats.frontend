import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Location, DatePipe } from '@angular/common';
import { Project } from "../../../core/basic.model";
import { ApiService } from "../../../core/api.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectId: string;
  repos: any[];
  project: Project;
  pastSprintsCount: number;

  currentSprint: any;

  faSpinner = faSpinner;
  areReposLoading = true;

  constructor(private activatedRoute: ActivatedRoute,
    private service: ApiService,
    private location: Location,
    private datePipe: DatePipe) {
    this.projectId = this.activatedRoute.snapshot.params.projectId;
  }

  ngOnInit() {
    this.service.getRepos(this.projectId).subscribe((data: any) => {
      this.repos = data.result.value;
    }).add(() => { this.areReposLoading = false; });

    this.service.getProject(this.projectId).subscribe((data: any) => {
      this.project = data.result;


    });

    this.service.getSprints(this.projectId, this.project.defaultTeam.id).subscribe((data: any) => {
      this.pastSprintsCount = data.result.count;
    });

    this.service.getCurrentSprint(this.projectId, this.project.defaultTeam.id).subscribe((data: any) => {
      this.currentSprint = data.result;
    });

  }

  goBack() {
    this.location.back();
  }
}
