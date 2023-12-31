import { Pipe, PipeTransform } from '@angular/core';
import { CovidRecord } from './covid-record.model';

@Pipe({
  name: 'covid',
  standalone: true
})
export class CovidPipe implements PipeTransform {

  transform(covidRecord: CovidRecord, iWantTheTruth: boolean): unknown {
    if(iWantTheTruth) {
      return `A mai ${covidRecord.testAmount} mintavételből nem tudjuk, hogy hány pozitív teszt lett, kórházban pedig ${covidRecord.hospitalized} beteg van.`
    } else {
      return `A mai ${covidRecord.testAmount * 2} mintavételből ${covidRecord.infected} pozitív teszt lett, kórházban pedig ${Math.floor(covidRecord.hospitalized / 3)} beteg van, ők mindannyian oltatlan idős krónikus betegek.`
    }
  }

}
