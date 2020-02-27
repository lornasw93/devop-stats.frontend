import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../../core/api.service";

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.css']
})
export class PullRequestsComponent implements OnInit {
  projectId: string;
  teamId: string;

  constructor(private activatedRoute: ActivatedRoute,
    private location: Location,
    private service: ApiService) {
    this.projectId = this.activatedRoute.snapshot.params.projectId;
    this.teamId = this.activatedRoute.snapshot.params.teamId;
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
