export interface CovidRecord {
    testAmount: number;
    hospitalized: number;
    date: Date;
    infected?: number | undefined;
  }