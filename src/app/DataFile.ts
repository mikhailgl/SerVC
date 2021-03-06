import { TotalsDataPoint, CompanyDataPoint, IRRDataPoint } from './models';
import {CashFlow} from '@webcarrot/xirr/index';
import * as _ from 'lodash';

export function getPeriods(): Date[] {
  const periods = [];
  CompanyData.forEach(el => {
    if (!periods.find(period => {
      return period.getTime() === closestPeriod(el.investmentDate).getTime();
    })) {
      periods.push(closestPeriod(el.investmentDate));
    }
  });
  periods.sort((a, b) => {
    return a.getTime() - b.getTime();
  });
  return periods;
}

export function closestPeriod(date: Date) {
  const month = date.getMonth() + 1;
  if (month / 3 <= 1) {
    return new Date(date.getFullYear(), 2, 31);
  } else if (month / 3 <= 2) {
    return new Date(date.getFullYear(), 5, 30);
  } else if (month / 3 <= 3) {
    return new Date(date.getFullYear(), 8, 30);
  } else {
    return new Date(date.getFullYear(), 11, 31);
  }
}

export const TotalsData: TotalsDataPoint[] = [
  {period: new Date(2015, 11), cost: 116400, unrealized: 0, realized: 0, multiple: 1},
  {period: new Date(2016, 2), cost: 316400, unrealized: 99600, realized: 0, multiple: 1.31},
  {period: new Date(2016, 5), cost: 316400, unrealized: 0, realized: 99600, multiple: 1.31},
  {period: new Date(2016, 8), cost: 1416400, unrealized: 0, realized: 99600, multiple: 1.07},
  {period: new Date(2016, 11), cost: 2166400, unrealized: 0, realized: 99600, multiple: 1.05},
  {period: new Date(2017, 2), cost: 2166400, unrealized: 0, realized: 99600, multiple: 1.05},
  {period: new Date(2017, 5), cost: 3887948, unrealized: 537997, realized: 99600, multiple: 1.16},
  {period: new Date(2017, 8), cost: 4575448, unrealized: 537997, realized: 99600, multiple: 1.14},
  {period: new Date(2017, 11), cost: 5895448, unrealized: 537992, realized: 99600, multiple: 1.11},
  {period: new Date(2018, 2), cost: 6695448, unrealized: 537992, realized: 99600, multiple: 1.10},
  {period: new Date(2018, 5), cost: 11383341, unrealized: 6578399, realized: 99600, multiple: 1.59},
  {period: new Date(2018, 8), cost: 12549970, unrealized: 5072771, realized: 99600, multiple: 1.41},
  {period: new Date(2018, 11), cost: 12547110, unrealized: 10605182, realized: 99600, multiple: 1.85},
  {period: new Date(2019, 2), cost: 17506914, unrealized: 10363737, realized: 1299600, multiple: 1.67},
  {period: new Date(2019, 5), cost: 20759104, unrealized: 12852118, realized: 1299600, multiple: 1.68},
  {period: new Date(2019, 8), cost: {v: 21546507, f: '21.5M'}, unrealized: 12861778, realized: 1299600, multiple: 1.66},
  {period: new Date(2019, 11), cost: {v: 21546507, f: '21.5M'}, unrealized: 12061778, realized: 1299600, multiple: 1.62},
  {period: new Date(2020, 2), cost: {v: 21546507, f: '21.5M'}, unrealized: 21430654, realized: 1299600, multiple: 2.05},
];

