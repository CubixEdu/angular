import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CounterComponent } from "./counter/counter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, CounterComponent, NgOptimizedImage]
})
export class AppComponent {
  title = 'Első Angularos alkalmazásom';
  logoSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  counter = {name: 'Mosogatás', id: 1};
  aim = 5;

  countChanged(count: number) {
    if (count === this.aim) {
      alert('Cél elérve');   
    } 
  }
}
