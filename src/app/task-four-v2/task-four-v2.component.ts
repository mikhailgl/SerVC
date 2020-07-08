import { Component, OnInit } from '@angular/core';
import { IDataOptions, FieldListService, IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-task-four-v2',
  providers: [FieldListService],
  templateUrl: './task-four-v2.component.html',
  styleUrls: ['./task-four-v2.component.css']
  // specifies the template string for the pivot table component
  // template: `<div><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings width=width></ejs-pivotview></div>`
})
export class TaskFourV2Component implements OnInit {
    public width: string;
    public dataSourceSettings: IDataOptions;
    public pivotData: IDataSet[];

    ngOnInit(): void {

      this.pivotData = [
                        { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
                        { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
                        { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
                        { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
                        { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }];
        
                this.dataSourceSettings = {
                    dataSource: this.pivotData,
                };

        // this.width = "100%";

        this.dataSourceSettings = {
            dataSource: this.pivotData,
            expandAll: false,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year', showSubTotals: false }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country', showSubTotals: false }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
}