import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.scss']
})
export class PodiumComponent {
  @Input() podium: string[] = [];
  
  @Output() hide = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hidePodium() {
    this.hide.emit();
  }
}