export const CompanyData: CompanyDataPoint[] = [
  {
    company: 'Company 1',
    status: 'Active',
    investmentDate: new Date(2017, 7, 10),
    cost: 1520000,
    FMV: 7720000,
    gain: 6190000,
    GMultiple: 5.06,
    GIRR: 1.46,
    holding: .0277,
    totalRaised: 89840000,
    compValuation: 278260000
  },
  {
    company: 'Company 2',
    status: 'Active',
    investmentDate: new Date(2016, 10, 25),
    cost: 4390000,
    FMV: 8430000,
    gain: 4040000,
    GMultiple: 1.92,
    GIRR: .34,
    holding: .1327,
    totalRaised: 23200000,
    compValuation: 63500000
  },
  {
    company: 'Company 3',
    status: 'Sold',
    investmentDate: new Date(2016, 8, 18),
    cost: 600000,
    FMV: 1800000,
    gain: 1200000,
    GMultiple: 3.00,
    GIRR: .54,
    holding: .0055,
    totalRaised: 70660000,
    compValuation: 324510000
  },
  {
    company: 'Company 4',
    status: 'Active',
    investmentDate: new Date(2018, 6, 12),
    cost: 4370000,
    FMV: 11840000,
    gain: 7470000,
    GMultiple: 2.71,
    GIRR: 1.15,
    holding: .1479,
    totalRaised: 49220000,
    compValuation: 80000000
  },
  {
    company: 'Company 5',
    status: 'Active',
    investmentDate: new Date(2017, 6, 29),
    cost: 560000,
    FMV: 1040000,
    gain: 480000,
    GMultiple: 1.86,
    GIRR: .36,
    holding: .0692,
    totalRaised: 5680000,
    compValuation: 15000000
  },
  {
    company: 'Company 6',
    status: 'Active',
    investmentDate: new Date(2015, 6, 2),
    cost: 2190000,
    FMV: 2890000,
    gain: 690000,
    GMultiple: 1.32,
    GIRR: .13,
    holding: .0553,
    totalRaised: 26350000,
    compValuation: 55000000
  },
  {
    company: 'Company 7',
    status: 'Active',
    investmentDate: new Date(2019, 3, 12),
    cost: 1750000,
    FMV: 1750000,
    gain: 0,
    GMultiple: 1.00,
    GIRR: 0,
    holding: .1606,
    totalRaised: 3500000,
    compValuation: 10900000
  },
  {
    company: 'Company 8',
    status: 'Active',
    investmentDate: new Date(2017, 11, 20),
    cost: 2460000,
    FMV: 3470000,
    gain: 1020000,
    GMultiple: 1.41,
    GIRR: .23,
    holding: .12,
    totalRaised: 12150000,
    compValuation: 28960000
  },
  {
    company: 'Company 9',
    status: 'Write-Off',
    investmentDate: new Date(2018, 2, 1),
    cost: 800000,
    FMV: 0,
    gain: -800000,
    GMultiple: null,
    GIRR: 0,
    holding: .0615,
    totalRaised: 3000000,
    compValuation: 0
  },
  {
    company: 'Company 10',
    status: 'Active',
    investmentDate: new Date(2016, 9, 28),
    cost: 2840000,
    FMV: 5180000,
    gain: 2340000,
    GMultiple: 1.82,
    GIRR: .35,
    holding: .0546,
    totalRaised: 66600000,
    compValuation: 95000000
  },
  {
    company: 'Company 11',
    status: 'Sold',
    investmentDate: new Date(2015, 8, 13),
    cost: 70000,
    FMV: 170000,
    gain: 100000,
    GMultiple: 2.50,
    GIRR: 1.05,
    holding: null,
    totalRaised: 0,
    compValuation: 0

  }
];

export const flows: Array<CashFlow> = [
  {amount: -581697.7, date: new Date('2015-11-21')},
  {amount: -290821.3, date: new Date('2016-6-1')},
  {amount: -174600, date: new Date('2017-4-13')},
  {amount: -116400, date: new Date('2017-7-13')},
  {amount: -58200, date: new Date('2017-9-6')},
  {amount: -174600, date: new Date('2017-10-24')},
  {amount: -116400, date: new Date('2018-2-5')},
  {amount: -116400, date: new Date('2018-3-1')},
  {amount: -349200, date: new Date('2018-6-1')},
  {amount: -550000, date: new Date('2018-7-2')},
  {amount: -424000, date: new Date('2018-12-21')},
  {amount: -1000000, date: new Date('2019-2-5')},
  {amount: -754000, date: new Date('2019-4-7')},
  {amount: -1450000, date: new Date('2019-5-23')},
  {amount: -1100000, date: new Date('2019-8-25')},
  {amount: -1230000, date: new Date('2019-11-26')},
  {amount: -1200000, date: new Date('2020-1-1')},
  {amount: 19354737.16, date: new Date('2020-3-31')}
];
