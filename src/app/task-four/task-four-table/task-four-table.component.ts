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
  @Input() totalsData: CompanyDataPoint;
  @Input() showData = true;
  dataSource: TaskFourTableDataSource;

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
    this.dataSource = new TaskFourTableDataSource(this.showData ? this.data : []);
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* tslint:disable:no-string-literal */
    if ((changes['data'] || changes['showData']) && this.data && this.sort && this.paginator) {
      this.dataSetup();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    }
  }
}
