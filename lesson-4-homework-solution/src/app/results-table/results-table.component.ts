import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '../results';

@Component({
  selector: 'app-results-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent {
  @Input() results: Result[] = [];
  
  @Input() selectedRow?: number;
  @Output() selectedRowChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRow(index: number) {
    this.selectedRowChange.emit(index);
  }
}
