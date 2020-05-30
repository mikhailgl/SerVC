

export class TotalsDataPoint {
  period: Date;
  cost: {v: number, f: string} | number;
  unrealized: {v: number, f: string} | number;
  realized: {v: number, f: string} | number;
  multiple: {v: number, f: string} | number;
}

export class CompanyDataPoint {
  company: string;
  status: string;
  investmentDate: Date;
  cost: number;
  FMV: number;
  gain: number;
  GMultiple: number;
  GIRR: number;
  holding: number;
  totalRaised: number;
  compValuation: number;
}

export class IRRDataPoint{
  date: Date;
  sum: number;
}
