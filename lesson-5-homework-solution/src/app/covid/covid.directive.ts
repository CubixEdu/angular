import { Directive, ElementRef, Input } from '@angular/core';
import { CovidRecord } from './covid-record.model';

@Directive({
  selector: '[covidRecord]',
  standalone: true
})
export class CovidDirective {

  @Input() set covidRecord(covidRecord: CovidRecord) {
    if(covidRecord?.infected && (covidRecord.infected / covidRecord.testAmount) * 100 > 2.5) {
      this.element.nativeElement.style.color = 'red';
    } else {
      this.element.nativeElement.style.color = 'green';
    }
  }

  @Input() set iWantTheTruth(iWantTheTruth: boolean) {
    if(iWantTheTruth) {
      this.element.nativeElement.style.backgroundColor = 'blue';
    } else {
      this.element.nativeElement.style.backgroundColor = null;
    }
  }

  constructor(private element: ElementRef) { }

}
