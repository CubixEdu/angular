import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CounterComponent } from "./counter/counter.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, CounterComponent, NgOptimizedImage, FormsModule]
})
export class AppComponent {
  title = 'Első Angularos alkalmazásom';
  logoSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  counters: {name: string, id: number, aim: number}[] = [];
  aim = 5;
  changeDetectionCounter = 0;
  isComplete = false;
  counterCount = 0;

  countChanged(count: number) {
    if (count === this.aim) {
      this.isComplete = true;
      alert('Cél elérve');   
    } 

    // if(count === 3) {
    //   this.aim = 10;
    //   this.counter = {name: 'Teregetés', id: 2};
    // }
  }

  counterCountChanged() {
    const diff = this.counterCount - this.counters.length;

    if(diff > 0) {
      const newCounters = new Array(diff)
        .fill(undefined)
        .map((_, i) => ({name: '', id: i + this.counterCount, aim: 10}));
      this.counters = [...this.counters, ...newCounters];
    } else if(diff < 0) {
      this.counters.splice(this.counterCount);
    }
  }

  // counterCountChanged(event: any) {
  //   this.counterCount = event.target.value
  // }

  get log() {
    this.changeDetectionCounter++;
    
    console.log(this.changeDetectionCounter);
    
    return 'change detection test';}
}
