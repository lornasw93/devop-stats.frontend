import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from "./modules/home/home.component";
import { NavMenuComponent } from './modules/nav-menu/nav-menu.component';
import { WikiComponent } from './modules/wiki/wiki.component';
import { TestPlansComponent } from './modules/test-plans/test-plans.component';
import { ProjectComponent } from "./modules/project/project.component";
import { BuildsComponent } from "./modules/builds/builds.component";
import { ReleasesComponent } from "./modules/releases/releases.component";
import { PullRequestsComponent } from './modules/pull-requests/pull-requests.component';
import { WorkItemsComponent } from './modules/work-items/work-items.component';
import { CommitsComponent } from "./modules/commits/commits.component";
import { SprintComponent } from "./modules/sprint/sprint.component";
import { CountDescComponent } from './modules/count-desc/count-desc.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'builds/:projectId', component: BuildsComponent },
  { path: 'releases/:projectId', component: ReleasesComponent },
  { path: 'pullrequests/:projectId', component: PullRequestsComponent },
  //{ path: 'pipelines', loadChildren: () => import('./modules/pipelines/pipelines.module').then(m => m.PipelinesModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    WikiComponent,
    TestPlansComponent,
    BuildsComponent,
    ReleasesComponent,
    ProjectComponent,
    PullRequestsComponent,
    CommitsComponent,
    SprintComponent,
    WorkItemsComponent,
    CountDescComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([]),
    FontAwesomeModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe, NgxChartsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
