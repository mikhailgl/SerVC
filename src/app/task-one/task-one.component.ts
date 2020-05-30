import { Component, OnInit } from '@angular/core';
import { TotalsData } from '../DataFile';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {

  constructor() { }

  title = 'Totals by Period';
  type = 'ComboChart';
  data = [

  ];
  columns = ['Period', 'Cost', 'Unrealized Gain', 'Realized Gain', 'Gross Multiple'];
  options = {
    hAxis: {
      slantedText: true
    },
    vAxis: {
      0: {format: 'long'},
      1: {}
    },
    seriesType: 'bars',
    series: {
      0: {targetAxisIndex: 0},
      3: {targetAxisIndex: 1, type: 'line'}
    },

    isStacked: true

  };
  width = 1000;
  height = 400;

  ngOnInit() {
    TotalsData.forEach(el => {
      this.data.push([this.formatDate(el.period), el.cost, el.unrealized, el.realized, el.multiple]);
    });
  }

  formatDate(date: Date): string {
    return date.getFullYear() + (date.getMonth() > 8 ? '-' : '-0') + (date.getMonth() + 1);
  }

}
