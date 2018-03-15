import {Component, OnInit} from '@angular/core';
import {ChartsService} from '../../../@core/data/charts.service';

@Component({
  selector: 'ngx-echarts',
  styleUrls: ['./url.component.scss'],
  templateUrl: './url.component.html',
})
export class UrlComponent implements OnInit {
  pieOption: any = {};
  constructor (private chartsService: ChartsService) {
    this.pieOption = this.chartsService.getPieData();
  }
  ngOnInit(): void {
  }
}
