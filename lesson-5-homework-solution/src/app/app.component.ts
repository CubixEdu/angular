import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CovidRecord } from './covid/covid-record.model';
import { CovidDirective } from './covid/covid.directive';
import { CovidPipe } from './covid/covid.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CovidDirective, CovidPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'covid-homework';

  covidData: CovidRecord[] = [
    {testAmount: 1234, hospitalized: 2500, date: new Date('2022-03-01')},
    {testAmount: 45323, hospitalized: 2610, date: new Date('2022-03-02')},
    {testAmount: 34534, hospitalized: 2742, date: new Date('2022-03-03')},
    {testAmount: 21313, hospitalized: 2200, date: new Date('2022-03-04')},
    {testAmount: 543, hospitalized: 2340, date: new Date('2022-03-05')},
    {testAmount: 7863, hospitalized: 2670, date: new Date('2022-03-06')},
    {testAmount: 12313, hospitalized: 1700, date: new Date('2022-03-07')},
  ];
  iWantTheTruth = false;

  constructor() {
    this.covidData.forEach(covidRecord => covidRecord.infected = this.generateInfectedNumber(covidRecord));
  }

  private generateInfectedNumber(covidRecord: CovidRecord) {
    let infectedNumber = Math.random() * 1000;
    const infectedTreshold = Math.floor(covidRecord.testAmount * 0.05);

    if(infectedNumber > infectedTreshold) {
      infectedNumber = infectedTreshold;
    }

    if(infectedNumber > 500) {
      return 500;
    } else {
      return Math.floor(infectedNumber);
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    console.log(e);
    if(e.code === 'KeyT' && e.altKey) {
      this.iWantTheTruth = !this.iWantTheTruth;
    }
  }

}
