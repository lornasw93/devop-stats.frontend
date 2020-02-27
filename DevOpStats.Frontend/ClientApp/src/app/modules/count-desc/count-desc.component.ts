import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-desc',
  templateUrl: './count-desc.component.html',
  styleUrls: ['./count-desc.component.css']
})
export class CountDescComponent implements OnInit {
  @Input() count: number;
  @Input() className: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }
}
