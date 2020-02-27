import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from "../../../core/api.service";

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {
  seriesByMonth: any[];
  seriesByResult: any[];
  seriesByRequest: any[];
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

  projectId: string;

  private gridApi;
  private gridColumnApi;
  private rowSelection;

  constructor(private readonly service: ApiService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private location: Location) {

    this.rowSelection = "single";
    this.projectId = this.route.snapshot.params['projectId'];
  }

  ngOnInit() {
    this.setData();
  }

  goBack() {
    this.location.back();
  }

  setData() { 
    this.service.getBuilds('fpmcore').subscribe((data: any) => {
      this.rowData = data.result.value;
    });
     
    this.service.getBuildsByMonthChart('fpmcore').subscribe((data: any) => {
      this.seriesByMonth = [data];
    });

    this.service.getBuildsByRequestChart('fpmcore').subscribe((data: any) => {
      this.seriesByRequest = [data];
    });

    this.service.getBuildsByResultChart('fpmcore').subscribe((data: any) => {
      this.seriesByResult = [data];
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  columnDefs = [
    { headerName: 'Build Number', field: 'buildNumber' },
    {
      headerName: 'Status', field: 'result',
      cellStyle(params) {
        if (params.value === 'succeeded') {
          return { color: 'white', backgroundColor: 'green' };
        }
        else if (params.value === 'failed') {
          return { color: 'white', backgroundColor: 'red' };
        } else {
          return null;
        }
      }
    },
    { headerName: 'Requested For', field: 'requestedFor.displayName' },
    {
      headerName: 'Queue Time', field: 'queueTime',
      cellRenderer: (data) => {
        return data.value ? this.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
      }
    },
    {
      headerName: 'Start Time', field: 'startTime',
      cellRenderer: (data) => {
        return data.value ? this.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
      }
    },
    {
      headerName: 'Finish Time',
      field: 'finishTime',
      cellRenderer: (data) => {
        return data.value ? this.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
      }
    },
  ];
}
