import {Component, OnInit, SimpleChanges} from '@angular/core';
import {CompanyData, getPeriods, TotalsData} from '../DataFile';
import {TaskFourTableDataSource} from '../task-four/task-four-table/task-four-table-datasource';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {

  constructor() {
  }

  title = 'By Companies';
  type = 'PieChart';
  data = [];
  columns = ['Company', 'FMV'];
  options = {
    pieHole: 0.5

  };
  width = 1000;
  height = 400;

  periods: Date[] = [];

  ngOnInit() {
    CompanyData.forEach(el => {
      this.data.push([el.company, el.FMV]);
    });
    this.periods = getPeriods();
  }

  changePeriod(event) {
    this.data = [];
    CompanyData.forEach(el => {
      if (el.investmentDate < event.value) {
        this.data.push([el.company, el.FMV]);
      }
    });

  }
}
