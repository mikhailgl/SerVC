import { Component, OnInit } from '@angular/core';
import {CompanyData, TotalsData} from '../DataFile';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {

  constructor() { }

  title = 'By Companies';
  type = 'PieChart';
  data = [

  ];
  columns = ['Company', 'FMV'];
  options = {
    pieHole: 0.5

  };
  width = 1000;
  height = 400;

  ngOnInit() {
    CompanyData.forEach(el => {

      this.data.push([el.company, el.FMV]);
    });
  }

}
