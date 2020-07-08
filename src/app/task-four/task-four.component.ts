import {Component, OnInit} from '@angular/core';
import {CompanyData, getPeriods} from '../DataFile';
import {CompanyDataPoint} from '../models';

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

  activeTotal: CompanyDataPoint;
  soldTotal: CompanyDataPoint;
  writeoffTotal: CompanyDataPoint;
  allTotal: CompanyDataPoint;
  periods: Date[] = [];
  showActive = true;
  showSold = true;
  showWriteoff = true;
  config = {
    displayKey:"description", //if objects array passed which key to be displayed defaults to description
    search:true, //true/false for the search functionlity defaults to false,
    placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: ()=>{}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,    
  }

  constructor() {
  }

  ngOnInit() {
    this.periods = getPeriods();
    this.dataSetup();
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
    this.dataSetup();
  }

  dataSetup() {
    this.activeTotal = this.setupTotals(this.activeData);
    this.soldTotal = this.setupTotals(this.soldData);
    this.writeoffTotal = this.setupTotals(this.writeoffData);
    const allTotals = [this.activeTotal, this.soldTotal, this.writeoffTotal];
    this.allTotal = this.setupTotals(allTotals);
  }

  setupTotals(data: CompanyDataPoint[]) {
    const totalsData: CompanyDataPoint = new CompanyDataPoint();
    totalsData.company = 'Total';
    totalsData.cost = 0;
    totalsData.FMV = 0;
    totalsData.gain = 0;
    totalsData.GMultiple = 0;
    totalsData.totalRaised = 0;
    data.forEach(company => {
      totalsData.cost += company.cost;
      totalsData.FMV += company.FMV;
      totalsData.gain += company.gain;
      totalsData.totalRaised += company.totalRaised;
    });
    totalsData.GMultiple = totalsData.FMV / totalsData.cost;
    return totalsData;
  }

  toggleActive() {
    this.showActive = !this.showActive;
  }

  toggleSold() {
    this.showSold = !this.showSold;
  }

  toggleWriteoff() {
    this.showWriteoff = !this.showWriteoff;
  }
}




