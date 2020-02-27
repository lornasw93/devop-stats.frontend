import { Component, OnInit } from '@angular/core';
import { faSpinner, faEllipsisH, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Project } from "../../../core/basic.model";
import { ApiService } from "../../../core/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  projects: any;
  count: any;
  project: Project;
  currentSprint: any;

  faSpinner = faSpinner;
  faEllipsisH = faEllipsisH;
  faChartBar = faChartBar;
   
  areProjectsLoading = true;

  constructor(private readonly projectService: ApiService) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: any[]) => {
      this.projects = data;
    }).add(() => { this.areProjectsLoading = false; });
  }

  getA(projectId, teamId) {
    this.projectService.getCurrentSprint(projectId, teamId).subscribe((data: any) => {
      this.currentSprint = data.result;
      console.log(this.currentSprint);
    });
  }
   
  //onSelectionChanged() {
  //  const selectedRows = this.gridApi.getSelectedRows();

  //  if (selectedRows.length === 1) {
  //    this.project = selectedRows[0];
  //    console.log(this.project);

  //    this.router.navigate([`project/${this.project.id}`]);
  //  }

  //  // console.log(selectedRows.length === 1 ? selectedRows[0].id : "");
  //} 
} 
