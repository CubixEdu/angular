import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() aim = 10;

  @Input({required: false}) counter?: {name: string, id: number};
  
  @Output() countChange = new EventEmitter<number>();

  @ViewChild('btn') buttonRef: ElementRef<HTMLButtonElement> | undefined;

  count = 0;

  constructor() {
    console.log('constructor');
  }

  incrementCounter() {
    this.count++;
    this.countChange.emit(this.count);
  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    // this.buttonRef!.nativeElement.textContent = 'Set from TS';
  }
  
  ngOnDestroy(): void {
    console.log('on destroy');
  }

  get isComplete() {
    return this.count >= this.aim;
  }
}
