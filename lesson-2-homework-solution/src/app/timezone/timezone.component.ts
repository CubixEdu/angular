import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timezone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss']
})
export class TimezoneComponent {
  @Input() timezone = 'Europe/Budapest';
  @Input() isCurrent = false;

  @Output() changeTimezone = new EventEmitter<string>();

  time = '';

  constructor() { }

  ngOnInit(): void {
    this.updateTime();
  }

  updateTime() {
    this.time = new Date().toLocaleString('hu-HU', { timeZone: this.timezone });
  }

  timezoneSelectorClick() {
    this.changeTimezone.emit(this.timezone);
  }
}
