import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyUppercasePipe } from "./my-uppercase.pipe";
import { Fruit } from './fruit/fruit.model';
import { DisplayFruitPipe } from "./fruit/display-fruit.pipe";
import { FruitDirective } from './fruit/fruit.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MyUppercasePipe, DisplayFruitPipe, FruitDirective],
    providers: [DisplayFruitPipe]
})
export class AppComponent {
  text = 'Cubix Angular course'

  hatedFruits = [
    'narancs',
    'barack'
  ]

  fruits: Fruit[] = [
    {name: 'alma', score: 4, color: 'red'},
    {name: 'banán', score: 10, color: 'yellow'},
    {name: 'narancs', score: 0, color: 'orange'},
    {name: 'szilva', score: 3, color: 'plum'},
    {name: 'szőlő', score: 7, color: 'green'},
    {name: 'barack', score: 6, color: 'peachpuff'},
  ];

  constructor(
    private readonly displayFruitPipe: DisplayFruitPipe
  ) {
    this.pipeTest();
  }

  pipeTest() {
    console.log(this.displayFruitPipe.transform(this.fruits[1]));
  }
}
