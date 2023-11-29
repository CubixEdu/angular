import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ressults } from './results';
import { PodiumComponent } from './podium/podium.component';
import { ResultsTableComponent } from './results-table/results-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ResultsTableComponent, PodiumComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  results = ressults;
  selectedRow?: number = undefined;
}
