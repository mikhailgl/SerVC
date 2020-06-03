import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {TaskFourTableDataSource} from './task-four-table-datasource';
import {CompanyDataPoint} from '../../models';
import {CompanyData} from '../../DataFile';

@Component({
  selector: 'app-task-four-table',
  templateUrl: './task-four-table.component.html',
  styleUrls: ['./task-four-table.component.css']
})
export class TaskFourTableComponent implements AfterViewInit, OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CompanyDataPoint>;
  @Input() data: CompanyDataPoint[] = CompanyData;
  dataSource: TaskFourTableDataSource;
  totalsData;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Company', 'FMV', 'Cost', 'Gain', 'GIRR', 'Holding', 'GMultiple', 'Total Raised', 'Company Valuation', 'InvestmentDate'];

  ngOnInit() {
    this.dataSetup();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  dataSetup() {
    this.totalsData = {
      totalCost: 0,
      totalFMV: 0,
      totalGain: 0,
      totalGMultiple: 0,
      totalRaised: 0,
    };
    this.dataSource = new TaskFourTableDataSource(this.data);
    this.data.forEach(company => {
      this.totalsData.totalCost += company.cost;
      this.totalsData.totalFMV += company.FMV;
      this.totalsData.totalGain += company.gain;
      this.totalsData.totalRaised += company.totalRaised;
    });
    this.totalsData.totalGMultiple = this.totalsData.totalFMV / this.totalsData.totalCost;
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* tslint:disable:no-string-literal */
    if (changes['data'] && this.data && this.sort && this.paginator) {
      this.dataSetup();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    }
  }
}
