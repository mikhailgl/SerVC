import { DataSource } from '@angular/cdk/collections';
// import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {CompanyDataPoint} from '../../models';
import {CompanyData} from '../../DataFile';
import {Input} from '@angular/core';


/**
 * Data source for the TaskFourTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TaskFourTableDataSource extends DataSource<CompanyDataPoint> {
  data: CompanyDataPoint[];
  // paginator: MatPaginator;
  sort: MatSort;

  constructor(data: CompanyDataPoint[]) {
    super();
    this.data = data;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CompanyDataPoint[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      // this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getSortedData([...this.data]);
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: CompanyDataPoint[]) {
    // const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    // return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CompanyDataPoint[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Company': return compare(a.company, b.company, isAsc);
        case 'FMV': return compare(+a.FMV, +b.FMV, isAsc);
        case 'Gain': return compare(+a.gain, +b.gain, isAsc);
        case 'GMultiple': return compare(+a.GMultiple, +b.GMultiple, isAsc);
        case 'GIRR': return compare(+a.GIRR, +b.GIRR, isAsc);
        case 'Cost': return compare(+a.cost, +b.cost, isAsc);
        case 'Holding': return compare(+a.holding, +b.holding, isAsc);
        case 'TotalRaised': return compare(+a.totalRaised, +b.totalRaised, isAsc);
        case 'CompValuation': return compare(+a.compValuation, +b.compValuation, isAsc);
        case 'InvestmentDate': return compare(+a.investmentDate, +b.investmentDate, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number | Date, b: string | number | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
