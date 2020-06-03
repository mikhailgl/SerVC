import {Component, OnInit} from '@angular/core';
import {CompanyData, getPeriods} from '../DataFile';

@Component({
  selector: 'app-task-four',
  templateUrl: './task-four.component.html',
  styleUrls: ['./task-four.component.css']
})
export class TaskFourComponent implements OnInit {

  activeData = CompanyData.filter(el => {
    return el.status === 'Active';
  });
  soldData = CompanyData.filter(el => {
    return el.status === 'Sold';
  });
  writeoffData = CompanyData.filter(el => {
    return el.status === 'Write-Off';
  });

  periods: Date[] = [];

  constructor() {
  }

  ngOnInit() {
    this.periods = getPeriods();
  }

  changePeriod(event) {
    this.activeData = CompanyData.filter(el => {
      return el.status === 'Active' && el.investmentDate < event.value;
    });
    this.soldData = CompanyData.filter(el => {
      return el.status === 'Sold' && el.investmentDate < event.value;
    });
    this.writeoffData = CompanyData.filter(el => {
      return el.status === 'Write-Off' && el.investmentDate < event.value;
    });

  }
}
