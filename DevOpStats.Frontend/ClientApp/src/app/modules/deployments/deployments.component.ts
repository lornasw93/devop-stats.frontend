import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from "../../../core/api.service";

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit {
  seriesByMonth: any[];
  rowData: any;
  count: any;

  view: any[] = [700, 400];
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  yAxisLabel = 'Count';
  timeline = true;
  colorScheme = { domain: ['#5AA454'] };

  private gridApi;
  private gridColumnApi;
  private rowSelection;

  projectId: string;

  constructor(private readonly releasesService: ApiService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.rowSelection = "single";
    this.projectId = this.activatedRoute.snapshot.params.projectId;
  }

  ngOnInit() {
    this.setData();
  }

  goBack() {
    this.location.back();
  }

  setData() {
    this.releasesService.getReleases(this.projectId).subscribe((data: any) => {
      this.rowData = data.result.value;
    });

    //this.releasesService.getReleasesCount('fpmcore').subscribe((data: any) => {
    //  this.count = data.result.count;
    //});

    this.releasesService.getReleasesByMonthChart(this.projectId).subscribe((data: any) => {
      this.seriesByMonth = [data];
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  columnDefs = [
    { headerName: 'Id', field: 'id' },
    { headerName: 'Name', field: 'name' },
    {
      headerName: 'Status', field: '',
      //cellStyle(params) {
      //  if (params.value === 'succeeded') {
      //    return { color: 'white', backgroundColor: 'green' };
      //  }
      //  else if (params.value === 'failed') {
      //    return { color: 'white', backgroundColor: 'red' };
      //  } else {
      //    return null;
      //  }
      //}
    },
    { headerName: 'Created By', field: 'createdBy.displayName' },
    {
      headerName: 'Created On', field: 'createdOn',
      cellRenderer: (data) => {
        return data.value ? this.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
      }
    },
    //{ headerName: 'Variables', field: 'variables' },
    //{ headerName: 'Environments', field: 'environments' },
    {
      headerName: 'Url', field: 'url',
      cellRenderer(params) {
        return `<a href="${params.value}" target="_blank">Link</a>`;
      }
    }
  ];
}
