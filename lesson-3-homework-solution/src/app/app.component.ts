import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneComponent } from './timezone/timezone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TimezoneComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTimezone = 'Europe/Budapest';
  timezonesList = [
    'Europe/Budapest',
    'America/New_York',
    'Atlantic/Reykjavik',
    'Australia/Sydney',
    'Iceland',
    'Japan'
  ];

  displayedTimezones = [
    'Europe/Budapest',
    'America/New_York',
  ];

  handleTimezoneChange(timezone: string) {
    this.selectedTimezone = timezone;
  }

  addNewTimezone() {
    this.displayedTimezones.push(this.timezonesList[this.displayedTimezones.length]);
  }
}
