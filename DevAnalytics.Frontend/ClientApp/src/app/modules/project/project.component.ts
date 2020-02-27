import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from "../../../core/services/project/project.service";
import { Project, Repo } from "../../../core/models/project.model";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Location, DatePipe } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectId: string;
  repos: any[];
  project: Project;
  sprints: any[];

  faSpinner = faSpinner;
  areReposLoading = true;

  constructor(private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private datePipe: DatePipe) {
    this.projectId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.projectService.getRepos(this.projectId).subscribe((data: any) => {
      this.repos = data.result.value;
    }).add(() => { this.areReposLoading = false; });

    this.projectService.getProject(this.projectId).subscribe((data: any) => {
      this.project = data.result;

      this.projectService.getSprints(this.projectId, this.project.defaultTeam.id).subscribe((data: any) => {
        this.sprints = data.result.value;
      });
    });

  }

  goBack() {
    this.location.back();
  }
}
